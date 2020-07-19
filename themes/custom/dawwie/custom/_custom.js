/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

    'use strict';

    var currentLang = $('html').attr('lang');

    if ($('div#edit-field-user-avatar').length) {
        $('div#edit-field-user-avatar .form-check:first-child').hide();
        $('div#edit-field-user-avatar .form-check:nth-child(2) label').html("<img src='/themes/custom/dawwie/img/man-avatar.png' />")
        $('div#edit-field-user-avatar .form-check:nth-child(3) label').html("<img src='/themes/custom/dawwie/img/women-avatar.png' />")
        $("div#edit-field-user-avatar input").change(function () {
            if (this.checked) {
                $("div#edit-field-user-avatar input").parent().removeClass('user-avatar-checked');
                $(this).parent().addClass("user-avatar-checked");
            }
        });
    }

    if ($('.path-frontpage').length) {
        $('.js-preloader').preloadinator({
            minTime: 2000
        });
    }

    if ($('.corona').length) {
        $('header').addClass('top-50');
        $('.corona .close').click(function () {
            $('.corona').hide();
            $('header').removeClass('top-50');
        });
    }

    if ($('.page-user-login .highlighted .alert').length) {
        $('.form_area').addClass('add-mragin')
    }



    if ($('.page-user-login').length) {
        var loginLabel = $('.user-login-form .form-item-name label').text(),
                passLabel = $('.user-login-form .form-item-pass label').text();
        $('.user-login-form .form-item-name input').attr("placeholder", loginLabel);
        $('.user-login-form .form-item-pass input').attr("placeholder", passLabel);
        $('.user-login-form .form-item-name label, .user-login-form .form-item-pass label').hide();
    }
    if ($('.page-user-register').length || $('.front-reg-form').length) {
        if (currentLang == 'en') {
            $('select#edit-field-user-governorate > option:first-child').text('- Choose Governorate -');
            $('select#edit-field-user-gender > option:first-child').text('- Choose Gender -');
        } else {

            $('select#edit-field-user-governorate > option:first-child').text('- اختر المحافظة -');
            $('select#edit-field-user-gender > option:first-child').text('- اختر النوع -');
        }
    }


    //Home page servies
    $('.hp-service-item').hover(function () {
        var bgColor = $(this).attr('bg-color');
        $(this).css("background-color", bgColor);
    }, function () {
        $('.hp-service-item').css("background-color", 'transparent');
    });

    $('.slideshow-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        autoplayHoverPause: false,
        autoplay: true,
        smartSpeed: 400,
        mouseDrag: false,
        autoHeight: true,
        items: 1,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
    });


    $(document).ready(function () {
        if ($('.popup-youtube').length) {
            $('.popup-youtube').magnificPopup({
                type: 'iframe'
            });
        }
        if ($('#dg-container').length) {
            $('#dg-container').gallery({
                autoplay: true
            });
        }

        $("a[href$='#popup1'], a[href$='#popup3']").click(function () {
            $('#ourPartners').modal('show');
        });



    });

    $(window).bind('load', function ()
    {
        setTimeout(function () {
            $(".imgs-shuffle-container").css("padding", "0");
        }, 1000);
    });
    if ($('#ri-grid').length) {
        $('#ri-grid').gridrotator({
            rows: 2,
            columns: 5,
            animSpeed: 1000,
            interval: 1000,
            animType: 'fadeInOut',
            step: 1,
            w320: {
                rows: 3,
                columns: 4
            },
            w240: {
                rows: 3,
                columns: 4
            }
        });
    }


//    $('.sadadawi-slider-item, .vslider-item').unwrap().unwrap();

    //course survey pre/post
    if ($('form#webform-submission-course-survey-add-form').length) {

        if (getUrlParameter("status") !== undefined) {

            var status = getUrlParameter("status");
            $('.form-item-status select').val(status);

            //Set default values from current user info
            if (status == 'pre') {

                var cUserGender = $('.c-user-info .user-gender').text(),
                        cUserGovern = $('.c-user-info .user-govern').text();
                $("select#edit-gender").val(cUserGender);
                $("select#edit-govern").val(cUserGovern);
                $('form#webform-submission-course-survey-add-form').addClass('course-form-pre');
            }
            if (status == 'post') {
                $('form#webform-submission-course-survey-add-form').addClass('course-form-post');
            }
        }
    }
    //course certificate
    if ($('.CERT').length) {
        if (getUrlParameter("uname") !== undefined) {
            var uname = getUrlParameter("uname");
            $('.cert-p').text(uname);

        }

        $('.print-certificate').click(function () {
            window.print();
            return false;
        });

    }


//Submit story form
    $('.add-new-story-form').on('submit', function (event) {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/ajax/add_story',
            data: $('.add-new-story-form').serialize(),
            success: function (data) {
                $(".form_area").html("<h3 class='add-story-thanks'>شكراُ لك، تم تسجيل قصتك بنجاح.<h3>");
            }
        });
    });

    if ($('.user-logged-in').length == 0) {
//        $(".main-menu ul.nav  li:first a, .navik-menu ul.nav  li:first a, .menu--useful-links ul li:nth-child(2) a").attr('href', '/user/login')
    }
    if ($('.course-cutom-reg-link').length) {
        if ($('.user-logged-in').length) {
            $(".course-cutom-reg-link").attr('href', '/'+currentLang +'/form/course-survey?status=pre&destination=/OnlineTRaining/'+currentLang+'story_html5.html')
        }
    }
    if (getUrlParameter("openform") !== undefined) {
        var OpenForm = getUrlParameter("openform");
        if (OpenForm == 'true' && $('.user-logged-in').length) {
            $("#ModalFourm").css("display", "block")
        }
        if (OpenForm == 'true' && $('.user-login-form').length) {
            var pageDestination = getUrlParameter("destination");
            $("a#myBtn-reg2").attr("href", "/user/register?destination=" + pageDestination + "&openform=true")
        }
    }
    //Modal story
    $(".main-menu ul.nav  li:first a,\n\
      .navik-menu ul.nav  li:first a,\n\
       .menu--useful-links ul li:nth-child(2),\n\
       .page-node-13 button#myBtn").click(function () {
        $("#ModalFourm").css("display", "block")
        return false;
    });

    // Get the modal
    var dmodal = document.getElementById("ModalFourm");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close ss")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        dmodal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == dmodal) {
            dmodal.style.display = "none";
        }
    }




    Drupal.behaviors.dawwie = {
        attach: function (context, settings) {

        }
    };

    /**
     * Get URL parameter value from the URL
     * @param {type} sParam
     * @returns {Boolean}
     */
    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    }
})(jQuery, Drupal);
