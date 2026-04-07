/**
 * ClickBay 2026 - Ultimate Smart Marketplace Script
 */

const dictionary = {
    ar: {
        title: "ClickBay | الأقوى عالمياً",
        offer: "نقلة نوعية في عالم التعلم والتسوق | احصل على 30% خصم الآن!",
        logo: "ClickBay",
        nav_courses: "مسارات التعلم & AI",
        nav_books: "مكتبة المعرفة",
        nav_physical: "أمازون لايف",
        nav_quizzes: "تحدى نفسك",
        login: "ابدأ الآن",
        hero_title: "أقوى منصة ذكية لتطوير مهاراتك 🚀",
        hero_desc: "العب يلا! تعلم الذكاء الاصطناعي، التصميم الجرافيكي، وتسوق أحدث التقنيات مع عروض تتحدث كل ثانيتين.",
        search_placeholder: "ما الذي تريد إتقانه اليوم؟",
        search_btn: "بحث سحري",
        courses_title: "دورات احترافية وتقنيات AI والتصميم",
        courses_desc: "انضم لنخبة المتعلمين في تخصصات المستقبل مع دعم شامل وتفاعلي.",
        course_1_title: "هندسة الذكاء الاصطناعي التوليدي",
        course_2_title: "تصميم واجهات تجربة المستخدم (UI/UX)",
        custom_path_title: "مسار تعليمي مخصص لك",
        start_ai_path: "ابدأ التحليل المجاني",
        amazon_title: "<i class='fab fa-amazon'></i> شاشة عروض أمازون الحية",
        amazon_desc: "تتحدث العروض كل ثانيتين! أوقف المؤشر على المنتج لالتقاط العرض.",
        books_title: "المكتبة الذكية: إصدارات الكتب",
        book_1_title: "عقلية الثروة والتقنية",
        book_2_title: "دليل الذكاء التوليدي",
        book_3_title: "أسرار التصميم الحديث",
        read_now: "اقرأ مجاناً",
        quiz_title: "العب يلا! تحدى مهاراتك 🎮",
        quiz_desc: "أثبت قدراتك في التكنولوجيا والتصميم في اختبار لا يتجاوز دقيقتين واربح نقاط تفاعلية.",
        start_quiz: "ابدأ التحدي الآن",
        chatbot_title: "المساعد الذكي الأول",
        chatbot_placeholder: "اسألني عن أي شيء...",
        footer_copy: "جميع الحقوق محفوظة - ClickBay الأقوى في العالم.",
        enroll_now: "شراء - 49$"
    },
    en: {
        title: "ClickBay | World's Strongest",
        offer: "A quantum leap in learning & shopping | Get 30% off now!",
        logo: "ClickBay",
        nav_courses: "Learning Paths & AI",
        nav_books: "Knowledge Library",
        nav_physical: "Amazon Live",
        nav_quizzes: "Challenge Yourself",
        login: "Get Started",
        hero_title: "The Most Powerful Smart Platform 🚀",
        hero_desc: "Let's Play! Learn AI, UI/UX Design, and shop the latest tech with deals updating every 2 seconds.",
        search_placeholder: "What do you want to master today?",
        search_btn: "Magic Search",
        courses_title: "Pro Courses, AI Tech & Design",
        courses_desc: "Join top learners in future disciplines with full interactive support.",
        course_1_title: "Generative AI Engineering",
        course_2_title: "UI/UX Experience Design",
        custom_path_title: "Personalized Learning Path",
        start_ai_path: "Start Free Analysis",
        amazon_title: "<i class='fab fa-amazon'></i> Amazon Live Deals",
        amazon_desc: "Deals update every 2 seconds! Hover over a product to catch it.",
        books_title: "Smart Library: Book Editions",
        book_1_title: "Wealth & Tech Mindset",
        book_2_title: "Generative AI Guide",
        book_3_title: "Modern Design Secrets",
        read_now: "Read for Free",
        quiz_title: "Let's Play! Challenge Your Skills 🎮",
        quiz_desc: "Prove your abilities in tech and design in a 2-minute test and win interactive points.",
        start_quiz: "Start Challenge Now",
        chatbot_title: "Ultimate AI Assistant",
        chatbot_placeholder: "Ask me anything...",
        footer_copy: "All rights reserved - ClickBay, The World's Strongest.",
        enroll_now: "Buy - $49"
    }
};

