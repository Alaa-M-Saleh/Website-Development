const CURRENT_LANG = document.documentElement.lang === 'ar' ? 'ar' : 'en';

const siteContent = {
  en: {
    ui: {
      learnMore: 'Learn more', readMore: 'Read more', serviceDetail: 'Service detail',
      serviceNotFound: 'The requested service could not be found.',
      articleNotFound: 'The requested article could not be found.',
      thanks: 'Thanks! We will be in touch soon.', sendRequest: 'Send request'
    },
    services: [
      { id: 1, name: 'Strategy & Planning', shortDescription: 'We design a clear structure for your message, audience, and conversion goals.', longDescription: 'We begin by mapping your audience, the core message, and the user journey so each page has a focused purpose.', features: ['Audience mapping', 'Content structure', 'Page flow planning'] },
      { id: 2, name: 'Visual Design', shortDescription: 'We shape polished layouts and visual direction that feel modern and trustworthy.', longDescription: 'From color choices to typography and spacing, each visual decision supports readability and stronger engagement.', features: ['Wireframes', 'Brand alignment', 'Responsive layouts'] },
      { id: 3, name: 'Development & Launch', shortDescription: 'We turn the approved concept into a responsive website that works well on every screen.', longDescription: 'The final build includes semantic HTML, lightweight styles, and a thoughtful handoff experience for a smooth launch.', features: ['Fast pages', 'Accessible markup', 'SEO-friendly structure'] }
    ],
    portfolio: [
      { id: 1, title: 'Northshore Retreat', category: 'Brand website', description: 'A calming experience for a hospitality brand with strong visual storytelling.', image: 'https://picsum.photos/seed/northshore/600/400' },
      { id: 2, title: 'Studio Atlas', category: 'Creative showcase', description: 'A minimal portfolio that highlights photography, motion, and editorial work.', image: 'https://picsum.photos/seed/atlas/600/400' },
      { id: 3, title: 'Harbor Commerce', category: 'E-commerce concept', description: 'A polished online storefront designed for quick browsing and conversion.', image: 'https://picsum.photos/seed/harbor/600/400' }
    ],
    posts: [
      { id: 1, title: 'The four habits of effective web pages', excerpt: 'Simple pages often work better when the core message is easy to scan and the call to action is clear.', category: 'Design', date: 'June 14, 2026', image: 'https://picsum.photos/seed/post1/600/400', content: 'Good pages are easy to understand, quick to navigate, and built around a single goal. That clarity helps visitors focus and increases confidence.' },
      { id: 2, title: 'Why mobile-first design still matters', excerpt: 'A responsive foundation makes the experience feel calm and consistent from the first tap onward.', category: 'Strategy', date: 'May 31, 2026', image: 'https://picsum.photos/seed/post2/600/400', content: 'Designing for smaller screens first often leads to better decisions about hierarchy, spacing, and content priorities.' },
      { id: 3, title: 'How to write stronger calls to action', excerpt: 'Actionable language improves engagement because it tells visitors exactly what to do next.', category: 'Marketing', date: 'May 10, 2026', image: 'https://picsum.photos/seed/post3/600/400', content: 'A strong call to action should feel specific, outcome-focused, and easy to see without requiring extra effort from the visitor.' }
    ]
  },
  ar: {
    ui: {
      learnMore: 'اعرف المزيد', readMore: 'اقرأ المزيد', serviceDetail: 'تفاصيل الخدمة',
      serviceNotFound: 'تعذر العثور على الخدمة المطلوبة.',
      articleNotFound: 'تعذر العثور على المقال المطلوب.',
      thanks: 'شكرًا لك! سنتواصل معك قريبًا.', sendRequest: 'إرسال الطلب'
    },
    services: [
      { id: 1, name: 'الاستراتيجية والتخطيط', shortDescription: 'نصمم هيكلاً واضحاً لرسالتك وجمهورك وأهداف التحويل.', longDescription: 'نبدأ برسم ملامح جمهورك، والرسالة الأساسية، ورحلة المستخدم، بحيث تحمل كل صفحة هدفاً واضحاً.', features: ['تحديد الجمهور', 'هيكلة المحتوى', 'تخطيط تدفق الصفحات'] },
      { id: 2, name: 'التصميم المرئي', shortDescription: 'نصمم تخطيطات أنيقة وهوية بصرية تبدو عصرية وموثوقة.', longDescription: 'من اختيار الألوان إلى الخطوط والمسافات، كل قرار بصري يدعم سهولة القراءة وزيادة التفاعل.', features: ['مخططات أولية', 'الانسجام مع الهوية', 'تخطيطات متجاوبة'] },
      { id: 3, name: 'التطوير والإطلاق', shortDescription: 'نحوّل الفكرة المعتمدة إلى موقع متجاوب يعمل بكفاءة على كل الشاشات.', longDescription: 'يشمل البناء النهائي كود HTML دلالي، وتنسيقات خفيفة، وتجربة تسليم مدروسة لإطلاق سلس.', features: ['صفحات سريعة', 'ترميز يدعم إمكانية الوصول', 'هيكلة صديقة لمحركات البحث'] }
    ],
    portfolio: [
      { id: 1, title: 'نورثشور ريتريت', category: 'موقع علامة تجارية', description: 'تجربة هادئة لعلامة ضيافة مع سرد بصري قوي.', image: 'https://picsum.photos/seed/northshore/600/400' },
      { id: 2, title: 'ستوديو أطلس', category: 'معرض أعمال إبداعي', description: 'معرض أعمال بسيط يبرز التصوير والحركة والأعمال التحريرية.', image: 'https://picsum.photos/seed/atlas/600/400' },
      { id: 3, title: 'هاربر كوميرس', category: 'مفهوم تجارة إلكترونية', description: 'واجهة متجر إلكتروني أنيقة مصممة للتصفح السريع والتحويل.', image: 'https://picsum.photos/seed/harbor/600/400' }
    ],
    posts: [
      { id: 1, title: 'العادات الأربع للصفحات الفعّالة', excerpt: 'غالباً ما تعمل الصفحات البسيطة بشكل أفضل عندما تكون الرسالة الأساسية سهلة التصفح والدعوة لاتخاذ إجراء واضحة.', category: 'تصميم', date: '14 يونيو 2026', image: 'https://picsum.photos/seed/post1/600/400', content: 'الصفحات الجيدة سهلة الفهم، وسريعة التصفح، ومبنية حول هدف واحد. هذا الوضوح يساعد الزوار على التركيز ويزيد من الثقة.' },
      { id: 2, title: 'لماذا لا يزال التصميم للجوال أولاً مهماً', excerpt: 'الأساس المتجاوب يجعل التجربة تبدو هادئة ومتسقة من أول لمسة.', category: 'استراتيجية', date: '31 مايو 2026', image: 'https://picsum.photos/seed/post2/600/400', content: 'التصميم للشاشات الصغيرة أولاً غالباً ما يؤدي إلى قرارات أفضل بخصوص التسلسل الهرمي، والمسافات، وأولويات المحتوى.' },
      { id: 3, title: 'كيف تكتب دعوات لاتخاذ إجراء أكثر تأثيراً', excerpt: 'اللغة القابلة للتنفيذ تحسّن التفاعل لأنها تخبر الزوار بالضبط بما يجب فعله بعد ذلك.', category: 'تسويق', date: '10 مايو 2026', image: 'https://picsum.photos/seed/post3/600/400', content: 'الدعوة القوية لاتخاذ إجراء يجب أن تكون محددة، وتركز على النتيجة، وسهلة الرؤية دون جهد إضافي من الزائر.' }
    ]
  }
};

