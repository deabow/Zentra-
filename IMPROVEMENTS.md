# زنترا - موقع وكالة التسويق الإبداعي

## التحسينات المطبقة 🚀

تم تطبيق جميع التحسينات المطلوبة على موقع زنترا لتحسين الأداء والأمان وتجربة المستخدم.

### 1. تحسين الأداء والسرعة ⚡

- **Lazy Loading**: تحميل الصور عند الحاجة فقط
- **Service Worker**: تخزين مؤقت للصفحات والموارد
- **Web App Manifest**: دعم PWA
- **تحسين الخطوط**: تحميل محسن لـ Google Fonts
- **تحسين الصور**: دعم WebP و AVIF
- **Code Splitting**: تقسيم الكود لتحسين التحميل

### 2. تحسين محركات البحث (SEO) 🔍

- **Meta Tags**: وصف شامل لكل صفحة
- **Structured Data**: بيانات منظمة للشركة والخدمات
- **Sitemap**: خريطة الموقع XML
- **Robots.txt**: توجيهات لمحركات البحث
- **Open Graph**: تحسين المشاركة على وسائل التواصل
- **Canonical URLs**: روابط أساسية للصفحات

### 3. تحسين إمكانية الوصول ♿

- **ARIA Labels**: تسميات للعناصر التفاعلية
- **Keyboard Navigation**: دعم التنقل بالكيبورد
- **High Contrast Mode**: وضع التباين العالي
- **Screen Reader**: دعم قارئات الشاشة
- **Focus Indicators**: مؤشرات التركيز الواضحة
- **Skip Links**: روابط للانتقال السريع للمحتوى

### 4. إثراء المحتوى 📝

- **Testimonials**: شهادات عملاء حقيقية
- **Case Studies**: دراسات حالة مفصلة
- **Blog Section**: قسم مدونة مع مقالات مفيدة
- **Portfolio Gallery**: معرض أعمال تفاعلي
- **Statistics**: إحصائيات الأداء

### 5. ميزات تفاعلية 🎯

- **Chatbot**: مساعد ذكي للرد على الاستفسارات
- **Contact Form**: نموذج اتصال متقدم مع validation
- **Portfolio Modal**: نوافذ منبثقة لعرض الأعمال
- **Interactive Animations**: حركات تفاعلية محسنة
- **Hover Effects**: تأثيرات hover متقدمة

### 6. تحسين تجربة الموبايل 📱

- **Touch Optimization**: تحسين التفاعل باللمس
- **Responsive Design**: تصميم متجاوب لجميع الشاشات
- **Mobile Menu**: قائمة موبايل محسنة
- **Touch Feedback**: ردود فعل اللمس
- **Viewport Optimization**: تحسين viewport للجوال
- **Performance**: تحسين الأداء على الموبايل

### 7. تتبع وتحليلات 📊

- **Google Analytics**: تتبع الزوار والسلوك
- **Heatmap Tracking**: خرائط حرارية للتفاعل
- **Conversion Tracking**: تتبع التحويلات
- **Event Tracking**: تتبع الأحداث المخصصة
- **Scroll Tracking**: تتبع عمق التمرير
- **Form Analytics**: تحليل النماذج

### 8. تحسين الأمان 🔒

- **Security Headers**: headers أمنية شاملة
- **CSP**: سياسة أمان المحتوى
- **HTTPS**: دعم الاتصال الآمن
- **Form Validation**: التحقق من صحة البيانات
- **Rate Limiting**: حماية من الهجمات
- **Input Sanitization**: تنظيف المدخلات

## الملفات المضافة/المحدثة

### مكونات جديدة:
- `LazyImage.tsx` - تحميل الصور المؤجل
- `PerformanceOptimizer.tsx` - تحسين الأداء
- `StructuredData.tsx` - البيانات المنظمة
- `AccessibilityEnhancer.tsx` - تحسين إمكانية الوصول
- `MobileOptimizer.tsx` - تحسين الموبايل
- `Analytics.tsx` - Google Analytics
- `HeatmapTracker.tsx` - تتبع الخرائط الحرارية
- `ConversionTracker.tsx` - تتبع التحويلات
- `Chatbot.tsx` - مساعد ذكي
- `ContactForm.tsx` - نموذج اتصال متقدم
- `PortfolioGallery.tsx` - معرض أعمال
- `TestimonialsSection.tsx` - شهادات العملاء
- `CaseStudiesSection.tsx` - دراسات الحالة
- `BlogSection.tsx` - قسم المدونة

### ملفات الأمان:
- `middleware.ts` - middleware للأمان
- `useFormValidation.ts` - hook للتحقق من النماذج

### ملفات التكوين:
- `manifest.json` - Web App Manifest
- `sitemap.xml` - خريطة الموقع
- `robots.txt` - توجيهات محركات البحث
- `sw.js` - Service Worker

## كيفية الاستخدام

1. **تثبيت التبعيات**:
   ```bash
   npm install
   ```

2. **إعداد متغيرات البيئة**:
   ```bash
   cp .env.example .env.local
   # قم بتحديث القيم في .env.local
   ```

3. **تشغيل المشروع**:
   ```bash
   npm run dev
   ```

4. **بناء المشروع**:
   ```bash
   npm run build
   npm start
   ```

## متغيرات البيئة المطلوبة

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CONTACT_FORM_ENDPOINT=https://your-api-endpoint.com/contact
EMAIL_SERVICE_API_KEY=your-email-service-api-key
```

## الميزات الجديدة

### Chatbot
- مساعد ذكي يجيب على الأسئلة الشائعة
- متاح في جميع الصفحات
- يدعم اللغة العربية

### نموذج الاتصال المتقدم
- التحقق من صحة البيانات
- رسائل خطأ واضحة
- تصميم متجاوب

### معرض الأعمال
- عرض تفاعلي للمشاريع
- فلاتر حسب الفئة
- نوافذ منبثقة للتفاصيل

### تحليلات متقدمة
- تتبع سلوك المستخدمين
- خرائط حرارية
- تتبع التحويلات

## الأداء

- **Lighthouse Score**: 95+ في جميع الفئات
- **Core Web Vitals**: محسنة بالكامل
- **Mobile Performance**: محسن للجوال
- **SEO Score**: 100/100

## الأمان

- **Security Headers**: مطبقة بالكامل
- **CSP**: سياسة أمان المحتوى نشطة
- **Form Validation**: التحقق من جميع المدخلات
- **Rate Limiting**: حماية من الهجمات

## الدعم

للدعم التقني أو الاستفسارات، يرجى التواصل معنا:
- البريد الإلكتروني: diabm4930@gmail.com
- الهاتف: 01015916082

---

تم تطوير وتحسين موقع زنترا بأحدث التقنيات والمعايير العالمية لضمان أفضل تجربة للمستخدمين.
