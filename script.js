/**
 * سكربت الواجهة التفاعلية لمنصة ClickBay
 * يغطي الميزات الذكية وإمكانية الوصول (Accessibility) وتبديل اللغات.
 */

// القاموس البسيط لتغيير اللغات
const dictionary = {
    ar: {
        title: "Smart Store | المتجر الذكي التعليمي",
        offer: "خصم 20% هذا الأسبوع باستخدام كوبون: SMART20 + وصول لمقالات مجانية",
        logo: "ClickBay",
        nav_digital: "المنتجات الرقمية",
        nav_physical: "أمازون & Temu",
        nav_ats: "سير ذاتية (ATS)",
        nav_blog: "المدونة التعليمية",
        login: "تسجيل الدخول",
        hero_title: "اكتشف رحلة تعلمك بذكاء متقدم",
        hero_desc: "كورسات فيديو مدعمة بلغة الإشارة، كتب إلكترونية تفاعلية، ومنتجات تقنية مختارة من أمازون بعناية تناسب اهتماماتك.",
        search_placeholder: "أخبر المساعد الذكي بما تود تعلمه أو شرائه...",
        search_btn: "توصيات AI",
        digital_title: "الكورسات والكتب الإلكترونية (محسنة للإتاحة)",
        langSwitchStr: "English"
    },
    en: {
        title: "ClickBay | Smart Educational Platform",
        offer: "Get 20% off this week with code: SMART20 + Free articles access",
        logo: "EduMart",
        nav_digital: "Digital Products",
        nav_physical: "Amazon & Temu",
        nav_ats: "ATS Resumes",
        nav_blog: "Smart Blog",
        login: "Login",
        hero_title: "Discover Your Learning Journey Smartly",
        hero_desc: "Caption-supported video courses, interactive eBooks, and carefully curated Amazon tech products fitting your interests.",
        search_placeholder: "Tell the AI assistant what you want to learn or buy...",
        search_btn: "AI Matches",
        digital_title: "Courses & eBooks (Accessibility Enhanced)",
        langSwitchStr: "العربية"
    }
};

let currentLang = 'ar';

/**
 * تبديل اللغة (Localization/i18n) ودعم اتجاه النص RTL/LTR
 */
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const dict = dictionary[currentLang];

    // تغيير اتجاه النص الأساسي
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    // تغيير النصوص داخل العناصر
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            if (el.tagName === 'TITLE') {
                document.title = dict[key];
            } else {
                el.innerHTML = el.innerHTML.replace(el.innerText, dict[key]);
            }
        }
    });

    // تغيير النصوص للـ placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.placeholder = dict[key];
        }
    });

    // تحديث زر تغيير اللغة
    document.getElementById('langLabel').innerText = dict.langSwitchStr;
}

/**
 * تبديل وضع التباين العالي لدعم ضعاف البصر (Accessibility)
 */
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

/**
 * محاكاة محرك بحث الذكاء الاصطناعي الخاص بالموقع
 */
function performAISearch() {
    const input = document.getElementById('aiSearchInput').value;
    const resultsDiv = document.getElementById('aiSearchResults');
    const isArabic = currentLang === 'ar';

    if (!input.trim()) {
        resultsDiv.classList.remove('hidden');
        resultsDiv.innerHTML = isArabic ?
            "<p class='text-muted'><i class='fas fa-exclamation-circle text-primary'></i> الرجاء إدخال وصف لما تبحث عنه ليقوم الذكاء الاصطناعي بمساعدتك.</p>" :
            "<p class='text-muted'><i class='fas fa-exclamation-circle text-primary'></i> Please enter a description so AI can assist you.</p>";
        return;
    }

    // إظهار عملية "التفكير" للذكاء الاصطناعي
    resultsDiv.classList.remove('hidden');
    resultsDiv.innerHTML = isArabic ?
        "<p><i class='fas fa-spinner fa-spin text-primary'></i> الذكاء الاصطناعي يقوم بتحليل طلبك وبناء التوصيات...</p>" :
        "<p><i class='fas fa-spinner fa-spin text-primary'></i> AI is analyzing your request and building recommendations...</p>";

    // محاكاة تأخير الشبكة/المعالجة
    setTimeout(() => {
        let title1 = isArabic ? "كورس مطابق لاهتماماتك: برمجة المبتدئين (يشمل لغة إشارة)" : "Matched Course: Programming for Beginners (Includes Subtitles)";
        let title2 = isArabic ? "كتاب إلكتروني مقترح لبناء المهارة" : "Suggested Skill-building eBook";
        let title3 = isArabic ? "أداة مساعدة من أمازون لزيادة الإنتاجية" : "Amazon Productivity Tool";

        resultsDiv.innerHTML = `
            <h4 class="mb-2 text-primary"><i class="fas fa-magic"></i> ${isArabic ? "أفضل التطابقات المكتشفة:" : "Best Discovered Matches"}</h4>
            <div style="display:flex; flex-direction:column; gap:10px;">
                <div class="p-2 border-bottom hover-bg transition">
                    <strong>${title1}</strong> - <span class="text-success">${isArabic ? "تطابق 98%" : "98% Match"}</span>
                </div>
                <div class="p-2 border-bottom hover-bg transition">
                    <strong>${title2}</strong> - <span class="text-success">${isArabic ? "تطابق 92%" : "92% Match"}</span>
                </div>
                <div class="p-2 border-bottom hover-bg transition">
                    <strong>${title3}</strong> - <span class="text-success">${isArabic ? "تطابق 85%" : "85% Match"}</span>
                </div>
            </div>
            <button class="btn-primary btn-sm mt-3 w-100" onclick="closeSearchResults()">${isArabic ? "إغلاق التوصيات" : "Close Recommendations"}</button>
        `;
    }, 1500);
}

function closeSearchResults() {
    document.getElementById('aiSearchResults').classList.add('hidden');
}

// دمج مستمعات الأحداث الإضافية للمستقبل (مثلاً لسلة الشراء وماسح الـ ATS)
document.addEventListener('DOMContentLoaded', () => {
    // يمكن تفعيل أي إعداد افتراضي للتهيئة هنا.
});