const siteData = siteContent[CURRENT_LANG];
const uiText = siteContent[CURRENT_LANG].ui;

const CARD_CLASS = 'bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col';

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function populateServices(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = siteData.services.map((service) => `
    <div class="${CARD_CLASS}">
      <div class="p-6 flex flex-col gap-3 flex-1">
        <h3 class="text-lg font-medium text-slate-900">${service.name}</h3>
        <p class="text-slate-500 text-sm flex-1">${service.shortDescription}</p>
        <a href="service-details.html?id=${service.id}" class="inline-flex items-center gap-1 text-indigo-600 text-sm font-medium hover:text-indigo-800">${uiText.learnMore}</a>
      </div>
    </div>
  `).join('');
}

function populatePortfolio(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = siteData.portfolio.map((item) => `
    <div class="${CARD_CLASS}">
      <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover">
      <div class="p-6 flex flex-col gap-2">
        <span class="inline-block w-fit text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-600">${item.category}</span>
        <h3 class="text-lg font-medium text-slate-900">${item.title}</h3>
        <p class="text-slate-500 text-sm">${item.description}</p>
      </div>
    </div>
  `).join('');
}

function populatePosts(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = siteData.posts.map((post) => `
    <div class="${CARD_CLASS}">
      <img src="${post.image}" alt="${post.title}" class="w-full h-44 object-cover">
      <div class="p-6 flex flex-col gap-2 flex-1">
        <p class="text-xs text-slate-400">${post.category} &bull; ${post.date}</p>
        <h3 class="text-lg font-medium text-slate-900">${post.title}</h3>
        <p class="text-slate-500 text-sm flex-1">${post.excerpt}</p>
        <a href="blog-details.html?id=${post.id}" class="inline-flex items-center gap-1 text-indigo-600 text-sm font-medium hover:text-indigo-800">${uiText.readMore}</a>
      </div>
    </div>
  `).join('');
}

