/**
 Company : Bensiva
 File    : custom.js
 Version : 1.0
 **/



/*************------------------------------
 
 
 JS INDEX
 ===================
 
 01. Counter
 02. Menu
 03. Scroll Top
 04. OWL SLider
 05. Header Sticky
 
 
 ------------------------------*************/


(function ($) {
    $(document).on('ready', function () {
        "use strict";


        /****---- Header Sticky Start ----****/

        $(window).on("scroll", function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {
                $("header").addClass("sticky");
            } else {
                $("header").removeClass("sticky");
            }
        });

        /****---- Header Sticky End ----****/



        /*------- OWL SLIDER START -------*/

        /****---- service Slider Start ----****/

        $('.service-slider').owlCarousel({
            loop: true,
            margin: 25,
            dots: false,
            autoplay: true,
            responsive: {

                0: {
                    items: 1
                },

                640: {
                    items: 2
                },

                1280: {
                    items: 3
                },

                1400: {
                    items: 4
                }
            }
        });

        /****---- service Slider End ----****/


        /****---- Portfolio Slider Start ----****/

        $('.portfolio-slider').owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            responsive: {

                0: {
                    items: 1
                },

                568: {
                    items: 1
                },

                767: {
                    items: 2
                },

                990: {
                    items: 3
                },

                1280: {
                    items: 3,
                    margin: 20
                },
                1400: {
                    items: 4,
                    margin: 50
                }
            }
        });

        /****---- Portfolio Slider End ----****/

        /****---- Blog Slider Start ----****/

        $('.blog-slider').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            responsive: {

                0: {
                    items: 1
                },

                480: {
                    items: 1
                },

                640: {
                    items: 1
                },

                990: {
                    items: 2
                },

                1140: {
                    items: 2
                }
            }
        });

        /****---- Blog Slider End ----****/

        /****---- Testimonials Slider Start ----****/


        $('.testimonials-slider').owlCarousel({
            loop: true,
            margin: 35,
            autoplay: true,
            responsive: {

                0: {
                    items: 1
                },

                480: {
                    items: 1
                },

                640: {
                    items: 1
                },

                990: {
                    items: 1
                },

                1140: {
                    items: 2
                }
            }
        });

        /****---- Testimonials Slider Start ----****/

        /****---- Blog 2 Slider Start ----****/

        $('.blog-slider-2').owlCarousel({
            loop: true,
            margin: 50,
            autoplay: true,
            responsive: {

                0: {
                    items: 1
                },

                480: {
                    items: 1
                },

                640: {
                    items: 2
                },

                990: {
                    items: 3
                },

                1140: {
                    items: 3
                },
                1400: {
                    items: 4
                }

            }
        });

        /****---- Blog 2 Slider End ----****/

        /****---- Client Slider Start ----****/

        $('.client').owlCarousel({
            loop: true,
            margin: 50,
            dots: false,
            autoplay: true,
            responsive: {

                0: {
                    items: 2
                },

                480: {
                    items: 2
                },

                640: {
                    items: 3
                },

                990: {
                    items: 4
                },

                1140: {
                    items: 5
                },

                1400: {
                    items: 6
                }

            }
        });

        /****---- Client Slider End ----****/

        /****---- Page Main Slider Start ----****/

        $('.owl-main').owlCarousel({
            loop: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            autoplayTimeout: 7000,
            autoplayHoverPause: true,
            responsive: {
                320: {
                    items: 1
                }
                ,
                1920: {
                    items: 1
                }
            }
        });


        /****---- Page Main Slider End ----****/


        /*------- OWL SLIDER END -------*/


        /****---- Counter Start ----****/

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        /****---- Counter End ----****/



        /****---- Scroll Top Start ----****/

        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 100) {
                $('#scroll').fadeIn();
            } else {
                $('#scroll').fadeOut();
            }
        });
        $('#scroll').on("click", function () {
            $("html, body").animate({scrollTop: 0}, 600);
            return false;
        });

        /****---- Scroll Top End ----****/


        /****---- Menu Start ----****/


        /*--------------- SMARTMENU ---------------*/

        $('#main-menu').smartmenus({
            mainMenuSubOffsetX: -1,
            mainMenuSubOffsetY: 4,
            subMenusSubOffsetX: 6,
            subMenusSubOffsetY: -6
        });

        /*--------------- SMARTMENUS MOBILE MENU TOGGLE BUTTON ---------------*/

        var $mainMenuState = $('#main-menu-state');
        if ($mainMenuState.length) {
            // animate mobile menu
            $mainMenuState.on('change', function () {
                var $menu = $('#main-menu');
                if (this.checked) {
                    $menu.hide().slideDown(250, function () {
                        $menu.css('display', '');
                    });
                } else {
                    $menu.show().slideUp(250, function () {
                        $menu.css('display', '');
                    });
                }
            });
            // hide mobile menu beforeunload
            $(window).on('bind', 'beforeunload unload', function () {
                if ($mainMenuState[0].checked) {
                    $mainMenuState[0].on("click");
                }
            });
        }
        $(function () {
            // use the whole parent item as sub menu toggle button
            $('#main-menu').on('bind', 'click.smapi', function (e, item) {
                var obj = $(this).data('smartmenus');
                if (obj.isCollapsible()) {
                    var $sub = $(item).dataSM('sub');
                    if ($sub && $sub.is(':visible')) {
                        obj.menuHide($sub);
                        return false;
                    }
                }
            });
        });


        /*--------------- navigation menu---------------*/

        function mainmenu() {
            if ($(window).width() < 992) {
                $('.navbar .dropdown-item').on('click', function (e) {
                    var $el = $(this).children('.dropdown-toggle');
                    var $parent = $el.offsetParent(".dropdown-menu");
                    $(this).parent("li").toggleClass('open');

                    if (!$parent.parent().hasClass('navbar-nav')) {
                        if ($parent.hasClass('show')) {
                            $parent.removeClass('show');
                            $el.next().removeClass('show');
                            $el.next().css({
                                "top": -999,
                                "left": -999
                            });
                        } else {
                            $parent.parent().find('.show').removeClass('show');
                            $parent.addClass('show');
                            $el.next().addClass('show');
                            $el.next().css({
                                "top": $el[0].offsetTop,
                                "left": $parent.outerWidth() - 4
                            });
                        }
                        e.preventDefault();
                        e.stopPropagation();
                    }
                });

                $('.navbar .dropdown').on('hidden.bs.dropdown', function () {
                    $(this).find('li.dropdown').removeClass('show open');
                    $(this).find('ul.dropdown-menu').removeClass('show open');
                });
            }
        }
        
        function facebookLikesCount(pageId,access_token)
{
//Set Url of JSON data from the facebook graph api. make sure callback is set with a '?' to overcome the cross domain problems with JSON
var url = "https://graph.facebook.com/"+pageId+"?fields=name,fan_count&access_token="+access_token+"";
//Use jQuery getJSON method to fetch the data from the url and then create our unordered list with the relevant data.

$.getJSON(url,function(json){
console.log(JSON.stringify(json));
$('#facebookfeed').html(json.fan_count);
});
}

