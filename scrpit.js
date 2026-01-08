// Loading Screen - FIXED
let progress = 0;
let loadingStarted = false;

// Start loading immediately
function startLoading() {
  if (loadingStarted) return;
  loadingStarted = true;

  const loadingInterval = setInterval(() => {
    progress += 1;
    document.getElementById("loadingProgress").style.width = progress + "%";

    // Update loading text based on progress
    const loadingTexts = {
      en: [
        "Loading your fashion experience...",
        "Preparing collections...",
        "Setting up design elements...",
        "Almost ready...",
      ],
      fa: [
        "در حال بارگذاری تجربه مد شما...",
        "آماده‌سازی مجموعه‌ها...",
        "تنظیم المان‌های طراحی...",
        "تقریباً آماده است...",
      ],
    };

    const currentTexts = loadingTexts[currentLang];
    let textIndex;

    if (progress < 25) textIndex = 0;
    else if (progress < 50) textIndex = 1;
    else if (progress < 75) textIndex = 2;
    else textIndex = 3;

    if (textIndex >= 0 && textIndex < currentTexts.length) {
      document.getElementById("loadingText").textContent =
        currentTexts[textIndex];
    }

    if (progress >= 100) {
      clearInterval(loadingInterval);
      setTimeout(() => {
        document.getElementById("loadingScreen").classList.add("hidden");
        document.body.classList.remove("loading");
        document.body.style.overflow = "auto";
      }, 500);
    }
  }, 70); // 3 seconds total
}

// Start loading immediately when page loads
window.addEventListener("load", startLoading);
document.addEventListener("DOMContentLoaded", startLoading);

// Theme Toggle Functionality
function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector("i");
  const themeText = themeToggle.querySelector("span");

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark-mode");
    themeIcon.className = "fas fa-sun";
    themeText.textContent = currentLang === "en" ? "Light" : "روز";
  } else {
    themeIcon.className = "fas fa-moon";
    themeText.textContent = currentLang === "en" ? "Dark" : "شب";
  }

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeIcon.className = "fas fa-sun";
      themeText.textContent = currentLang === "en" ? "Light" : "روز";
      localStorage.setItem("theme", "dark");
    } else {
      themeIcon.className = "fas fa-moon";
      themeText.textContent = currentLang === "en" ? "Dark" : "شب";
      localStorage.setItem("theme", "light");
    }
  });
}

