document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // منع إعادة تحميل الصفحة
  
  let email = document.getElementById("logemail").value;
  let password = document.getElementById("logpass").value;

  if (email === "" || password === "") {
      alert("يرجى ملء جميع الحقول!");
      return;
  }

  // هنا تقدر تضيف شرط معين للتحقق من البيانات
  if (email === "admin@example.com" && password === "1234") {
      window.location.href = "dashboard.html"; // الصفحة اللي هينتقل لها بعد تسجيل الدخول
  } else {
      alert("خطأ في البريد الإلكتروني أو كلمة المرور!");
  }
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("theme-toggle");
    const body = document.body;

    // التحقق من الوضع المحفوظ مسبقًا
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    toggleSwitch.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // حفظ الحالة في LocalStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.getElementById("login-container");
    const mainContent = document.getElementById("main-content");
    const loginBtn = document.getElementById("login-btn");

    // إنشاء عنصر الخلفية المعتمة
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    // عند الضغط على زر "Let's go!"
    loginBtn.addEventListener("click", function () {
        loginContainer.style.display = "none"; // إخفاء نموذج تسجيل الدخول
        mainContent.style.display = "block"; // إظهار محتوى الصفحة
        overlay.style.display = "none"; // إزالة الخلفية المعتمة
    });
});
