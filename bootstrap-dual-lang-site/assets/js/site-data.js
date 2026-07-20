const CURRENT_LANG = document.documentElement.lang === 'ar' ? 'ar' : 'en';

const siteContent = {
  en: {
    ui: {
      learnMore: 'Learn more',
      readMore: 'Read more',
      serviceDetail: 'Service detail',
      serviceNotFound: 'The requested service could not be found.',
      articleNotFound: 'The requested article could not be found.',
      thanks: 'Thanks! We will be in touch soon.',
      sendRequest: 'Send request',
      moreArticles: 'More articles',
      relatedServices: 'Our services'
    },
    services: [
      {
        id: 1,
        name: 'Strategy & Planning',
        shortDescription: 'We design a clear structure for your message, audience, and conversion goals.',
        longDescription: 'We begin by mapping your audience, the core message, and the user journey so each page has a focused purpose.',
        features: ['Audience mapping', 'Content structure', 'Page flow planning'],
        icon: 'bi-compass'
      },
      {
        id: 2,
        name: 'Visual Design',
        shortDescription: 'We shape polished layouts and visual direction that feel modern and trustworthy.',
        longDescription: 'From color choices to typography and spacing, each visual decision supports readability and stronger engagement.',
        features: ['Wireframes', 'Brand alignment', 'Responsive layouts'],
        icon: 'bi-palette'
      },
      {
        id: 3,
        name: 'Development & Launch',
        shortDescription: 'We turn the approved concept into a responsive website that works well on every screen.',
        longDescription: 'The final build includes semantic HTML, lightweight styles, and a thoughtful handoff experience for a smooth launch.',
        features: ['Fast pages', 'Accessible markup', 'SEO-friendly structure'],
        icon: 'bi-rocket-takeoff'
      }
    ],
    portfolio: [
      {
        id: 1,
        title: 'Northshore Retreat',
        category: 'Brand website',
        description: 'A calming experience for a hospitality brand with strong visual storytelling.',
        image: 'https://picsum.photos/seed/northshore/600/400'
      },
      {
        id: 2,
        title: 'Studio Atlas',
        category: 'Creative showcase',
        description: 'A minimal portfolio that highlights photography, motion, and editorial work.',
        image: 'https://picsum.photos/seed/atlas/600/400'
      },
      {
        id: 3,
        title: 'Harbor Commerce',
        category: 'E-commerce concept',
        description: 'A polished online storefront designed for quick browsing and conversion.',
        image: 'https://picsum.photos/seed/harbor/600/400'
      }
    ],
    posts: [
      {
        id: 1,
        title: 'The four habits of effective web pages',
        excerpt: 'Simple pages often work better when the core message is easy to scan and the call to action is clear.',
        category: 'Design',
        date: 'June 14, 2026',
        image: 'https://picsum.photos/seed/post1/600/400',
        content: 'Good pages are easy to understand, quick to navigate, and built around a single goal. That clarity helps visitors focus and increases confidence.'
      },
      {
        id: 2,
        title: 'Why mobile-first design still matters',
        excerpt: 'A responsive foundation makes the experience feel calm and consistent from the first tap onward.',
        category: 'Strategy',
        date: 'May 31, 2026',
        image: 'https://picsum.photos/seed/post2/600/400',
        content: 'Designing for smaller screens first often leads to better decisions about hierarchy, spacing, and content priorities.'
      },
      {
        id: 3,
        title: 'How to write stronger calls to action',
        excerpt: 'Actionable language improves engagement because it tells visitors exactly what to do next.',
        category: 'Marketing',
        date: 'May 10, 2026',
        image: 'https://picsum.photos/seed/post3/600/400',
        content: 'A strong call to action should feel specific, outcome-focused, and easy to see without requiring extra effort from the visitor.'
      }
    ]
  },
  ar: {
    ui: {
      learnMore: 'اعرف المزيد',
      readMore: 'اقرأ المزيد',
      serviceDetail: 'تفاصيل الخدمة',
      serviceNotFound: 'تعذر العثور على الخدمة المطلوبة.',
      articleNotFound: 'تعذر العثور على المقال المطلوب.',
      thanks: 'شكرًا لك! سنتواصل معك قريبًا.',
      sendRequest: 'إرسال الطلب',
      moreArticles: 'المزيد من المقالات',
      relatedServices: 'خدماتنا'
    },
    services: [
      {
        id: 1,
        name: 'الاستراتيجية والتخطيط',
        shortDescription: 'نصمم هيكلاً واضحاً لرسالتك وجمهورك وأهداف التحويل.',
        longDescription: 'نبدأ برسم ملامح جمهورك، والرسالة الأساسية، ورحلة المستخدم، بحيث تحمل كل صفحة هدفاً واضحاً.',
        features: ['تحديد الجمهور', 'هيكلة المحتوى', 'تخطيط تدفق الصفحات'],
        icon: 'bi-compass'
      },
      {
        id: 2,
        name: 'التصميم المرئي',
        shortDescription: 'نصمم تخطيطات أنيقة وهوية بصرية تبدو عصرية وموثوقة.',
        longDescription: 'من اختيار الألوان إلى الخطوط والمسافات، كل قرار بصري يدعم سهولة القراءة وزيادة التفاعل.',
        features: ['مخططات أولية', 'الانسجام مع الهوية', 'تخطيطات متجاوبة'],
        icon: 'bi-palette'
      },
      {
        id: 3,
        name: 'التطوير والإطلاق',
        shortDescription: 'نحوّل الفكرة المعتمدة إلى موقع متجاوب يعمل بكفاءة على كل الشاشات.',
        longDescription: 'يشمل البناء النهائي كود HTML دلالي، وتنسيقات خفيفة، وتجربة تسليم مدروسة لإطلاق سلس.',
        features: ['صفحات سريعة', 'ترميز يدعم إمكانية الوصول', 'هيكلة صديقة لمحركات البحث'],
        icon: 'bi-rocket-takeoff'
      }
    ],
    portfolio: [
      {
        id: 1,
        title: 'نورثشور ريتريت',
        category: 'موقع علامة تجارية',
        description: 'تجربة هادئة لعلامة ضيافة مع سرد بصري قوي.',
        image: 'https://picsum.photos/seed/northshore/600/400'
      },
      {
        id: 2,
        title: 'ستوديو أطلس',
        category: 'معرض أعمال إبداعي',
        description: 'معرض أعمال بسيط يبرز التصوير والحركة والأعمال التحريرية.',
        image: 'https://picsum.photos/seed/atlas/600/400'
      },
      {
        id: 3,
        title: 'هاربر كوميرس',
        category: 'مفهوم تجارة إلكترونية',
        description: 'واجهة متجر إلكتروني أنيقة مصممة للتصفح السريع والتحويل.',
        image: 'https://picsum.photos/seed/harbor/600/400'
      }
    ],
    posts: [
      {
        id: 1,
        title: 'العادات الأربع للصفحات الفعّالة',
        excerpt: 'غالباً ما تعمل الصفحات البسيطة بشكل أفضل عندما تكون الرسالة الأساسية سهلة التصفح والدعوة لاتخاذ إجراء واضحة.',
        category: 'تصميم',
        date: '14 يونيو 2026',
        image: 'https://picsum.photos/seed/post1/600/400',
        content: 'الصفحات الجيدة سهلة الفهم، وسريعة التصفح، ومبنية حول هدف واحد. هذا الوضوح يساعد الزوار على التركيز ويزيد من الثقة.'
      },
      {
        id: 2,
        title: 'لماذا لا يزال التصميم للجوال أولاً مهماً',
        excerpt: 'الأساس المتجاوب يجعل التجربة تبدو هادئة ومتسقة من أول لمسة.',
        category: 'استراتيجية',
        date: '31 مايو 2026',
        image: 'https://picsum.photos/seed/post2/600/400',
        content: 'التصميم للشاشات الصغيرة أولاً غالباً ما يؤدي إلى قرارات أفضل بخصوص التسلسل الهرمي، والمسافات، وأولويات المحتوى.'
      },
      {
        id: 3,
        title: 'كيف تكتب دعوات لاتخاذ إجراء أكثر تأثيراً',
        excerpt: 'اللغة القابلة للتنفيذ تحسّن التفاعل لأنها تخبر الزوار بالضبط بما يجب فعله بعد ذلك.',
        category: 'تسويق',
        date: '10 مايو 2026',
        image: 'https://picsum.photos/seed/post3/600/400',
        content: 'الدعوة القوية لاتخاذ إجراء يجب أن تكون محددة، وتركز على النتيجة، وسهلة الرؤية دون جهد إضافي من الزائر.'
      }
    ]
  }
};