// Website Content in Both Languages
const content = {
  en: {
    // Navigation
    nav: ["Home", "Our Brand", "Collections", "Join Us", "Contact"],
    search: "Search",
    searchPlaceholder: "Search products...",
    cart: "Cart",
    language: "EN",
    darkMode: "Dark",
    lightMode: "Light",

    // Hero
    heroTitle: "Design Today, <span>Style Tomorrow</span>",
    heroDesc:
      "Discover how you can express your true personality with our unique clothing. A blend of modern design, high quality, and bold color palette.",
    exploreBtn: "Explore Collections",

    // Features
    featuresTitle: "Discover <span>Our Brand</span>",
    features: [
      {
        title: "Innovative Design Philosophy",
        desc: "At MODERN, we believe fashion is more than clothing—it's personal expression. Our design team blends artistic vision with practical comfort, creating pieces that tell your unique story while providing unparalleled fit and feel.",
      },
      {
        title: "Sustainable & Ethical Production",
        desc: "We're committed to responsible fashion. From organic cotton to recycled materials, every garment is crafted with environmental consciousness and ethical manufacturing practices, ensuring both style and sustainability.",
      },
      {
        title: "Accessible Luxury",
        desc: "Experience premium quality without the premium price tag. Our direct-to-consumer model eliminates unnecessary markups, bringing you luxury fabrics, expert craftsmanship, and timeless designs at honest prices.",
      },
    ],

    // Products
    productsTitle: "Our <span>Collections</span>",
    categories: [
      "Men's Clothing",
      "Women's Clothing",
      "Accessories",
      "Men's Clothing",
      "Women's Clothing",
    ],
    products: [
      "Modern Graphic Hoodie",
      "Chrome Knit Jacket",
      "Modern Knit Hat",
      "Premium Cotton T-Shirt",
      "Designer Silk Dress",
    ],
    prices: ["$49.99", "$62.00", "$23.00", "$29.99", "$89.99"],
    addToCart: "Add to Cart",

    // CTA
    ctaTitle: "Join Our Fashion Revolution",
    ctaDesc:
      "Be part of a movement that celebrates individuality, sustainability, and exceptional design. Subscribe to get exclusive access to new collections, members-only discounts, and style insights from our designers.",
    ctaBtn: "Subscribe to Newsletter",

    // Footer
    footerDesc:
      "Redefining contemporary fashion through innovative design, sustainable practices, and uncompromising quality. We create clothing that empowers self-expression while respecting our planet.",
    quickLinks: "Quick Links",
    customerService: "Customer Service",
    contactUs: "Contact Us",
    footerLinks1: ["Home", "Our Brand", "Collections", "Join Us", "Contact Us"],
    footerLinks2: [
      "Size Guide",
      "Shipping Information",
      "Return Policy",
      "FAQ",
      "Support Center",
    ],
    address: "123 Fashion Street, New York, NY 10001",
    phone: "+1 (212) 555-1234",
    email: "hello@modernbrand.com",
    hours: "Mon-Fri: 9AM-6PM EST",
    copyright:
      "© 2026 Persona Fit Brand. All rights reserved. | Crafted with passion for exceptional design.",

    // Scroll
    scrollText: "Discover More",

    // Search results
    searchResults: [
      {
        title: "Modern Graphic Hoodie",
        category: "Men's Clothing",
        price: "$49.99",
      },
      {
        title: "Chrome Knit Jacket",
        category: "Women's Clothing",
        price: "$62.00",
      },
      { title: "Modern Knit Hat", category: "Accessories", price: "$23.00" },
      {
        title: "Premium Cotton T-Shirt",
        category: "Men's Clothing",
        price: "$29.99",
      },
      {
        title: "Designer Silk Dress",
        category: "Women's Clothing",
        price: "$89.99",
      },
    ],
  },

  fa: {
    // Navigation
    nav: ["خانه", "برند ما", "مجموعه‌ها", "به ما بپیوندید", "تماس"],
    search: "جستجو",
    searchPlaceholder: "جستجوی محصولات...",
    cart: "سبد خرید",
    language: "FA",
    darkMode: "شب",
    lightMode: "روز",

    // Hero
    heroTitle: "طراحی امروز، <span>سبک فردا</span>",
    heroDesc:
      "کشف کنید که چگونه می‌توانید با لباس‌های منحصربفرد ما، شخصیت واقعی خود را به نمایش بگذارید. ترکیبی از طراحی مدرن، کیفیت بالا و پالت رنگی جسورانه.",
    exploreBtn: "مشاهده مجموعه‌ها",

    // Features
    featuresTitle: "کشف <span>برند ما</span>",
    features: [
      {
        title: "فلسفه طراحی نوآورانه",
        desc: "در MODERN، ما معتقدیم مد چیزی بیش از لباس است - این بیان شخصی است. تیم طراحی ما دید هنری را با راحتی عملی ترکیب می‌کند و قطعاتی خلق می‌کند که داستان منحصربفرد شما را روایت می‌کنند در حالی که تناسب و احساس بی‌نظیری ارائه می‌دهند.",
      },
      {
        title: "تولید پایدار و اخلاقی",
        desc: "ما متعهد به مد مسئولانه هستیم. از پنبه ارگانیک تا مواد بازیافتی، هر لباس با آگاهی زیست محیطی و روش‌های تولید اخلاقی ساخته می‌شود و هم سبک و هم پایداری را تضمین می‌کند.",
      },
      {
        title: "لوکس در دسترس",
        desc: "کیفیت ممتاز را بدون برچسب قیمت بالا تجربه کنید. مدل مستقیم به مصرف‌کننده ما حاشیه‌های سود غیرضروری را حذف می‌کند و پارچه‌های لوکس، صنعت‌گری متخصص و طراحی‌های ماندگار را با قیمت‌های صادقانه به شما ارائه می‌دهد.",
      },
    ],

    // Products
    productsTitle: "<span>مجموعه‌های</span> ما",
    categories: [
      "پوشاک مردانه",
      "پوشاک زنانه",
      "اکسسوری",
      "پوشاک مردانه",
      "پوشاک زنانه",
    ],
    products: [
      "هودی طرح‌دار مدرن",
      "ژاکت کرومی زنانه",
      "کلاه بافت مدرن",
      "تی‌شرت پنبه‌ای پریمیوم",
      "لباس دیزاینر ابریشمی",
    ],
    prices: [
      "۴۹۰,۰۰۰ تومان",
      "۶۲۰,۰۰۰ تومان",
      "۲۳۰,۰۰۰ تومان",
      "۲۹۰,۰۰۰ تومان",
      "۸۹۰,۰۰۰ تومان",
    ],
    addToCart: "افزودن به سبد خرید",

    // CTA
    ctaTitle: "به انقلاب مد ما بپیوندید",
    ctaDesc:
      "بخشی از جنبشی باشید که فردیت، پایداری و طراحی استثنایی را جشن می‌گیرد. مشترک شوید تا دسترسی انحصاری به مجموعه‌های جدید، تخفیف‌های ویژه اعضا و بینش‌های سبک از طراحان ما دریافت کنید.",
    ctaBtn: "عضویت در خبرنامه",

    // Footer
    footerDesc:
      "تعریف مجدد مد معاصر از طریق طراحی نوآورانه، شیوه‌های پایدار و کیفیت بی‌چشم‌پوشی. ما لباسی خلق می‌کنیم که بیان شخصی را تقویت می‌کند و در عین حال به سیاره ما احترام می‌گذارد.",
    quickLinks: "لینک‌های سریع",
    customerService: "خدمات مشتریان",
    contactUs: "تماس با ما",
    footerLinks1: [
      "خانه",
      "برند ما",
      "مجموعه‌ها",
      "به ما بپیوندید",
      "تماس با ما",
    ],
    footerLinks2: [
      "راهنمای اندازه",
      "اطلاعات ارسال",
      "سیاست بازگشت",
      "سوالات متداول",
      "مرکز پشتیبانی",
    ],
    address: "خیابان مد ۱۲۳، نیویورک، نیویورک ۱۰۰۰۱",
    phone: "+۱ (۲۱۲) ۵۵۵-۱۲۳۴",
    email: "hello@modernbrand.com",
    hours: "شنبه تا پنجشنبه: ۹ صبح تا ۶ بعدازظهر EST",
    copyright:
      "© 2026 پرسونا فیت. تمامی حقوق محفوظ است. | ساخته شده با اشتیاق برای طراحی استثنایی.",

    // Scroll
    scrollText: "کشف بیشتر",

    // Search results
    searchResults: [
      {
        title: "هودی طرح‌دار مدرن",
        category: "پوشاک مردانه",
        price: "۴۹۰,۰۰۰ تومان",
      },
      {
        title: "ژاکت کرومی زنانه",
        category: "پوشاک زنانه",
        price: "۶۲۰,۰۰۰ تومان",
      },
      { title: "کلاه بافت مدرن", category: "اکسسوری", price: "۲۳۰,۰۰۰ تومان" },
      {
        title: "تی‌شرت پنبه‌ای پریمیوم",
        category: "پوشاک مردانه",
        price: "۲۹۰,۰۰۰ تومان",
      },
      {
        title: "لباس دیزاینر ابریشمی",
        category: "پوشاک زنانه",
        price: "۸۹۰,۰۰۰ تومان",
      },
    ],
  },
};

