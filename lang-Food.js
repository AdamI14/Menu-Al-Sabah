let currentLang = "ar";

function toggleLanguage() {

    if (currentLang === "ar") {

        // تحويل انجليزي
        document.documentElement.setAttribute("lang", "en");

        // تغيير النصوص
        document.getElementById("bar_text").innerText = "Menu";

        document.querySelector("#Drinks_button").innerText = "Drinks";
        document.querySelector("#Food_button").innerText = "Food";

        // الكروت
        document.querySelector(".Yogurt-content h2").innerText = "Al Sabah Yogurt";
        document.querySelector(".Yogurt-content p").innerText = "Fresh creamy yogurt made from 100% natural milk";

        document.querySelector(".Rice_with_milk-content h2").innerText = "Al Sabah Rice Pudding";
        document.querySelector(".Rice_with_milk-content p").innerText = "Creamy rice pudding rich with milk and sugar";
        document.querySelector(".Yogurt-price").innerText = "10 EGP";
        document.querySelector(".Rice_with_milk-price").innerText = "13 EGP";

        currentLang = "en";

    } else {

        // رجوع عربي
        document.documentElement.setAttribute("lang", "ar");

        document.getElementById("bar_text").innerText = "قائمة المنتجات";

        document.querySelector("#Drinks_button").innerText = "المشروبات";
        document.querySelector("#Food_button").innerText = "المأكولات";

        document.querySelector(".Yogurt-content h2").innerText = "زبادي الصباح";
        document.querySelector(".Yogurt-content p").innerText = "زبادي طازج وكريمي مصنوع من حليب طبيعي %100";

        document.querySelector(".Rice_with_milk-content h2").innerText = "رز بلبن الصباح";
        document.querySelector(".Rice_with_milk-content p").innerText = "رز بلبن كريمي غني بالحليب والسكر";
        document.querySelector(".Yogurt-price").innerText = "10 جنيه";
        document.querySelector(".Rice_with_milk-price").innerText = "13 جنيه";

        currentLang = "ar";
    }
}
