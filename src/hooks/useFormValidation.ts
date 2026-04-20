"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  email?: boolean;
  phone?: boolean;
  custom?: (value: string) => string | null;
}

interface ValidationRules {
  [key: string]: ValidationRule;
}

interface FormValidationOptions {
  rules: ValidationRules;
  onSubmit?: (data: any) => void;
  onError?: (errors: any) => void;
}

export const useFormValidation = (options: FormValidationOptions) => {
  const [values, setValues] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string | null => {
    const rule = options.rules[name];
    if (!rule) return null;

    // Required validation
    if (rule.required && (!value || value.trim() === '')) {
      return 'هذا الحقل مطلوب';
    }

    // Skip other validations if field is empty and not required
    if (!value || value.trim() === '') return null;

    // Min length validation
    if (rule.minLength && value.length < rule.minLength) {
      return `يجب أن يكون طول النص ${rule.minLength} أحرف على الأقل`;
    }

    // Max length validation
    if (rule.maxLength && value.length > rule.maxLength) {
      return `يجب أن يكون طول النص ${rule.maxLength} أحرف على الأكثر`;
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(value)) {
      return 'تنسيق النص غير صحيح';
    }

    // Email validation
    if (rule.email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        return 'البريد الإلكتروني غير صحيح';
      }
    }

    // Phone validation (Egyptian numbers)
    if (rule.phone) {
      const phonePattern = /^(\+20|0)?1[0-9]{9}$/;
      if (!phonePattern.test(value.replace(/\s/g, ''))) {
        return 'رقم الهاتف غير صحيح';
      }
    }

    // Custom validation
    if (rule.custom) {
      return rule.custom(value);
    }

    return null;
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    Object.keys(options.rules).forEach(name => {
      const error = validateField(name, values[name] || '');
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, values[name] || '');
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched: { [key: string]: boolean } = {};
    Object.keys(options.rules).forEach(name => {
      allTouched[name] = true;
    });
    setTouched(allTouched);

    if (!validateForm()) {
      options.onError?.(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      await options.onSubmit?.(values);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setValues({});
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    validateField,
    validateForm
  };
};

// Common validation rules
export const validationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[\u0600-\u06FF\s\w]+$/,
    custom: (value: string) => {
      if (value.trim().split(' ').length < 2) {
        return 'يرجى إدخال الاسم الكامل';
      }
      return null;
    }
  },
  
  email: {
    required: true,
    email: true,
    maxLength: 100
  },
  
  phone: {
    required: true,
    phone: true,
    custom: (value: string) => {
      const cleaned = value.replace(/\s/g, '');
      if (cleaned.length < 10 || cleaned.length > 13) {
        return 'رقم الهاتف يجب أن يكون بين 10 و 13 رقم';
      }
      return null;
    }
  },
  
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    custom: (value: string) => {
      if (value.trim().length < 10) {
        return 'الرسالة قصيرة جداً، يرجى كتابة تفاصيل أكثر';
      }
      return null;
    }
  },
  
  company: {
    maxLength: 100,
    pattern: /^[\u0600-\u06FF\s\w]+$/
  },
  
  password: {
    required: true,
    minLength: 8,
    maxLength: 50,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    custom: (value: string) => {
      if (!/(?=.*[a-z])/.test(value)) {
        return 'يجب أن تحتوي كلمة المرور على حرف صغير';
      }
      if (!/(?=.*[A-Z])/.test(value)) {
        return 'يجب أن تحتوي كلمة المرور على حرف كبير';
      }
      if (!/(?=.*\d)/.test(value)) {
        return 'يجب أن تحتوي كلمة المرور على رقم';
      }
      if (!/(?=.*[@$!%*?&])/.test(value)) {
        return 'يجب أن تحتوي كلمة المرور على رمز خاص';
      }
      return null;
    }
  }
};

// Input component with validation
interface ValidatedInputProps {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export const ValidatedInput: React.FC<ValidatedInputProps> = ({
  name,
  type = 'text',
  placeholder,
  label,
  value,
  error,
  touched,
  onChange,
  onBlur,
  required = false,
  disabled = false,
  className = ''
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-white font-bold mb-2">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-3 rounded-xl bg-[#0E0E0E] border-2 text-white transition-colors focus:outline-none ${
          error && touched
            ? 'border-red-500 focus:border-red-500'
            : 'border-[#6C63FF]/30 focus:border-[#6C63FF]'
        }`}
        aria-describedby={error && touched ? `${name}-error` : undefined}
        aria-invalid={error && touched ? 'true' : 'false'}
      />
      {error && touched && (
        <motion.p
          id={`${name}-error`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

// Textarea component with validation
interface ValidatedTextareaProps {
  name: string;
  placeholder?: string;
  label?: string;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  className?: string;
}

export const ValidatedTextarea: React.FC<ValidatedTextareaProps> = ({
  name,
  placeholder,
  label,
  value,
  error,
  touched,
  onChange,
  onBlur,
  required = false,
  disabled = false,
  rows = 5,
  className = ''
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-white font-bold mb-2">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={`w-full px-4 py-3 rounded-xl bg-[#0E0E0E] border-2 text-white transition-colors focus:outline-none resize-none ${
          error && touched
            ? 'border-red-500 focus:border-red-500'
            : 'border-[#6C63FF]/30 focus:border-[#6C63FF]'
        }`}
        aria-describedby={error && touched ? `${name}-error` : undefined}
        aria-invalid={error && touched ? 'true' : 'false'}
      />
      {error && touched && (
        <motion.p
          id={`${name}-error`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};
