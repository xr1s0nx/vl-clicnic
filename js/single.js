$(document).ready(function () {
    AOS.init({
        offset: -500, // offset (in px) from the original trigger point
        duration: 400, // values from 0 to 3000, with step 50ms
        anchorPlacement: 'top-bottom',
    });

    // window.onload = function () {
    //     document.querySelector(".preloader").classList.add("active");
    // };

    /* burger */
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
        // on: {
        //     init: function () {
        //         progress4.classList.remove("animate");
        //         progress4.classList.add("animate");
        //     },
        //     slideChangeTransitionStart: function () {
        //         progress4.classList.remove("animate");
        //     },
        //     slideChangeTransitionEnd: function () {
        //         progress4.classList.add("animate");
        //     },
        // },
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
        // on: {
        //     init: function () {
        //         progress5.classList.remove("animate");
        //         progress5.classList.add("animate");
        //     },
        //     slideChangeTransitionStart: function () {
        //         progress5.classList.remove("animate");
        //     },
        //     slideChangeTransitionEnd: function () {
        //         progress5.classList.add("animate");
        //     },
        // },
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


    const leaf = document.getElementById("leaf_1");
    const leaf2 = document.getElementById("leaf_2");
    const leaf3 = document.getElementById("leaf_3");

    const recom_3 = document.getElementById("recom_3");
    const recom_4 = document.getElementById("recom_4");

    const footer_1 = document.getElementById("footer_1");
    const footer_2 = document.getElementById("footer_2");

    window.addEventListener("scroll", function () {
        let value = window.scrollY;
        leaf.style.top = 85 + value * -0.02 + "%";
        leaf2.style.top = 87 + value * -0.02 + "%";
        leaf3.style.top = 110 + value * -0.02 + "%";

        recom_3.style.left = 122 + value * -0.02 + "%";
        recom_4.style.right = 122 + value * -0.02 + "%";

        footer_1.style.top = 152 + value * -0.02 + "%";
        footer_2.style.top = 176 + value * -0.02 + "%";
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
    popUpNews = document.querySelector('.popUpNews');

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

    function openPopUp2() {
        popUp1.classList.remove('active');
        popUp2.classList.add('active');
        let body = document.querySelector('body');
        let popUpH = popUp2.clientHeight;
        body.style.height = popUpH + 'px';
    }

    function closePopUp2() {
        popUp2.classList.remove('active');
        popUp1.classList.add('active');
        let body = document.querySelector('body');

        body.style.height = 'auto';
    }

    function openPopUp3() {
        popUp2.classList.remove('active');
        popUp3.classList.add('active');
        let body = document.querySelector('body');
        let popUpH = popUp3.clientHeight;
        body.style.height = popUpH + 'px';
    }

    function closePopUp3() {
        popUp2.classList.add('active');
        popUp3.classList.remove('active');
        let body = document.querySelector('body');

        body.style.height = 'auto';

    }

    function openPopUp4() {
        popUp3.classList.remove('active');
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

    function openForm() {
        form.classList.add('active');
    }

    function closeForm() {
        form.classList.remove('active');
    }