// Current language state - ALWAYS START WITH ENGLISH
let currentLang = "en";
let isSwitchingLanguage = false;

// Search functionality
let searchTimeout = null;
const searchData = {
  en: content.en.searchResults,
  fa: content.fa.searchResults,
};

// Cart functionality
let cart = [];

function updateCartCount() {
  const cartCount = document.querySelector(".cart-count");
  cartCount.textContent = cart.length;

  if (cart.length > 0) {
    cartCount.style.display = "inline-flex";
    cartCount.style.alignItems = "center";
    cartCount.style.justifyContent = "center";
    cartCount.style.width = "20px";
    cartCount.style.height = "20px";
    cartCount.style.backgroundColor = "var(--orange-primary)";
    cartCount.style.color = "white";
    cartCount.style.borderRadius = "50%";
    cartCount.style.fontSize = "0.8rem";
    cartCount.style.marginLeft = "5px";
  } else {
    cartCount.style.display = "none";
  }
}

// Initialize smooth scroll for all anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (window.innerWidth <= 992) {
          navLinks.style.display = "none";
        }
      }
    });
  });

  // Enable smooth scroll for all scrolling (not just anchor clicks)
  document.addEventListener(
    "wheel",
    function (e) {
      if (e.ctrlKey) return; // Allow zoom with Ctrl+Scroll

      // Only apply smooth scroll for vertical scrolling
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        window.scrollBy({
          top: e.deltaY,
          left: e.deltaX,
          behavior: "smooth",
        });
      }
    },
    { passive: false }
  );
}