let currentLang = 'ar';

// --- Localization ---
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const dict = dictionary[currentLang];

    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            if (el.tagName === 'TITLE') {
                document.title = dict[key];
            } else {
                el.innerHTML = dict[key];
            }
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) el.placeholder = dict[key];
    });

    document.getElementById('langLabel').innerText = currentLang === 'ar' ? 'English' : 'العربية';
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// --- AI Chatbot ---
const chatbotModal = document.getElementById('aiChatbotModal');
const chatbotBody = document.getElementById('chatbotBody');
const chatbotInput = document.getElementById('chatbotInput');

function openChatbot() {
    chatbotModal.classList.remove('hidden');
}

function closeChatbot() {
    chatbotModal.classList.add('hidden');
}

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender === 'ai' ? 'msg-ai' : 'msg-user'}`;
    msgDiv.innerHTML = text;
    chatbotBody.appendChild(msgDiv);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function sendChatMessage() {
    const text = chatbotInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    chatbotInput.value = '';
    
    // Simulate AI thinking
    const loadingId = 'loading-' + Date.now();
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message msg-ai';
    loadingDiv.id = loadingId;
    loadingDiv.innerHTML = '<i class="fas fa-ellipsis-h fa-spin"></i>';
    chatbotBody.appendChild(loadingDiv);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;

    setTimeout(() => {
        document.getElementById(loadingId).remove();
        const reply = currentLang === 'ar' 
            ? "أنا المساعد الذكي، يمكنني الرد آلياً فوراً ومساعدتك في اختيار كورسات الذكاء الاصطناعي والتصميم! العب يلا!" 
            : "I am the smart AI assistant, I can reply automatically and help you choose AI and Design courses! Let's play!";
        addMessage(reply, 'ai');
    }, 1000);
}

// --- Amazon Live Deals (Updates every 2 seconds) ---
const amazonProducts = [
    {
        name_ar: "سماعات سوني WH-1000XM5 مانعة للضوضاء",
        name_en: "Sony WH-1000XM5 Noise Canceling",
        price: "$298.00",
        img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80",
        link: "https://amazon.com"
    },
    {
        name_ar: "لابتوب ماك بوك برو M3 - للتصميم و AI",
        name_en: "MacBook Pro M3 - Design & AI",
        price: "$1999.00",
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
        link: "https://amazon.com"
    },
    {
        name_ar: "أداة الإضاءة الذكية للمكتب",
        name_en: "Smart Desk Lighting Kit",
        price: "$45.99",
        img: "https://images.unsplash.com/photo-1580979603095-23c5cfad1ca3?w=600&q=80",
        link: "https://amazon.com"
    },
    {
        name_ar: "شاشة 34 بوصة منحنية فائقة العرض للمصممين",
        name_en: "34' Curved Ultrawide Monitor for Designers",
        price: "$450.00",
        img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80",
        link: "https://amazon.com"
    }
];

let currentAmazonIndex = 0;
let amazonInterval;
const amazonContainer = document.getElementById('amazonProductDisplay');

function renderAmazonProduct() {
    const prod = amazonProducts[currentAmazonIndex];
    const name = currentLang === 'ar' ? prod.name_ar : prod.name_en;
    const buyBtnText = currentLang === 'ar' ? "اشتري من أمازون <i class='fas fa-shopping-cart'></i>" : "Buy on Amazon <i class='fas fa-shopping-cart'></i>";
    
    // Add a slight fade effect by resetting content
    amazonContainer.style.opacity = 0.5;
    
    setTimeout(() => {
        amazonContainer.innerHTML = `
            <img class="amazon-product-img" src="${prod.img}" alt="${name}" style="width:40%;">
            <div class="product-info-large p-4" style="width:60%;">
                <h3 class="premium-gradient-text" style="font-size:1.8rem; margin-bottom:15px;">${name}</h3>
                <p class="text-gray mb-3">${currentLang === 'ar' ? 'الأكثر مبيعاً وتقييماً عالياً، مثالي للمطورين والمصممين.' : 'Top rated best seller, perfect for developers and designers.'}</p>
                <div class="text-glow font-bold text-amazon" style="font-size:2rem; margin-bottom:20px;">${prod.price}</div>
                <div class="d-flex align-center gap-2 mb-2 text-success" style="font-size:0.9rem;">
                    <i class="fas fa-check-circle"></i> ${currentLang === 'ar' ? 'متوفر في المخزون' : 'In Stock'}
                </div>
                <a href="${prod.link}" target="_blank" class="amazon-buy-btn">${buyBtnText}</a>
            </div>
        `;
        amazonContainer.style.opacity = 1;
    }, 200);

    currentAmazonIndex = (currentAmazonIndex + 1) % amazonProducts.length;
}

function startAmazonCarousel() {
    // Initial render
    renderAmazonProduct();
    // Start interval every 2 seconds
    amazonInterval = setInterval(renderAmazonProduct, 2000);
    
    // Pause on hover
    amazonContainer.addEventListener('mouseenter', () => clearInterval(amazonInterval));
    amazonContainer.addEventListener('mouseleave', () => {
        amazonInterval = setInterval(renderAmazonProduct, 2000);
    });
}

// --- Payment & Integration ---
function openPayment(item, amount) {
    document.getElementById('paymentItemName').innerText = item;
    document.getElementById('paymentAmount').innerText = `$${amount}`;
    document.getElementById('paymentModal').classList.add('active');
}

function closePayment() {
    document.getElementById('paymentModal').classList.remove('active');
}

function processPayment() {
    const btn = document.querySelector('.btn-pay');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري المعالجة...';
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> تم الدفع بنجاح! الموقع مُفعل.';
        btn.classList.add('bg-success');
        
        setTimeout(() => {
            closePayment();
            btn.innerHTML = 'تأكيد الدفع ونشر الموقع <i class="fas fa-rocket"></i>';
            btn.classList.remove('bg-success');
            // Confetti or alert
            alert(currentLang === 'ar' ? "تمت العملية بنجاح! حسابك البنكي متصل وتم تفعيل الكورس/المنتج." : "Payment successful! Your account is linked and product is activated.");
        }, 1500);
    }, 2000);
}

// Bind enroll buttons to payment
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-i18n="enroll_now"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const courseTitle = e.target.closest('.product-info').querySelector('h3').innerText;
            openPayment("كورس: " + courseTitle, "49.00");
        });
    });
    
    // Auto initiate chatbot with bilingual welcome message
    setTimeout(() => {
        openChatbot();
        addMessage("مرحباً! أنا المساعد الذكي. 🤖<br><br>Hello! I am the Smart Assistant.<br>كيف يمكنني مساعدتك في رحلة النجاح اليوم؟<br>How can I help you in your success journey today?", 'ai');
    }, 1500);

    // Start live Amazon deals
    startAmazonCarousel();
});

// --- Quiz Gamification ---
const quizData = {
    question: "أي من التالي يُستخدم لإنشاء صور باستخدام الذكاء الاصطناعي؟ / Which is used to generate images with AI?",
    options: ["ChatGPT", "Midjourney", "Excel", "Adobe Reader"],
    correct: 1
};

function startQuiz() {
    const btn = document.querySelector('.gamification-banner button');
    btn.style.display = 'none';
    const area = document.getElementById('quizArea');
    area.classList.remove('hidden');
    
    document.getElementById('quizQuestion').innerText = quizData.question;
    const optsDiv = document.getElementById('quizOptions');
    optsDiv.innerHTML = '';
    
    quizData.options.forEach((opt, index) => {
        const b = document.createElement('button');
        b.className = 'btn-outline-primary w-100 text-left px-3 py-2 border-radius-md mb-2';
        b.style.borderRadius = '8px';
        b.innerText = opt;
        b.onclick = () => submitQuiz(index);
        optsDiv.appendChild(b);
    });
}

function submitQuiz(selectedIndex) {
    const res = document.getElementById('quizResult');
    res.classList.remove('hidden');
    if (selectedIndex === quizData.correct) {
        res.innerHTML = '<span class="text-success"><i class="fas fa-trophy"></i> إجابة صحيحة! كسبت 500 نقطة. العب يلا!</span>';
    } else {
        res.innerHTML = '<span class="text-amazon"><i class="fas fa-times"></i> خطأ! الإجابة هي Midjourney. حاول مرة أخرى.</span>';
    }
}
