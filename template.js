const template = `

<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nopdev.ir | طراحی فروشگاه اینترنتی با ناپ کامرس</title>

  <!-- SEO Meta Tags -->
  <meta name="description" content="nopdev.ir ارائه‌دهنده خدمات تخصصی طراحی فروشگاه اینترنتی با ناپ‌کامرس. راه‌اندازی، مشاوره و پشتیبانی فروشگاه آنلاین.">
  <meta name="keywords" content="nopdev, ناپ کامرس, طراحی فروشگاه اینترنتی, فروشگاه ساز, nopCommerce, سایت فروشگاهی">
  <meta name="author" content="nopdev.ir">

  <!-- Open Graph (برای شبکه‌های اجتماعی) -->
  <meta property="og:title" content="nopdev.ir | طراحی فروشگاه اینترنتی با ناپ کامرس">
  <meta property="og:description" content="خدمات حرفه‌ای طراحی فروشگاه اینترنتی با ناپ‌کامرس. همین حالا فروشگاه آنلاین خود را راه‌اندازی کنید!">
  <meta property="og:image" content="https://yourdomain.com/path-to-image.jpg">
  <meta property="og:url" content="https://nopdev.ir">
  <meta property="og:type" content="website">
  
  <style>
    body {
      margin: 0;
      font-family: 'Vazir', sans-serif;
      background: linear-gradient(135deg, #007bff, #00c6ff);
      color: #fff;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      animation: fadeIn 1s ease-in-out;
    }
    header {
      padding: 2rem;
      text-align: center;
      animation: slideInDown 0.8s ease-out;
    }
    header h1 {
      margin: 0;
      font-size: 3rem;
    }
    header p {
      margin-top: 1rem;
      font-size: 1.5rem;
    }
    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    section {
      background: rgba(255,255,255,0.1);
      border-radius: 16px;
      padding: 2rem;
      margin-top: 2rem;
      max-width: 600px;
      text-align: center;
      animation: fadeIn 1s ease-out;
    }
    section h2 {
      margin-bottom: 1rem;
    }
    .contact-button {
      display: inline-flex;
      align-items: center;
      margin-top: 1rem;
      margin: 0.5rem;
      padding: 0.75rem 1.5rem;
      color: white;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      transition: background-color 0.3s, transform 0.3s;
      font-size: 1rem;
      width: 100%;
      max-width: 150px; /* تنظیم حداکثر عرض دکمه‌ها */
    }
    .contact-button img {
      margin-left: 0.5rem;
      width: 24px;
      height: 24px;
    }
    .whatsapp-button {
      background-color: #25D366;
    }
    .whatsapp-button:hover {
      background-color: #1ebe5d;
      transform: scale(1.1);
    }
    .telegram-button {
      background-color: #0088cc;
    }
    .telegram-button:hover {
      background-color: #007ab8;
      transform: scale(1.1);
    }
    .instagram-button {
      background-color: #E4405F;
    }
    .instagram-button:hover {
      background-color: #cd3652;
      transform: scale(1.1);
    }
    footer {
      text-align: center;
      padding: 1rem;
      background: rgba(0,0,0,0.2);
      animation: fadeIn 1s ease-out;
    }
    a {
      color: #fff;
      text-decoration: underline;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      header h1 {
        font-size: 2.5rem;
      }
      header p {
        font-size: 1.2rem;
      }
      .contact-button {
        font-size: 0.9rem;
        padding: 0.6rem 1.2rem;
        max-width: 150px; /* در موبایل دکمه‌ها به صورت تمام عرض نمایش داده شوند */
        margin: 0.5rem 0; /* فاصله‌ی بیشتر بین دکمه‌ها */
      }
    }

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes slideInDown {
      0% { transform: translateY(-100%); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
  </style>
</head>
<body>
  <header>
    <h1>nopdev.ir</h1>
    <p>فروشگاه‌سازی حرفه‌ای با ناپ کامرس</p>
  </header>
  <main>
    <section>
      <h2>درباره ما</h2>
      <p>در nopdev.ir ما تخصصی‌ترین خدمات راه‌اندازی فروشگاه اینترنتی بر پایه ناپ‌کامرس را ارائه می‌دهیم. از مشاوره تا طراحی اختصاصی در کنار شما هستیم.</p>
    </section>
    <section>
      <h2>تماس با ما</h2>
      <p>برای مشاوره و دریافت خدمات، از طریق ایمیل <a href="mailto:info@nopdev.ir">info@nopdev.ir</a> یا شماره تلفن <a href="tel:09334363850">09334363850</a> با ما در ارتباط باشید.</p>
      <a class="contact-button whatsapp-button" href="https://wa.me/989334363850" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">چت در واتساپ
      </a>
      <a class="contact-button telegram-button" href="https://t.me/yourtelegramusername" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram">چت در تلگرام
      </a>
      <a class="contact-button instagram-button" href="https://instagram.com/yourusername" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram">چت در اینستاگرام
      </a>
    </section>
  </main>
  <footer>
    <p>&copy; 2025 nopdev.ir - تمام حقوق محفوظ است</p>
  </footer>
</body>
</html>

`

export default template