const siteData = siteContent[CURRENT_LANG];
const uiText = siteContent[CURRENT_LANG].ui;

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function populateServices(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = siteData.services.map((service) => `
    <div class="col-md-4">
      <div class="card h-100 shadow-sm border-0">
        <div class="card-body">
          <div class="fs-2 text-primary mb-3"><i class="bi ${service.icon}"></i></div>
          <h3 class="h5 card-title">${service.name}</h3>
          <p class="card-text text-muted">${service.shortDescription}</p>
          <a class="btn btn-outline-primary btn-sm" href="service-details.html?id=${service.id}">${uiText.learnMore}</a>
        </div>
      </div>
    </div>
  `).join('');
}

function populatePortfolio(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = siteData.portfolio.map((item) => `
    <div class="col-md-4">
      <div class="card h-100 shadow-sm border-0">
        <img src="${item.image}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <span class="badge text-bg-secondary mb-2">${item.category}</span>
          <h3 class="h5 card-title">${item.title}</h3>
          <p class="card-text text-muted">${item.description}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function populatePosts(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = siteData.posts.map((post) => `
    <div class="col-md-6">
      <div class="card h-100 shadow-sm border-0">
        <img src="${post.image}" class="card-img-top" alt="${post.title}">
        <div class="card-body">
          <p class="text-muted small mb-1">${post.category} &bull; ${post.date}</p>
          <h3 class="h5 card-title">${post.title}</h3>
          <p class="card-text text-muted">${post.excerpt}</p>
          <a class="btn btn-outline-primary btn-sm" href="blog-details.html?id=${post.id}">${uiText.readMore}</a>
        </div>
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
    container.innerHTML = `<p class="text-muted">${uiText.serviceNotFound}</p>`;
    return;
  }
  container.innerHTML = `
    <p class="text-uppercase text-primary fw-semibold small mb-2">${uiText.serviceDetail}</p>
    <h1 class="h2 mb-3">${service.name}</h1>
    <p class="text-muted">${service.longDescription}</p>
    <ul class="list-group list-group-flush mb-4">
      ${service.features.map((feature) => `<li class="list-group-item ps-0"><i class="bi bi-check2-circle text-primary me-2"></i>${feature}</li>`).join('')}
    </ul>
  `;
}

