const CURRENT_LANG = document.documentElement.lang === 'ar' ? 'ar' : 'en';

const siteContent = {
  en: {
    ui: {
      learnMore: 'Learn more',
      readMore: 'Read more',
      serviceDetail: 'Service detail',
      serviceNotFound: 'The requested service could not be found.',
      articleNotFound: 'The requested article could not be found.',
      thanks: 'Thanks!',
      sendRequest: 'Send request'
    },
    services: [
      {
        id: 1,
        name: 'Strategy & Planning',
        shortDescription: 'We design a clear structure for your message, audience, and conversion goals.',
        longDescription: 'We begin by mapping your audience, the core message, and the user journey so each page has a focused purpose.',
        features: ['Audience mapping', 'Content structure', 'Page flow planning']
      },
      {
        id: 2,
        name: 'Visual Design',
        shortDescription: 'We shape polished layouts and visual direction that feel modern and trustworthy.',
        longDescription: 'From color choices to typography and spacing, each visual decision supports readability and stronger engagement.',
        features: ['Wireframes', 'Brand alignment', 'Responsive layouts']
      },
      {
        id: 3,
        name: 'Development & Launch',
        shortDescription: 'We turn the approved concept into a responsive website that works well on every screen.',
        longDescription: 'The final build includes semantic HTML, lightweight styles, and a thoughtful handoff experience for a smooth launch.',
        features: ['Fast pages', 'Accessible markup', 'SEO-friendly structure']
      }
    ],
    portfolio: [
      {
        id: 1,
        title: 'Northshore Retreat',
        category: 'Brand website',
        description: 'A calming experience for a hospitality brand with strong visual storytelling.',
        image: '../images/image1.jpg'
      },
      {
        id: 2,
        title: 'Studio Atlas',
        category: 'Creative showcase',
        description: 'A minimal portfolio that highlights photography, motion, and editorial work.',
        image: '../images/image2.jpg'
      },
      {
        id: 3,
        title: 'Harbor Commerce',
        category: 'E-commerce concept',
        description: 'A polished online storefront designed for quick browsing and conversion.',
        image: '../images/image3.jpg'
      }
    ],
    posts: [
      {
        id: 1,
        title: 'The four habits of effective web pages',
        excerpt: 'Simple pages often work better when the core message is easy to scan and the call to action is clear.',
        category: 'Design',
        date: 'June 14, 2026',
        image: '../images/image1.jpg',
        content: 'Good pages are easy to understand, quick to navigate, and built around a single goal. That clarity helps visitors focus and increases confidence.'
      },
      {
        id: 2,
        title: 'Why mobile-first design still matters',
        excerpt: 'A responsive foundation makes the experience feel calm and consistent from the first tap onward.',
        category: 'Strategy',
        date: 'May 31, 2026',
        image: '../images/image2.jpg',
        content: 'Designing for smaller screens first often leads to better decisions about hierarchy, spacing, and content priorities.'
      },
      {
        id: 3,
        title: 'How to write stronger calls to action',
        excerpt: 'Actionable language improves engagement because it tells visitors exactly what to do next.',
        category: 'Marketing',
        date: 'May 10, 2026',
        image: '../images/image3.jpg',
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
      thanks: 'شكرًا لك!',
      sendRequest: 'إرسال الطلب'
    },
    services: [
      {
        id: 1,
        name: 'الاستراتيجية والتخطيط',
        shortDescription: 'نصمم هيكلاً واضحاً لرسالتك وجمهورك وأهداف التحويل.',
        longDescription: 'نبدأ برسم ملامح جمهورك، والرسالة الأساسية، ورحلة المستخدم، بحيث تحمل كل صفحة هدفاً واضحاً.',
        features: ['تحديد الجمهور', 'هيكلة المحتوى', 'تخطيط تدفق الصفحات']
      },
      {
        id: 2,
        name: 'التصميم المرئي',
        shortDescription: 'نصمم تخطيطات أنيقة وهوية بصرية تبدو عصرية وموثوقة.',
        longDescription: 'من اختيار الألوان إلى الخطوط والمسافات، كل قرار بصري يدعم سهولة القراءة وزيادة التفاعل.',
        features: ['مخططات أولية', 'الانسجام مع الهوية', 'تخطيطات متجاوبة']
      },
      {
        id: 3,
        name: 'التطوير والإطلاق',
        shortDescription: 'نحوّل الفكرة المعتمدة إلى موقع متجاوب يعمل بكفاءة على كل الشاشات.',
        longDescription: 'يشمل البناء النهائي كود HTML دلالي، وتنسيقات خفيفة، وتجربة تسليم مدروسة لإطلاق سلس.',
        features: ['صفحات سريعة', 'ترميز يدعم إمكانية الوصول', 'هيكلة صديقة لمحركات البحث']
      }
    ],
    portfolio: [
      {
        id: 1,
        title: 'نورثشور ريتريت',
        category: 'موقع علامة تجارية',
        description: 'تجربة هادئة لعلامة ضيافة مع سرد بصري قوي.',
        image: '../images/image1.jpg'
      },
      {
        id: 2,
        title: 'ستوديو أطلس',
        category: 'معرض أعمال إبداعي',
        description: 'معرض أعمال بسيط يبرز التصوير والحركة والأعمال التحريرية.',
        image: '../images/image2.jpg'
      },
      {
        id: 3,
        title: 'هاربر كوميرس',
        category: 'مفهوم تجارة إلكترونية',
        description: 'واجهة متجر إلكتروني أنيقة مصممة للتصفح السريع والتحويل.',
        image: '../images/image3.jpg'
      }
    ],
    posts: [
      {
        id: 1,
        title: 'العادات الأربع للصفحات الفعّالة',
        excerpt: 'غالباً ما تعمل الصفحات البسيطة بشكل أفضل عندما تكون الرسالة الأساسية سهلة التصفح والدعوة لاتخاذ إجراء واضحة.',
        category: 'تصميم',
        date: '14 يونيو 2026',
        image: '../images/image1.jpg',
        content: 'الصفحات الجيدة سهلة الفهم، وسريعة التصفح، ومبنية حول هدف واحد. هذا الوضوح يساعد الزوار على التركيز ويزيد من الثقة.'
      },
      {
        id: 2,
        title: 'لماذا لا يزال التصميم للجوال أولاً مهماً',
        excerpt: 'الأساس المتجاوب يجعل التجربة تبدو هادئة ومتسقة من أول لمسة.',
        category: 'استراتيجية',
        date: '31 مايو 2026',
        image: '../images/image2.jpg',
        content: 'التصميم للشاشات الصغيرة أولاً غالباً ما يؤدي إلى قرارات أفضل بخصوص التسلسل الهرمي، والمسافات، وأولويات المحتوى.'
      },
      {
        id: 3,
        title: 'كيف تكتب دعوات لاتخاذ إجراء أكثر تأثيراً',
        excerpt: 'اللغة القابلة للتنفيذ تحسّن التفاعل لأنها تخبر الزوار بالضبط بما يجب فعله بعد ذلك.',
        category: 'تسويق',
        date: '10 مايو 2026',
        image: '../images/image3.jpg',
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
    <article class="card service-card">
      <div class="card-body">
        <h3>${service.name}</h3>
        <p>${service.shortDescription}</p>
        <a class="link" href="service-details.html?id=${service.id}">${uiText.learnMore}</a>
      </div>
    </article>
  `).join('');
}

function populatePortfolio(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = siteData.portfolio.map((item) => `
    <article class="card portfolio-card">
      <img src="${item.image}" alt="${item.title}" />
      <div class="card-body">
        <span class="badge">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </article>
  `).join('');
}

function populatePosts(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = siteData.posts.map((post) => `
    <article class="card post-card">
      <img src="${post.image}" alt="${post.title}" />
      <div class="card-body">
        <p class="eyebrow">${post.category} • ${post.date}</p>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a class="link" href="blog-details.html?id=${post.id}">${uiText.readMore}</a>
      </div>
    </article>
  `).join('');
}

function loadServiceDetails(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const id = Number(getQueryParam('id'));
  const service = siteData.services.find((item) => item.id === id);
  if (!service) {
    container.innerHTML = `<p class="empty-state">${uiText.serviceNotFound}</p>`;
    return;
  }
  container.innerHTML = `
    <article class="card detail-card">
      <div class="card-body">
        <p class="eyebrow">${uiText.serviceDetail}</p>
        <h1>${service.name}</h1>
        <p>${service.longDescription}</p>
        <ul class="feature-list">
          ${service.features.map((feature) => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
    </article>
  `;
}

function loadPostDetails(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const id = Number(getQueryParam('id'));
  const post = siteData.posts.find((item) => item.id === id);
  if (!post) {
    container.innerHTML = `<p class="empty-state">${uiText.articleNotFound}</p>`;
    return;
  }
  container.innerHTML = `
    <article class="card detail-card">
      <div class="card-body">
        <p class="eyebrow">${post.category} • ${post.date}</p>
        <h1>${post.title}</h1>
        <p>${post.content}</p>
      </div>
    </article>
  `;
}

function initSiteInteractions() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const modal = document.getElementById('quoteModal');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const quoteForm = document.getElementById('quoteForm');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  if (openModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    });
  }

  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = quoteForm.querySelector('button');
      const originalLabel = uiText.sendRequest;
      if (button) {
        button.textContent = uiText.thanks;
      }
      setTimeout(() => {
        quoteForm.reset();
        if (button) button.textContent = originalLabel;
        if (modal) {
          modal.classList.remove('show');
          modal.setAttribute('aria-hidden', 'true');
        }
      }, 1200);
    });
  }
}
