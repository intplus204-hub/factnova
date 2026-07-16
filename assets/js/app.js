document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('main-nav');

  if (hamburger && mainNav) {
    // إزالة أي Event القديم وتعيين كليك جديد ومباشر
    hamburger.onclick = (e) => {
      e.stopPropagation(); // منع انتشار الكليك باش ما يتداخلش مع عناصر أخرى
      hamburger.classList.toggle('active');
      mainNav.classList.toggle('active');
    };

    // إغلاق القائمة تلقائياً إذا برك المستخدم فـ أي بلاصة خاوية فـ الشاشة
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mainNav.contains(e.target)) {
        hamburger.classList.remove('active');
        mainNav.classList.remove('active');
      }
    });
  }
});