//facebookLikesCount('coding4developers','App ID|App Secret');
    facebookLikesCount('263584901261791','EAAC6Iv6qLP8BAICYE4lK7WDt9MQUoGW42I4jrtzU4k5qRQUBOoCMBClfZCBeJdcauFZAJPr0Cwa1ZB7x6cVug4uYqBtWVaNJyCaaKZBfhDX5NvYRZBZBHuCuAolXH5z2RwNaa518RBicpSagynX9rNARPxtNF3Oo7lcf9yyp7xZBIh1YmsQuzw9OqPxUOsGNe1fbUNM0vCKEe47IUo2gXGXyIYMQ8KZBanzudeyekRmSuSTvskvsIxlHaeGDMXLwReEZD');




        /****---- Menu End ----****/
    });

    /***--From HTML--****/
 

//    // Get the modal
//    var dmodal = document.getElementById("ModalFourm");
//
//    // Get the button that opens the modal
//    var dbtn = document.getElementById("btnfourm");
//
//    // Get the <span> element that closes the modal
//    var span = document.getElementsByClassName("close ss")[0];
//
//    // When the user clicks the button, open the modal
//    dbtn.onclick = function () {
//        dmodal.style.display = "block";
//    }
//
//    // When the user clicks on <span> (x), close the modal
//    span.onclick = function () {
//        dmodal.style.display = "none";
//    }
//
//    // When the user clicks anywhere outside of the modal, close it
//    window.onclick = function (event) {
//        if (event.target == dmodal) {
//            dmodal.style.display = "none";
//        }
//    }
//    $(window).load(function () {
//        $(".trigger_popup_fricc").click(function () {
//            $('.hover_bkgr_fricc').show();
//        });
//        $('.hover_bkgr_fricc').click(function () {
//            $('.hover_bkgr_fricc').hide();
//        });
//        $('.popupCloseButton').click(function () {
//            $('.hover_bkgr_fricc').hide();
//        });
//    });
})(jQuery);

