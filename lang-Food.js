let currentLang = "ar";

function toggleLanguage() {

    if (currentLang === "ar") {

        // تحويل انجليزي
        document.documentElement.setAttribute("lang", "en");

        // تغيير النصوص

        // نص عنوان الصفحة
        document.getElementById("bar_text").innerText = "Menu";

        //زرار اللغة
        document.querySelector("#Lang_button").innerText = "العربية 🌐";

        //قائمة التوجيه
        document.querySelector("#Drinks_button").innerText = "Drinks";
        document.querySelector("#Food_button").innerText = "Food";

        // الاقسام
        document.querySelector("#Yogurt-and-Rice-Pudding-section").innerText = "Yogurt and Rice Pudding";
        document.querySelector("#Um-ali-and-mahlabia-section").innerText = "Um ali and Mahlabia"

        // الكروت

        // كرت الزبادي
        document.querySelector("#Yogurt-h2").innerText = "Al Sabah Yogurt";
        document.querySelector("#Yogurt-p").innerText = "Fresh creamy yogurt made from 100% natural milk";
        document.querySelector("#Yogurt-price").innerText = "12 EGP";

        // كرت الرز بلبن
        document.querySelector("#Rice-Pudding-h2").innerText = "Al Sabah Rice Pudding";
        document.querySelector("#Rice-Pudding-p").innerText = "Creamy rice pudding rich with milk and sugar";
        document.querySelector("#Rice-Pudding-choice-1").innerText = "Small: 15 EGP";
        document.querySelector("#Rice-Pudding-choice-2").innerText = "Large: 25 EGP";
        document.querySelector("#Rice-Pudding-choice-3").innerText = "Creamy: 20 EGP";

        // كرت الرز بلبلن فرن
        document.querySelector("#Baked-Rice-Pudding-h2").innerText = "Al Sabah Baked Rice Pudding";
        document.querySelector("#Baked-Rice-Pudding-p").innerText = "Oven baked rice pudding with a golden top and rich creamy taste!";
        document.querySelector("#Baked-Rice-Pudding-price").innerText = "15 EGP";

        // كرت الرز بلبلن مشكل
        document.querySelector("#Mix-Rice-Pudding-h2").innerText = "Rice Pudding (Nuts - Kunafa - Basbousa)";
        document.querySelector("#Mix-Rice-Pudding-p").innerText = " Creamy rice pudding with nuts, kunafa and basbousa";
        document.querySelector("#Mix-Rice-Pudding-price").innerText = "30 EGP";

        // كرت الرز بلبلن لوتس
        document.querySelector("#Lotus-Rice-Pudding-h2").innerText = "Lotus Rice Pudding";
        document.querySelector("#Lotus-Rice-Pudding-p").innerText = "Lotus rice pudding topped with rich Lotus sauce and crunchy biscuit crumbs!";
        document.querySelector("#Lotus-Rice-Pudding-choice-1").innerText = "Small: 20 EGP";
        document.querySelector("#Lotus-Rice-Pudding-choice-2").innerText = "Large: 40 EGP";

        // كرت رز بلبن نوتيلا
        document.querySelector("#Nutella-Rice-Pudding-h2").innerText = "Nutella Rice Pudding";
        document.querySelector("#Nutella-Rice-Pudding-p").innerText = "Nutella rice pudding topped with rich, creamy chocolate goodness!";
        document.querySelector("#Nutella-Rice-Pudding-price").innerText = "40 EGP";

        // كرت رز بلبن اوريو
        document.querySelector("#Oreo-Rice-Pudding-h2").innerText = "Oreo Rice Pudding";
        document.querySelector("#Oreo-Rice-Pudding-p").innerText = "Oreo rice pudding topped with crunchy Oreo pieces and rich chocolate flavor!";
        document.querySelector("#Oreo-Rice-Pudding-choice-1").innerText = "Small: 20 EGP";
        document.querySelector("#Oreo-Rice-Pudding-choice-2").innerText = "Large: 40 EGP";

        // كرت ام علي
        document.querySelector("#Um-ail-dish-h2").innerText = "Um ali plate";
        document.querySelector("#Um-ail-dish-p").innerText = "Om Ali served warm with flaky layers and a creamy comforting taste!";
        document.querySelector("#Um-ail-dish-price").innerText = "30 EGP";

        // كرت القرع العسلي
        document.querySelector("#Pumpkin-dish-h2").innerText = "Sweet pumpkin plate";
        document.querySelector("#Pumpkin-dish-p").innerText = "Creamy sweet pumpkin with a naturally sweet flavor and a delicious touch of cinnamon!";
        document.querySelector("#Pumpkin-dish-price").innerText = "20 EGP";

        // كرت عاشوراء
        document.querySelector("#Ashura-dish-h2").innerText = "Ashura";
        document.querySelector("#Ashura-dish-p").innerText = "!Rich mixture of wheat and milk with nuts and coconut, with a delicious unique taste";
        document.querySelector("#Ashura-dish-price").innerText = "20 EGP";

        // كرت المهلبية
        document.querySelector("#Mahlabia-oven-h2").innerText = "Backed mahlabia";
        document.querySelector("#Mahlabia-oven-p").innerText = "Creamy mahalabia with a delicious golden baked layer and a rich tasty flavor!";
        document.querySelector("#Mahlabia-oven-price").innerText = "20 EGP";

        // كرت مهلبية جيلي
        document.querySelector("#Mahlabia-jelly-h2").innerText = "Mahlabia with jelly";
        document.querySelector("#Mahlabia-jelly-p").innerText = "Smooth mahalabia topped with refreshing sweet jelly!";
        document.querySelector("#Mahlabia-jelly-choice1").innerText = "Small: 17 EGP";
        document.querySelector("#Mahlabia-jelly-choice2").innerText = "Large: 20 EGP";

        // كرت مهلبية
        document.querySelector("#Mahlabia-h2").innerText = "Mahlabia";
        document.querySelector("#Mahlabia-p").innerText = "Smooth and creamy mahlabia with a light sweet taste!";
        document.querySelector("#Mahlabia-choice1").innerText = "Small: 17 EGP";
        document.querySelector("#Mahlabia-choice2").innerText = "Large: 20 EGP";

        // كرت الجيلي
        document.querySelector("#Jelly-h2").innerText = "Jelly";
        document.querySelector("#Jelly-p").innerText = "Refreshing jelly with a light and smooth texture!";
        document.querySelector("#Jelly-choice1").innerText = "Small: 17 EGP";
        document.querySelector("#Jelly-choice2").innerText = "Large: 20 EGP";

        // كرت الكاستر
        document.querySelector("#Custard-h2").innerText = "Custard";
        document.querySelector("#Custard-p").innerText = "Smooth and creamy custard with a light and delicious sweet taste!";
        document.querySelector("#Custard-price").innerText = "17 EGP";

        // كرت كاستر جيلي
        document.querySelector("#Custard-jelly-h2").innerText = "Custard with jelly";
        document.querySelector("#Custard-jelly-p").innerText = "Smooth custard with a refreshing sweet jelly layer!";
        document.querySelector("#Custard-jelly-choice1").innerText = "Small: 17 EGP";
        document.querySelector("#Custard-jelly-choice2").innerText = "Large: 20 EGP";



        
        
        currentLang = "en";

    } else {

        // رجوع عربي
        document.documentElement.setAttribute("lang", "ar");

        // تغير النصوص
        document.getElementById("bar_text").innerText = "قائمة المنتجات";

        // زرار اللغة
        document.querySelector("#Lang_button").innerText = "🌐 English";

        // قائمة التوجيه
        document.querySelector("#Drinks_button").innerText = "المشروبات";
        document.querySelector("#Food_button").innerText = "المأكولات";

        // الاقسام
        document.querySelector("#Yogurt-and-Rice-Pudding-section").innerText = "رز بلبن و زبادي";
        document.querySelector("#Um-ali-and-mahlabia-section").innerText = "ام علي و مهلبية "

        // الكروت

        // كرت الزبادي
        document.querySelector("#Yogurt-h2").innerText = "زبادي الصباح";
        document.querySelector("#Yogurt-p").innerText = "زبادي طازج وكريمي مصنوع من حليب طبيعي %100";
        document.querySelector("#Yogurt-price").innerText = "12 جنيه";

        // كرت الرز بلبن
        document.querySelector("#Rice-Pudding-h2").innerText = "رز بلبن الصباح";
        document.querySelector("#Rice-Pudding-p").innerText = "رز بلبن كريمي غني بالحليب والسكر";
        document.querySelector("#Rice-Pudding-choice-1").innerText = "سادة صغير: 15 جنيه";
        document.querySelector("#Rice-Pudding-choice-2").innerText = "سادة كبير: 25 جنيه";
        document.querySelector("#Rice-Pudding-choice-3").innerText = "كريمة: 20 جنيه";

        // كرت الرز بلبن فرن
        document.querySelector("#Baked-Rice-Pudding-h2").innerText = "رز بلبن فرن";
        document.querySelector("#Baked-Rice-Pudding-p").innerText = "!رز بلبن في الفرن بوش ذهبي وطعم كريمي غني";
        document.querySelector("#Baked-Rice-Pudding-price").innerText = "15 جنيه";

        // كرت الرز بلبلن مشكل
        document.querySelector("#Mix-Rice-Pudding-h2").innerText = "رز بلبن (مكسرات - كنافة - بسبوسة)";
        document.querySelector("#Mix-Rice-Pudding-p").innerText = "رز بلبن كريمي بالمكسرات والكنافة والبسبوسة";
        document.querySelector("#Mix-Rice-Pudding-price").innerText = "20 جنيه";

        // كرت رز بلبن لوتس
        document.querySelector("#Lotus-Rice-Pudding-h2").innerText = "رز بلبن لوتس";
        document.querySelector("#Lotus-Rice-Pudding-p").innerText = "!رز بلبن لوتس كريمي متغطي بصوص لوتس الغني وقطع بسكويت مقرمشة";
        document.querySelector("#Lotus-Rice-Pudding-choice-1").innerText = "صغير: 20 جنيه";
        document.querySelector("#Lotus-Rice-Pudding-choice-2").innerText = "كبير: 40 جنيه";

        // كرت رز بلبن نوتيلا
        document.querySelector("#Nutella-Rice-Pudding-h2").innerText = "رز بلبن نوتيلا";
        document.querySelector("#Nutella-Rice-Pudding-p").innerText = "!رز بلبن نوتيلا كريمي متغطي بطبقة نوتيلا غنية تخلي كل لقمة متعة";
        document.querySelector("#Nutella-Rice-Pudding-price").innerText = "40 جنيه";

        // كرت رز بلبن اوريو
        document.querySelector("#Oreo-Rice-Pudding-h2").innerText = "رز بلبن اوريو";
        document.querySelector("#Oreo-Rice-Pudding-p").innerText = "!رز بلبن أوريو كريمي متغطي بقطع أوريو مقرمشة وطعم شوكولاتة يخطف القلب";
        document.querySelector("#Oreo-Rice-Pudding-choice-1").innerText = "صغير: 20 جنيه";
        document.querySelector("#Oreo-Rice-Pudding-choice-2").innerText = "كبير: 40 جنيه";

        // كرت ام علي
        document.querySelector("#Um-ail-dish-h2").innerText = "طبق ام علي";
        document.querySelector("#Um-ail-dish-p").innerText = "!أم علي سخنة بطبقات هشة وطعم كريمي يدفّي القلب";
        document.querySelector("#Um-ail-dish-price").innerText = "30 جنيه";

        // كرت القرع العسلي
        document.querySelector("#Pumpkin-dish-h2").innerText = "قرع عسلي طبق";
        document.querySelector("#Pumpkin-dish-p").innerText = "!قرع عسلي كريمي بطعم حلو طبيعي ولمسة قرفة لذيذة";
        document.querySelector("#Pumpkin-dish-price").innerText = "20 جنيه";

        // كرت عاشوراء
        document.querySelector("#Ashura-dish-h2").innerText = "عاشوراء";
        document.querySelector("#Ashura-dish-p").innerText = "!مزيج غني من القمح واللبن مع المكسرات وجوز الهند، بطعم شهي ومميز";
        document.querySelector("#Ashura-dish-price").innerText = "20 جنيه";

        // كرت المهلبية فرن
        document.querySelector("#Mahlabia-oven-h2").innerText = "مهلبية فرن";
        document.querySelector("#Mahlabia-oven-p").innerText = "!مهلبية كريمية بطبقة ذهبية لذيذة من الفرن بطعم شهي ومميز";
        document.querySelector("#Mahlabia-oven-price").innerText = "20 جنيه";

        // كرت مهلبية جيلي
        document.querySelector("#Mahlabia-jelly-h2").innerText = "مهلبية جيلي";
        document.querySelector("#Mahlabia-jelly-p").innerText = "!مهلبية ناعمة مع طبقة جيلي منعشة بطعم حلو ولذيذ";
        document.querySelector("#Mahlabia-jelly-choice1").innerText = "صغير: 17 جنيه";
        document.querySelector("#Mahlabia-jelly-choice2").innerText = "كبير: 20 جنيه";

        // كرت مهلبية
        document.querySelector("#Mahlabia-h2").innerText = "مهلبية";
        document.querySelector("#Mahlabia-p").innerText = "!مهلبية ناعمة وكريمية بطعم حلو خفيف";
        document.querySelector("#Mahlabia-choice1").innerText = "صغير: 17 جنيه";
        document.querySelector("#Mahlabia-choice2").innerText = "كبير: 20 جنيه";

        // كرت الجيلي
        document.querySelector("#Jelly-h2").innerText = "جيلي";
        document.querySelector("#Jelly-p").innerText = "!جيلي منعش وقوامه خفيف وناعم";
        document.querySelector("#Jelly-choice1").innerText = "صغير: 17 جنيه";
        document.querySelector("#Jelly-choice2").innerText = "كبير: 20 جنيه";

        // كرت الكاستر
        document.querySelector("#Custard-h2").innerText = "كاستر";
        document.querySelector("#Custard-p").innerText = "!كاستر ناعم وكريمي بطعم حلو خفيف ولذيذ";
        document.querySelector("#Custard-price").innerText = "17 جنيه";

        // كرت كاستر جيلي
        document.querySelector("#Custard-jelly-h2").innerText = "كاستر جيلي";
        document.querySelector("#Custard-jelly-p").innerText = "!كاستر ناعم مع طبقة جيلي منعشة بطعم حلو ولذيذ";
        document.querySelector("#Custard-jelly-choice1").innerText = "صغير: 17 جنيه";
        document.querySelector("#Custard-jelly-choice2").innerText = "كبير: 20 جنيه";


        currentLang = "ar";
    }
}
