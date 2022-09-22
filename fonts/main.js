$(document).ready(function () {
    AOS.init();

    window.onload = function () {
        document.querySelector(".preloader_bg").classList.add("active");
    };

    /* burger */
    $(".nav_toggle").on("click", function () {
        $(".nav").toggleClass("active");
        $(".shadow").toggleClass("active");
        $(".nav_toggle").toggleClass("active");
    });

    $(".shadow, .close").on("click", function () {
        $(".nav").removeClass("active");
        $(".shadow").removeClass("active");
        $(".nav_toggle").removeClass("active");
        $(".call_modal").removeClass("active");
    });

    $(".header .phone").on("click", function () {
        $(".call_modal").addClass("active");
        $(".shadow").addClass("active");
        $(".nav").removeClass("active");
        $(".nav_toggle").removeClass("active");
    });

    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();
        $(".services_info p").removeClass("active");
        let cat = $(this).data("filter");

        $(this).addClass("active");
        $("[data-cat]").each(function () {
            let workCat = $(this).data("cat");

            if (workCat != cat) {
                $(this).removeClass("active");
            } else {
                $(this).addClass("active");
            }
        });
    });
    const progress = document.querySelector(".progress");
    const progress2 = document.querySelector(".progress2");
    const progress3 = document.querySelector(".progress3");
    const progress4 = document.querySelector(".progress4");
    const progress5 = document.querySelector(".progress5");
    const progress6 = document.querySelector(".progress6");

    var bg__slider = new Swiper(".bg-slider", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.bg-button-next',
            prevEl: '.bg-button-prev',
        },
    });



    var header_slider = new Swiper(".header_slider", {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".header_next",
            prevEl: ".header_prev",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            init: function () {
                progress?.classList.remove("animate");
                progress.classList.add("animate");
            },
            slideChangeTransitionStart: function () {
                progress.classList.remove("animate");
            },
            slideChangeTransitionEnd: function () {
                progress.classList.add("animate");
            },
        },
    });
    var product_slider = new Swiper(".product_slider", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".product_next",
            prevEl: ".product_prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            init: function () {
                progress2.classList.remove("animate");
                progress2.classList.add("animate");
            },
            slideChangeTransitionStart: function () {
                progress2.classList.remove("animate");
            },
            slideChangeTransitionEnd: function () {
                progress2.classList.add("animate");
            },
        },
    });

    var certificates_slider = new Swiper(".certificates_slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".certificates_next",
            prevEl: ".certificates_prev",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            init: function () {
                progress3.classList.remove("animate");
                progress3.classList.add("animate");
            },
            slideChangeTransitionStart: function () {
                progress3.classList.remove("animate");
            },
            slideChangeTransitionEnd: function () {
                progress3.classList.add("animate");
            },
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            941: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    var specialists_slider = new Swiper(".specialists_slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".specialists_next",
            prevEl: ".specialists_prev",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            init: function () {
                progress4.classList.remove("animate");
                progress4.classList.add("animate");
            },
            slideChangeTransitionStart: function () {
                progress4.classList.remove("animate");
            },
            slideChangeTransitionEnd: function () {
                progress4.classList.add("animate");
            },
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            521: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            850: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    var recomendations_slider = new Swiper(".recomendations_slider", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".recomendations_next",
            prevEl: ".recomendations_prev",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            init: function () {
                progress5.classList.remove("animate");
                progress5.classList.add("animate");
            },
            slideChangeTransitionStart: function () {
                progress5.classList.remove("animate");
            },
            slideChangeTransitionEnd: function () {
                progress5.classList.add("animate");
            },
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            820: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1071: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });

    var gallery_slider = new Swiper(".gallery_slider", {
        slidesPerView: 5,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".gallery_slider_next",
            prevEl: ".gallery_slider_prev",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            init: function () {
                progress6.classList.remove("animate");
                progress6.classList.add("animate");
            },
            slideChangeTransitionStart: function () {
                progress6.classList.remove("animate");
            },
            slideChangeTransitionEnd: function () {
                progress6.classList.add("animate");
            },
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            640: {
                slidesPerView: 5,
            },
        },
    });

    lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
    });

    const leaf = document.getElementById("leaf_1");
    const leaf2 = document.getElementById("leaf_2");
    const leaf3 = document.getElementById("leaf_3");

    const services = document.getElementById("services_1");

    const clinic = document.getElementById("clinic_2");

    const cert_1 = document.getElementById("cert_1");
    const cert_2 = document.getElementById("cert_2");
    const cert_3 = document.getElementById("cert_3");
    const cert_4 = document.getElementById("cert_4");

    const spec_1 = document.getElementById("spec_1");

    const recom_3 = document.getElementById("recom_3");
    const recom_4 = document.getElementById("recom_4");

    const footer_1 = document.getElementById("footer_1");
    const footer_2 = document.getElementById("footer_2");

    window.addEventListener("scroll", function () {
        let value = window.scrollY;
        leaf.style.top = 85 + value * -0.02 + "%";
        leaf2.style.top = 87 + value * -0.02 + "%";
        leaf3.style.top = 110 + value * -0.02 + "%";

        services.style.right = 12 + value * -0.013 + "%";

        clinic.style.left = 52 + value * -0.013 + "%";

        cert_1.style.top = 62 + value * -0.02 + "%";
        cert_2.style.top = 62 + value * -0.02 + "%";
        cert_3.style.top = 72 + value * -0.02 + "%";
        cert_4.style.bottom = 62 + value * -0.02 + "%";

        spec_1.style.bottom = 106 + value * -0.02 + "%";

        recom_3.style.left = 122 + value * -0.02 + "%";
        recom_4.style.right = 122 + value * -0.02 + "%";

        footer_1.style.top = 152 + value * -0.02 + "%";
        footer_2.style.top = 176 + value * -0.02 + "%";
    });

    let balls = $(".preloader-ball");
    let n = balls.length;
    let d = 18;
    let t = 0.55;
    balls.each(function (i) {
        let cur = $(this);
        let a = (i / n) * (Math.PI * 2);
        cur.css({
            left: Math.cos(a) * d,
            top: Math.sin(a) * d,
            animation:
                "ball-anim " +
                t +
                "s ease-in -" +
                (t / n) * (n - i) +
                "s infinite",
        });
    });

    $(document).ready(function () {
        $("form").submit(function () {
            var e = $(this);
            return $.ajax({
                type: "POST",
                url: "mail.php",
                data: e.serialize(),
            }).done(function () {
                setTimeout(function () {
                    e.trigger("reset");
                }, 1e3);
            });
        });
    });
});