// Language switcher function with smooth transition
function switchLanguage(lang) {
  if (isSwitchingLanguage || currentLang === lang) return;

  isSwitchingLanguage = true;
  currentLang = lang;
  const data = content[lang];

  // Add transition class to body for smooth RTL/LTR switch
  document.body.style.opacity = "0.9";
  document.body.style.transform = "scale(0.99)";

  setTimeout(() => {
    // Update navigation
    document.querySelectorAll(".nav-links a").forEach((link, index) => {
      link.textContent = data.nav[index];
    });

    // Update buttons
    document.querySelector("#searchToggle span").textContent = data.search;
    document.querySelector("#searchInput").placeholder = data.searchPlaceholder;
    document.querySelector("#cartBtn span").textContent = data.cart;
    document.getElementById("languageText").textContent = data.language;

    // Update theme toggle text
    const themeToggle = document.querySelector(".theme-toggle span");
    const isDarkMode = document.body.classList.contains("dark-mode");
    themeToggle.textContent = isDarkMode ? data.lightMode : data.darkMode;

    // Update hero section
    document.querySelector(".hero-title").innerHTML = data.heroTitle;
    document.querySelector(".hero-description").textContent = data.heroDesc;
    document.querySelector("#exploreBtn span").textContent = data.exploreBtn;
    document.querySelector(".scroll-down").textContent = data.scrollText;
    document.querySelector(".scroll-down").innerHTML =
      data.scrollText + ' <i class="fas fa-chevron-down"></i>';

    // Update features section
    document.querySelector(".features .section-title").innerHTML =
      data.featuresTitle;
    document.querySelectorAll(".feature-card h3").forEach((card, index) => {
      card.textContent = data.features[index].title;
    });
    document.querySelectorAll(".feature-card p").forEach((card, index) => {
      card.textContent = data.features[index].desc;
    });

    // Update products section
    document.querySelector(".products .section-title").innerHTML =
      data.productsTitle;
    document.querySelectorAll(".product-category").forEach((cat, index) => {
      cat.textContent = data.categories[index];
    });
    document.querySelectorAll(".product-title").forEach((title, index) => {
      title.textContent = data.products[index];
    });
    document.querySelectorAll(".product-price").forEach((price, index) => {
      price.textContent = data.prices[index];
    });

    // Update Add to Cart buttons
    document.querySelectorAll(".add-to-cart-btn span").forEach((btn) => {
      btn.textContent = data.addToCart;
    });

    // Update CTA section
    document.querySelector(".cta-title").textContent = data.ctaTitle;
    document.querySelector(".cta-subtitle").textContent = data.ctaDesc;
    document.querySelector("#newsletterBtn span").textContent = data.ctaBtn;

    // Update footer
    document.querySelector(".footer-description").textContent = data.footerDesc;
    document.querySelectorAll(".footer-links h4")[0].textContent =
      data.quickLinks;
    document.querySelectorAll(".footer-links h4")[1].textContent =
      data.customerService;
    document.querySelectorAll(".footer-links h4")[2].textContent =
      data.contactUs;

    document
      .querySelectorAll(".footer-links:nth-child(2) a")
      .forEach((link, index) => {
        link.textContent = data.footerLinks1[index];
      });

    document
      .querySelectorAll(".footer-links:nth-child(3) a")
      .forEach((link, index) => {
        link.textContent = data.footerLinks2[index];
      });

    const footerSpans = document.querySelectorAll(
      ".footer-links:nth-child(4) span"
    );
    if (footerSpans.length >= 4) {
      footerSpans[0].textContent = data.address;
      footerSpans[1].textContent = data.phone;
      footerSpans[2].textContent = data.email;
      footerSpans[3].textContent = data.hours;
    }

    document.querySelector(".copyright").textContent = data.copyright;

    // Update body direction with smooth transition
    if (lang === "fa") {
      document.body.classList.add("rtl");
      document.body.dir = "rtl";
      document.documentElement.lang = "fa";
      document.documentElement.dir = "rtl";
    } else {
      document.body.classList.remove("rtl");
      document.body.dir = "ltr";
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    }

    // Update arrow direction in buttons
    if (lang === "fa") {
      document.querySelector("#exploreBtn i").className = "fas fa-arrow-left";
      document.querySelectorAll(".btn-outline i")[0].style.transform =
        "scaleX(-1)";
    } else {
      document.querySelector("#exploreBtn i").className = "fas fa-arrow-right";
      document.querySelectorAll(".btn-outline i")[0].style.transform =
        "scaleX(1)";
    }

    // Update search results if search is active
    if (document.getElementById("searchBox").classList.contains("active")) {
      performSearch(document.getElementById("searchInput").value);
    }

    // Restore body opacity and scale
    setTimeout(() => {
      document.body.style.opacity = "1";
      document.body.style.transform = "scale(1)";
      isSwitchingLanguage = false;
    }, 200);

    // Save language preference
    localStorage.setItem("preferredLanguage", lang);
  }, 300);
}

