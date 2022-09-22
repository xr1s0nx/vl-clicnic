$(document).ready(function () {
    AOS.init({
        offset: -500, // offset (in px) from the original trigger point
        duration: 400, // values from 0 to 3000, with step 50ms
        anchorPlacement: 'top-bottom',
    });

    window.onload = function () {
        document.querySelector(".preloader_bg").classList.add("active");
    };

    let navBtns = document.querySelectorAll('.navbtnToactive');
    navBtns.forEach((item) => {
        item.addEventListener('click', (e) => {
            navBtns.forEach((item) => { item.classList.remove('active') })
            e.currentTarget.classList.add('active')
        })
    })

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
    const progress7 = document.querySelector(".progress7");

    var bg__slider = new Swiper(".bg-slider", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.header_next',
            prevEl: '.header_prev',
        },
    });



    var header_slider = new Swiper(".header_slider", {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        pagination: {
            el: ".swiper-pagination-header",
            type: "fraction",
        },
        navigation: {
            nextEl: '.header_next',
            prevEl: '.header_prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            init: function () {
                progress7.classList.remove("animate");
                progress7.classList.add("animate");
            },
            slideChangeTransitionStart: function () {
                progress7.classList.remove("animate");
            },
            slideChangeTransitionEnd: function () {
                progress7.classList.add("animate");
            },
        },
        control: bg__slider
    });
    var product_slider = new Swiper(".gallery-swiper-new", {
        slidesPerView: 1,
        allowTouchMove: true,
        loop: true,
        autoplay: false,
        centeredSlides: true,
        spaceBetween: 100,
        effect: "fade",
        navigation: {
            nextEl: ".product_next",
            prevEl: ".product_prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
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

let form = document.querySelector('.form-popUp');
popUp1 = document.querySelector('.popUp1');
popUp2 = document.querySelector('.popUp2');
popUp3 = document.querySelector('.popUp3');
popUp4 = document.querySelector('.popUp4');
spec1 = document.querySelector('.spec1');
spec2 = document.querySelector('.spec2');
spec3 = document.querySelector('.spec3');
content1 = document.querySelector('.content1');
content2 = document.querySelector('.content2');
content3 = document.querySelector('.content3');
popUpNews = document.querySelector('.popUpNews');

let formCont = document.querySelector('.zap');
formCont.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.remove('active');
    colItems.forEach((col) => {
        col.classList.remove('active');
    })
    openPopUp4();
})

function openNews() {
    popUpNews.classList.add('active');
}

function closeNews() {
    popUpNews.classList.remove('active');
}

function openPopUp1() {
    popUp1.classList.add('active');
    let body = document.querySelector('body');
    let popUpH = popUp1.clientHeight;
    body.style.height = popUpH + 'px';
}

function closePopUp1() {
    popUp1.classList.remove('active');
    let body = document.querySelector('body');

    body.style.height = 'auto';
}

let img = document.querySelector('.popUp2-img')

function openPopUp2() {
    popUp1.classList.remove('active');
    popUp2.classList.add('active');
    let body = document.querySelector('body');
    let popUpH = popUp2.clientHeight;
    body.style.height = popUpH + 'px';
    const ImgOp = () => {
        img.classList.add('active');
    }

    setTimeout(ImgOp, 1000);
}

function closePopUp2() {
    popUp2.classList.remove('active');
    popUp1.classList.add('active');
    let body = document.querySelector('body');
    openPopUp1();
    body.style.height = 'auto';
    img.classList.remove('active');
}

function openSpec(param) {
    if (param == 1) {
        content1.style.display = 'flex';
        content2.style.display = 'none';
        content3.style.display = 'none';
    } else if (param == 2) {
        content1.style.display = 'none';
        content2.style.display = 'flex';
        content3.style.display = 'none';
    } else if (param == 3) {
        content1.style.display = 'none';
        content2.style.display = 'none';
        content3.style.display = 'flex';
    }
    popUp2.classList.remove('active');
    img.classList.remove('active');
    spec1.classList.add('active');
    let body = document.querySelector('body');
    let popUpH = spec1.clientHeight;
    body.style.height = popUpH + 'px';
    popUp2.classList.remove('active');

}

function changeSpec(param) {
    if (param == 1) {
        content1.style.display = 'flex';
        content2.style.display = 'none';
        content3.style.display = 'none';
    } else if (param == 2) {
        content1.style.display = 'none';
        content2.style.display = 'flex';
        content3.style.display = 'none';
    } else if (param == 3) {
        content1.style.display = 'none';
        content2.style.display = 'none';
        content3.style.display = 'flex';
    }
    colItems.forEach((col) => {
        col.classList.remove('active');
    })
}

function closePopUp3() {
    spec1.classList.remove('active');
    spec2.classList.remove('active');
    spec3.classList.remove('active');
    let body = document.querySelector('body');
    body.style.height = 'auto';
    colItems.forEach((col) => {
        col.classList.remove('active');
    })
    openPopUp2();
}

function openPopUp4() {
    popUp1.classList.remove('active');
    popUp4.classList.add('active');
    let body = document.querySelector('body');
    let popUpH = popUp4.clientHeight;
    body.style.height = popUpH + 'px';

}

function closePopUp4() {
    popUp4.classList.remove('active');
    let body = document.querySelector('body');

    body.style.height = 'auto';
}

let colItems = document.querySelectorAll('.col__item');
colItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('current')) {
            console.log('current already!')
        } else {
            colItems.forEach((col) => {
                col.classList.remove('active');
            })
            e.currentTarget.classList.add('active');
        }
    })
})

function openForm() {



    form.classList.add('active');


}

function closeForm() {
    form.classList.remove('active');
}







