let currentLang = "ar";

function toggleLanguage() {

    if (currentLang === "ar") {

        // تحويل انجليزي
        document.documentElement.setAttribute("lang", "en");

        // تغيير النصوص
        document.getElementById("bar_text").innerText = "Menu";
        document.querySelector("#Lang_button").innerText = "العربية 🌐";

        document.querySelector("#Drinks_button").innerText = "Drinks";
        document.querySelector("#Food_button").innerText = "Food";

        // الكروت
        document.querySelector("#Milk-h2").innerText = "Al Sabah Milk";
        document.querySelector("#Milk-p").innerText = "Refreshing and nutritious milk";
        document.querySelector("#Milk-price").innerText = "30 EGP";

      

        currentLang = "en";

    } else {

        // رجوع عربي
        document.documentElement.setAttribute("lang", "ar");

         // تغيير النصوص
        document.getElementById("bar_text").innerText = "قائمة المنتجات";
        document.querySelector("#Lang_button").innerText = "🌐 English";

        document.querySelector("#Drinks_button").innerText = "المشروبات";
        document.querySelector("#Food_button").innerText = "المأكولات";

        // الكروت
        document.querySelector("#Milk-h2").innerText = "لبن الصباح";
        document.querySelector("#Milk-p").innerText = "لبن منعش ومغذي";
        document.querySelector("#Milk-price").innerText = "30 جنيه";


        currentLang = "ar";
    }
}