// Search functionality
function initSearch() {
  const searchToggle = document.getElementById("searchToggle");
  const searchBox = document.getElementById("searchBox");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  // Toggle search box
  searchToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    searchBox.classList.toggle("active");
    if (searchBox.classList.contains("active")) {
      searchInput.focus();
    }
  });

  // Close search when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-container")) {
      searchBox.classList.remove("active");
      searchResults.classList.remove("active");
    }
  });

  // Handle search input
  searchInput.addEventListener("input", function () {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      performSearch(this.value);
    }, 300);
  });

  // Handle search submission
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      performSearch(this.value);
    }
  });
}

function performSearch(query) {
  const searchResults = document.getElementById("searchResults");
  const resultsContainer = document.getElementById("searchResults");

  if (!query.trim()) {
    resultsContainer.innerHTML = "";
    searchResults.classList.remove("active");
    return;
  }

  // Filter search results
  const results = searchData[currentLang].filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  // Display results
  if (results.length > 0) {
    resultsContainer.innerHTML = results
      .map(
        (item) => `
                    <div class="search-result-item" data-product="${item.title}">
                        <i class="fas fa-tshirt"></i>
                        <div>
                            <div style="font-weight: 600;">${item.title}</div>
                            <div style="font-size: 0.9rem; color: var(--text-secondary);">${item.category} • ${item.price}</div>
                        </div>
                    </div>
                `
      )
      .join("");

    // Add click handlers to search results
    document.querySelectorAll(".search-result-item").forEach((item) => {
      item.addEventListener("click", function () {
        const productName = this.getAttribute("data-product");
        addToCartFromSearch(productName);
        document.getElementById("searchBox").classList.remove("active");
        document.getElementById("searchResults").classList.remove("active");
        document.getElementById("searchInput").value = "";
      });
    });

    searchResults.classList.add("active");
  } else {
    resultsContainer.innerHTML = `
                    <div class="search-result-item" style="justify-content: center; color: var(--text-secondary);">
                        <i class="fas fa-search"></i>
                        <span>${
                          currentLang === "en"
                            ? "No results found"
                            : "نتیجه‌ای یافت نشد"
                        }</span>
                    </div>
                `;
    searchResults.classList.add("active");
  }
}

function addToCartFromSearch(productName) {
  const productData = searchData[currentLang].find(
    (item) => item.title === productName
  );
  if (productData) {
    cart.push({
      name: productData.title,
      price: productData.price,
      category: productData.category,
    });
    updateCartCount();

    // Show success message
    const message =
      currentLang === "en"
        ? `Added to cart: ${productData.title}`
        : `اضافه شد به سبد خرید: ${productData.title}`;

    showNotification(message);
  }
}

