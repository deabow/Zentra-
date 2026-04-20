# 🚀 دليل رفع موقع زنترا

## الطريقة الأولى: Vercel (موصى بها) ⭐

### الخطوات:

1. **إنشاء حساب GitHub**
   - اذهب إلى: https://github.com/signup
   - سجل حساب مجاني

2. **رفع المشروع على GitHub**
   ```bash
   cd C:\Users\diabm\Desktop\Zentra\zentra
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/zentra.git
   git push -u origin main
   ```

3. **الرفع على Vercel**
   - اذهب إلى: https://vercel.com/signup
   - سجل دخول بحساب GitHub
   - اضغط "Add New Project"
   - اختر مشروع zentra
   - اضغط "Deploy"
   - ✅ جاهز! الموقع سيكون live في دقائق

### الرابط سيكون:
`https://zentra-yourname.vercel.app`

---

## الطريقة الثانية: Netlify

1. اذهب إلى: https://www.netlify.com
2. سجل بحساب GitHub
3. "Add new site" → "Import from Git"
4. اختر المشروع
5. إعدادات البناء:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy!

---

## معلومات الاتصال في الموقع:

- **البريد**: diabm4930@gmail.com
- **الهاتف**: 01015916082
- **العنوان**: مدينة السادات، منوفية - مول سايلو الدور الثالث

---

## ملاحظات:

- الرفع **مجاني 100%**
- SSL مجاني (HTTPS)
- يدعم النطاقات المخصصة
- تحديثات تلقائية عند تغيير الكود

---

Made with ❤️ by Zentra
