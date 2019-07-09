//btn-top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#top-btn').fadeIn();
        } else {
            $('#top-btn').fadeOut();
        }
    });

    $("#top-btn").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});

function tab_nav() {
    $("ul li>a").focus(function () {
        $(this).parents("li").find("ul").show();
        console.log("nav");

    });
    $("ul li ul li:last-child>a").focusout(function () {
        $(this).parents("li").find("ul").css("display", "");
        console.log('exit-nav')
    })
};


//scroll reveal
function scrollReveal() {
    //homepage
    window.sr = ScrollReveal();
    sr.reveal('.introduction, a .fa-chevron-down', {
        duration: 2000,
        origin: 'bottom'
    });
    sr.reveal('.countries ul, .carousel.quick-facts', {
        duration: 2000,
        viewFactor: 0.2,
        origin: 'bottom'
    });

    //inside page
    sr.reveal('.countryBanner', {
        duration: 2000,
        origin: 'bottom',
    });
    sr.reveal('.country-bio', {
        duration: 2000,
        origin: 'bottom',
        delay: 500,
    });
    sr.reveal('.greetings-section, .communication-section, .rule, .negotiation-section, .business-cards-section', {
        duration: 2500,
        origin: 'bottom',
        viewFactor: 0.1,
    });
    sr.reveal('.dress-img-scroll', {
        duration: 2500,
        origin: 'bottom',
        viewFactor: 0.1,
        distance: '500px'
    });

    //sitemap
    sr.reveal('.site-map-article h1', {
        duration: 2000,
        origin: 'bottom',
        viewFactor: 0.1,
    });
    sr.reveal('.site-map-countries', {
        duration: 2000,
        origin: 'bottom',
        viewFactor: 0.1,
        delay: 200,
    });

    //contact us
    sr.reveal('.contact-us-article h1', {
        duration: 2000,
        origin: 'bottom',
        viewFactor: 0.1,
    });
    sr.reveal('.contact-us-article form, .contact-us-article p', {
        duration: 2000,
        origin: 'bottom',
        viewFactor: 0.1,
        delay: 500,
    });

    //about us
    sr.reveal('.about-us-article, .about-us-article .our-photo-wrap ', {
        duration: 2000,
        origin: 'bottom',
        viewFactor: 0.1,
    });
}

//smooth scrolling
function smootheScrolling() {

    function filterPath(string) {
        return string
            .replace(/^\//, '')
            .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
            .replace(/\/$/, '');
    }

    var locationPath = filterPath(location.pathname);
    $('a.anchor[href*="#"]').each(function () {
        var thisPath = filterPath(this.pathname) || locationPath;
        var hash = this.hash;
        if ($("#" + hash.replace(/#/, '')).length) {
            if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
                var $target = $(hash), target = this.hash;
                if (target) {
                    $(this).click(function (event) {
                        event.preventDefault();
                        $('html, body').animate({ scrollTop: $target.offset().top }, 1000, function () {
                            location.hash = target;
                            $target.focus();
                            if ($target.is(":focus")) { //checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); //Adding tabindex for elements not focusable
                                $target.focus(); //Setting focus
                            };
                        });
                    });
                }
            }
        }
    })
}


//contrast
function accessible() {

    $("a#changeContrastButton").click(function () {
        $("body").toggleClass("contrast");  // adding or removing the contrast class to the body
        saveDataToLocalStorate();
    });

    getDataFromLocalStorate(); // running a function responsible to save the body class data to the local storage (which is a memory unit that saves data between pages)
}

// This function run when the page is ready, and it retrieve the data from the local storage and set it as a class to the body
function getDataFromLocalStorate() {
    var bodyClass = localStorage.getItem("bodyClass");
    if (bodyClass) {
        $("body").attr("class", bodyClass);
    }
}

function saveDataToLocalStorate() {
    var bodyClass = $("body").attr("class");
    localStorage.setItem("bodyClass", bodyClass);
}


//links-underline
function linksUnderline() {

    $("a#changeUnderlineButton").click(function () {
        $("body").toggleClass("underline"); 
        saveDataToLocalStorate();
    });

    getDataFromLocalStorate(); 
}

function getDataFromLocalStorate() {
    var bodyClass = localStorage.getItem("bodyClass");
    if (bodyClass) {
        $("body").attr("class", bodyClass);
    }
}

function saveDataToLocalStorate() {
    var bodyClass = $("body").attr("class");
    localStorage.setItem("bodyClass", bodyClass);
}