// Add to Cart functionality for product cards
function initAddToCartButtons() {
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productName = this.getAttribute("data-product");
      const productPrice = this.getAttribute("data-price");
      const productCard = this.closest(".product-card");
      const productCategory =
        productCard.querySelector(".product-category").textContent;

      // Add to cart
      cart.push({
        name: productName,
        price: productPrice,
        category: productCategory,
      });
      updateCartCount();

      // Visual feedback
      this.classList.add("added");
      this.innerHTML = `
                        <i class="fas fa-check"></i>
                        <span>${
                          currentLang === "en" ? "Added!" : "اضافه شد!"
                        }</span>
                    `;

      // Show success message
      const message =
        currentLang === "en"
          ? `Added to cart: ${productName}`
          : `اضافه شد به سبد خرید: ${productName}`;

      showNotification(message);

      // Reset button after 2 seconds
      setTimeout(() => {
        this.classList.remove("added");
        this.innerHTML = `
                            <i class="fas fa-shopping-cart"></i>
                            <span>${content[currentLang].addToCart}</span>
                        `;
      }, 2000);
    });
  });
}

function showNotification(message) {
  // Remove existing notification if any
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
            `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 3000);
}

// Animation on scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      }
    });
  }, observerOptions);

  // Apply animation to cards
  document.querySelectorAll(".feature-card, .product-card").forEach((card) => {
    observer.observe(card);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Prevent scrolling during loading
  document.body.style.overflow = "hidden";

  // Initialize theme toggle
  initThemeToggle();

  // Mobile menu
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  mobileMenuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
    if (navLinks.style.display === "flex") {
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "fixed";
      navLinks.style.top = "80px";
      navLinks.style.right = "0";
      navLinks.style.background = "var(--card-bg)";
      navLinks.style.width = "200px";
      navLinks.style.padding = "1rem";
      navLinks.style.boxShadow = "0 10px 30px var(--shadow-color)";
      navLinks.style.borderRadius = "0 0 0 10px";
      navLinks.style.zIndex = "1000";
      navLinks.style.border = "1px solid var(--gray-light)";

      if (document.body.classList.contains("rtl")) {
        navLinks.style.right = "auto";
        navLinks.style.left = "0";
        navLinks.style.borderRadius = "0 0 10px 0";
      }
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".navbar")) {
      if (window.innerWidth <= 992) {
        navLinks.style.display = "none";
      }
    }
  });

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = "var(--header-bg)";
      navbar.style.boxShadow = "0 5px 20px var(--shadow-color)";
    } else {
      navbar.style.backgroundColor = "var(--header-bg)";
      navbar.style.boxShadow = "none";
    }
  });

  // Language toggle
  document
    .getElementById("languageToggle")
    .addEventListener("click", function () {
      const newLang = currentLang === "en" ? "fa" : "en";
      switchLanguage(newLang);
    });

  // CTA buttons
  document.getElementById("exploreBtn").addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
      alert(
        currentLang === "en"
          ? "Redirecting to collections..."
          : "در حال هدایت به مجموعه‌ها..."
      );
    }, 200);
  });

  document
    .getElementById("newsletterBtn")
    .addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
        const email = prompt(
          currentLang === "en" ? "Enter your email:" : "ایمیل خود را وارد کنید:"
        );
        if (email) {
          showNotification(
            currentLang === "en"
              ? "Thank you for subscribing!"
              : "با تشکر از عضویت شما!"
          );
        }
      }, 200);
    });

  // Cart button
  document.getElementById("cartBtn").addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
      if (cart.length === 0) {
        const message =
          currentLang === "en"
            ? "Your cart is empty. Add some products!"
            : "سبد خرید شما خالی است. چند محصول اضافه کنید!";
        showNotification(message);
      } else {
        const message =
          currentLang === "en"
            ? `You have ${cart.length} items in your cart. Total: $${cart
                .reduce((sum, item) => sum + parseFloat(item.price), 0)
                .toFixed(2)}`
            : `شما ${cart.length} آیتم در سبد خرید دارید. مجموع: ${cart
                .reduce(
                  (sum, item) =>
                    sum + parseFloat(item.price.replace(/[^0-9.]/g, "")),
                  0
                )
                .toLocaleString()} تومان`;
        showNotification(message);
      }
    }, 200);
  });

  // ALWAYS START WITH ENGLISH
  switchLanguage("en");

  // Initialize features
  initSmoothScroll();
  initSearch();
  initAddToCartButtons();
  initScrollAnimations();
});