function loadServiceDetails(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const id = Number(getQueryParam('id'));
  const service = siteData.services.find((item) => item.id === id) || siteData.services[0];
  if (!service) {
    container.innerHTML = `<p class="text-slate-500">${uiText.serviceNotFound}</p>`;
    return;
  }
  container.innerHTML = `
    <p class="uppercase text-indigo-600 text-xs font-semibold tracking-wide mb-2">${uiText.serviceDetail}</p>
    <h1 class="text-3xl font-bold text-slate-900 mb-3">${service.name}</h1>
    <p class="text-slate-500 mb-6">${service.longDescription}</p>
    <ul class="space-y-2">
      ${service.features.map((f) => `<li class="flex items-center gap-2 text-slate-700"><svg class="w-5 h-5 text-indigo-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>${f}</li>`).join('')}
    </ul>
  `;
}

function loadPostDetails(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const id = Number(getQueryParam('id'));
  const post = siteData.posts.find((item) => item.id === id) || siteData.posts[0];
  if (!post) {
    container.innerHTML = `<p class="text-slate-500">${uiText.articleNotFound}</p>`;
    return;
  }
  container.innerHTML = `
    <p class="text-xs text-slate-400 mb-2">${post.category} &bull; ${post.date}</p>
    <h1 class="text-3xl font-bold text-slate-900 mb-4">${post.title}</h1>
    <img src="${post.image}" alt="${post.title}" class="w-full h-72 object-cover rounded-xl shadow-sm mb-6">
    <p class="text-slate-600 leading-relaxed">${post.content}</p>
  `;
}

function populateServiceSidebar(containerId, activeId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const currentId = activeId === -1 ? -1 : (activeId || Number(getQueryParam('id')));
  container.innerHTML = siteData.services.map((service) => `
    <a href="service-details.html?id=${service.id}" class="block px-4 py-3 rounded-lg text-sm ${service.id === currentId ? 'bg-indigo-600 text-white font-medium' : 'text-slate-600 hover:bg-slate-50'}">${service.name}</a>
  `).join('');
}

function populatePostSidebar(containerId, activeId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const currentId = activeId === -1 ? -1 : (activeId || Number(getQueryParam('id')));
  container.innerHTML = siteData.posts.map((post) => `
    <a href="blog-details.html?id=${post.id}" class="block px-4 py-3 rounded-lg text-sm ${post.id === currentId ? 'bg-indigo-600 text-white font-medium' : 'text-slate-600 hover:bg-slate-50'}">${post.title}</a>
  `).join('');
}

/* ---------- Vanilla-JS UI behaviors (Tailwind ships no components) ---------- */

function initNavToggle() {
  const btn = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => menu.classList.toggle('hidden'));
}

function initModal() {
  const openBtn = document.getElementById('openModalBtn');
  const modal = document.getElementById('quoteModal');
  const closeBtn = document.getElementById('closeModalBtn');
  if (!modal) return;
  const open = () => { modal.classList.remove('hidden'); modal.classList.add('flex'); };
  const close = () => { modal.classList.add('hidden'); modal.classList.remove('flex'); };
  if (openBtn) openBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });

  const form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      const original = uiText.sendRequest;
      if (button) button.textContent = uiText.thanks;
      setTimeout(() => {
        form.reset();
        if (button) button.textContent = original;
        close();
      }, 1200);
    });
  }
}

function initCarousel() {
  const root = document.getElementById('heroCarousel');
  if (!root) return;
  const slides = root.querySelectorAll('[data-slide]');
  const prev = document.getElementById('carouselPrev');
  const next = document.getElementById('carouselNext');
  let index = 0;
  function show(i) {
    slides.forEach((s, n) => s.classList.toggle('hidden', n !== i));
  }
  if (prev) prev.addEventListener('click', () => { index = (index - 1 + slides.length) % slides.length; show(index); });
  if (next) next.addEventListener('click', () => { index = (index + 1) % slides.length; show(index); });
  show(0);
  setInterval(() => { index = (index + 1) % slides.length; show(index); }, 5000);
}

function initAccordion() {
  document.querySelectorAll('[data-accordion-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const panel = document.getElementById(trigger.getAttribute('data-accordion-trigger'));
      const icon = trigger.querySelector('[data-accordion-icon]');
      if (!panel) return;
      const isOpen = !panel.classList.contains('hidden');
      panel.classList.toggle('hidden', isOpen);
      if (icon) icon.classList.toggle('rotate-45', !isOpen);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initModal();
  initCarousel();
  initAccordion();
});