function loadPostDetails(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const id = Number(getQueryParam('id'));
  const post = siteData.posts.find((item) => item.id === id) || siteData.posts[0];
  if (!post) {
    container.innerHTML = `<p class="text-muted">${uiText.articleNotFound}</p>`;
    return;
  }
  container.innerHTML = `
    <p class="text-muted small mb-2">${post.category} &bull; ${post.date}</p>
    <h1 class="h2 mb-3">${post.title}</h1>
    <img src="${post.image}" class="img-fluid rounded-3 shadow-sm mb-4" alt="${post.title}">
    <p class="text-muted">${post.content}</p>
  `;
}

function populateServiceSidebar(containerId, activeId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const currentId = activeId || Number(getQueryParam('id'));
  container.innerHTML = siteData.services.map((service) => `
    <a href="service-details.html?id=${service.id}" class="list-group-item list-group-item-action${service.id === currentId ? ' active' : ''}">${service.name}</a>
  `).join('');
}

function populatePostSidebar(containerId, activeId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const currentId = activeId || Number(getQueryParam('id'));
  container.innerHTML = siteData.posts.map((post) => `
    <a href="blog-details.html?id=${post.id}" class="list-group-item list-group-item-action${post.id === currentId ? ' active' : ''}">${post.title}</a>
  `).join('');
}

function initQuoteForm() {
  const quoteForm = document.getElementById('quoteForm');
  if (!quoteForm) return;
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = quoteForm.querySelector('button[type="submit"]');
    const originalLabel = uiText.sendRequest;
    if (button) button.textContent = uiText.thanks;
    setTimeout(() => {
      quoteForm.reset();
      if (button) button.textContent = originalLabel;
      const modalEl = document.getElementById('quoteModal');
      if (modalEl && window.bootstrap) {
        const instance = window.bootstrap.Modal.getInstance(modalEl);
        if (instance) instance.hide();
      }
    }, 1200);
  });
}

document.addEventListener('DOMContentLoaded', initQuoteForm);
