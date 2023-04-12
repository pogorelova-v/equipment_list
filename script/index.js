
//-------------------Свернуть развернуть ASIDE по кнопке


$(document).on('click', '.aside_logo_close', function () {

    if ($('.aside_submenu').hasClass('sub-open')) { // если открыто подменю то закрываем и...

        $('.aside_submenu').removeClass('sub-open').hide(300);

        $('#aside').hasClass('aside-close') ?  // если aside свёрнут - разворачиваем с задержкой, чтобы подменю успело скрыться
            setTimeout(function () { asideOpen(); }, 300) :
            setTimeout(function () { asideClose(); }, 300);

    } else {   // если закрыто подменю то просто открываем/закрываем aside 
        
        $('#aside').hasClass('aside-close') ? asideOpen() : asideClose();
    }
});

function asideClose() {
    $('.aside_logo_link img').hide(300);  // спрятать логотип
    $('.aside_menu-link span').hide(300);  // скрыть названия пунктов меню
    $('#aside').animate({ width: '80px' }, 300).addClass('aside-close');   // плавно уменьшаем ширину aside и добавляем класс о закрытии
    $('.aside_logo').animate({ 'margin-left': '32px' }, 300); // уменьшаем отступ, чтобы кнопка не выезжала за меню
}

function asideOpen() {  // аналогично asideClose(), но в обратном смысле
    $('.aside_logo_link img').show(300);
    $('.aside_menu-link span').show(300);
    $('#aside').animate({ width: '256px' }, 300).removeClass('aside-close');
    $('.aside_logo').animate({ 'margin-left': '40px' }, 300);
}



//-------------------Открыть закрыть подменю NAV

$(document).on('click', '.aside_submenu-btn', function () {
    let ind = $('.aside_submenu-btn').index(this);

        if ($('.aside_submenu').eq(ind).hasClass('sub-open')) {
            $('.aside_submenu').eq(ind).removeClass('sub-open').hide(300);
        } else {
            $('.aside_submenu').hide(300).removeClass('sub-open');
            $('.aside_submenu').eq(ind).addClass('sub-open').show(300);
        }
});



//---Закрыть подменю по клику вне

// $(document).on('click', '.aside_logo_close', function () {});

// $(document).click(function (e) {
//     if (!$('aside').is(e.target) && $('aside').has(e.target).length === 0) {

//         $('.aside_submenu').removeClass('sub-open').hide(300);
//     }
// });


//------------------Открыть закрыть выбор способа загрузки, заменить текст

$(document).on('click', '.form_cotrols-load-select', function () {
    $('.form_cotrols-load-options').slideToggle();
});

$(document).on('click', '.form_cotrols-load-options-elem', function () {
            $('.form_cotrols-load-select-text').text($(this).text());
            $('.form_cotrols-load-options').slideUp();
});

$(document).click(function (e) {
    if (!$('.form_cotrols-load-options-elem').is(e.target)
        && $('.form_cotrols-load-options-elem').has(e.target).length === 0
        && !$('.form_cotrols-load-select').is(e.target)
        && $('.form_cotrols-load-select').has(e.target).length === 0) {

        $('.form_cotrols-load-options').slideUp();
    }
});


//------------------Выбрать все пункты таблицы

$(document).on('click', '.title-equipment-check', function () {
    if ($('.title-equipment-check').hasClass('check-box-activ')) {
        $('.title-equipment-check, .equipment-check').removeClass('check-box-activ');
        $('.comment_table-tbody-tr').removeClass('comment_table-tr-check');
        $('.equipment_table-tbody-tr').removeClass('equipment_table-tr-check');
    } else {
        $('.title-equipment-check, .equipment-check').addClass('check-box-activ');
        $('.comment_table-tbody-tr').addClass('comment_table-tr-check');
        $('.equipment_table-tbody-tr').addClass('equipment_table-tr-check');
    }
});

//---------------------------эффект ховера в таблице комментариев при навееднии на строку

$(document).ready(function () {
    $(".equipment_table-tbody-tr").hover(function () {
        let indTr = $('.equipment_table-tbody-tr').index(this);
        $('.comment_table-tbody-tr').eq(indTr).addClass('comment_table-tr-hover');
    }, function () {
        let indTr = $('.equipment_table-tbody-tr').index(this);
        $('.comment_table-tbody-tr').eq(indTr).removeClass('comment_table-tr-hover');
    });
});

//---------------------------Клик на строку таблицы

$(document).on('click', '.equipment_table-tbody-tr', function (e) {

    let indTr = $('.equipment_table-tbody-tr').index(this);


    if (!$('.equipment-name').is(e.target)
            && $('.equipment-name').has(e.target).length === 0) {

                $('.equipment_table-tbody-tr').eq(indTr).toggleClass('equipment_table-tr-check');
                $('.comment_table-tbody-tr').eq(indTr).toggleClass('comment_table-tr-check');
                $('.equipment-check').eq(indTr).toggleClass('check-box-activ');
    }
});

//------------------Открыть закрыть список фильтров

$(document).on('click', '.form_cotrols-filter-select', function () {

    if ($(window).width() < 1199) {
        $('.popap-overlay, .popap_filter-wrap').fadeIn().toggleClass('filter-activ');
    } else {
        $('.popap_filter-wrap').slideToggle().toggleClass('filter-activ');
    }
});

$(document).click(function (e) {
    if ($('.popap_filter-wrap').hasClass('filter-activ')) {
        if (!$('.popap_filter-wrap').is(e.target)
            && $('.popap_filter-wrap').has(e.target).length === 0
            && !$('.form_cotrols-filter-select').is(e.target)
            && $('.form_cotrols-filter-select').has(e.target).length === 0) {
                if ($(window).width() < 1199) {
                    $('.popap-overlay').fadeOut().toggleClass('filter-activ');
                    $('.popap_filter-wrap').fadeOut().toggleClass('filter-activ');
                } else {
                    $('.popap_filter-wrap').slideUp().removeClass('filter-activ');
                }
        }
    }
});

$(document).on('click', '.popap_filter-apply-btn', function () {
    $('.popap_filter_option-elem-search-wrap').removeClass('sub-filter-activ').slideUp()
    if ($(window).width() < 1199) {
        $('.popap-overlay, .popap_filter-wrap').fadeOut().toggleClass('filter-activ');
    } else {
        $('.popap_filter-wrap').slideUp().removeClass('filter-activ');
    }
});

//----------------------Открыть закрыть подфильтр в попапе фильтров

$(document).on('click', '.popap_filter_option-elem-btn', function (e) {
    let ind = $('.popap_filter_option-elem-btn').index(this);

    if($('.popap_filter_option-elem-search-wrap').eq(ind).hasClass('sub-filter-activ')){
        $('.popap_filter_option-elem-search-wrap').removeClass('sub-filter-activ').slideUp()
    } else {
        $('.popap_filter_option-elem-search-wrap').removeClass('sub-filter-activ').slideUp()
        $('.popap_filter_option-elem-search-wrap').eq(ind).addClass('sub-filter-activ').slideDown()
    }

});


$(document).on('click', function (e) {

    if ($('.popap_filter_option-elem-search-wrap').hasClass('sub-filter-activ')) {
        if (!$('.popap_filter-type').is(e.target)
            && $('.popap_filter-type').has(e.target).length === 0) {
            
            $('.popap_filter_option-elem-search-wrap').removeClass('sub-filter-activ').slideUp()
        }
    }

});


//------------------Выбрать один пункт субфильтра

$(document).on('click', '.aside_logo_close', function () {});

$('.popap_filter_option-elem-search').each(function () {
    $(this).click(function () {
        let indCheck = $('.popap_filter_option-elem-search').index(this);
        $('.popap_filter_option-elem-search-btn').eq(indCheck).toggleClass('check-box-activ');
    });
});

//------------------Сбросить все пункты субфильтра

$(document).on('click', '.popap_filter-reset-btn', function () {
    $('.popap_filter_option-elem-search-btn').removeClass('check-box-activ');
});

//------------------Выбрать один пункт в списке поиска субфильтра

$(document).on('click', '.popap_filter_list-elem', function () {
    
    let ind = $('.popap_filter_list-elem').index(this);
    $('.popap_filter_list-elem-btn').eq(ind).toggleClass('check-box-activ');
});

//--------------------------------Открыть закрыть попапы комментариев

$(document).on('click', '.comment-chat-btn', function (e) {
    $('.popap_comment-wrap').fadeIn();
    $(e.target).hasClass('comment-chat-btn-empty') ? $('.popap_comment-not-past').fadeIn() : $('.popap_comment-past').fadeIn();  
});
$(document).on('click', '.popap_comment-btn', function () {
    $('.popap_comment-wrap, .popap_comment-not-past, .popap_comment-past').fadeOut()
})

//--------------------------------Открыть закрыть попап удаления элемента

$(document).on('click', '.popap-delete-btn', function () {
    $('.popap-delete-wrap').fadeOut()
});
$(document).on('click', '.comment-setting-trash-btn', function () {
    $('.popap-delete-wrap').fadeIn()
});

//------------------Открыть закрыть выбор количества отображаемых результатов в таблице, заменить текст

$(document).on('click', '.control_showing-opt-activ', function () {
    $('.control_showing-opt-dis').slideToggle();
});

$(document).on('click', '.control_showing-opt', function () {
    $('.control_showing-opt-activ').text($(this).text());
    $('.control_showing-opt-dis').slideUp();
});

//------------------Выделить все неподтвержденные

$(document).on('click', '.all-unconfirme-mark', function () {
    $('.equipment-check').removeClass('check-box-activ');    
    $('.equipment_table-tbody-tr').removeClass('equipment_table-tr-check');
    $('.comment-settings').each(function () {
        if ($(this).hasClass('activ-config')) {
            let indConf = $('.comment-settings').index(this);
            $('.equipment-check').eq(indConf).addClass('check-box-activ');
            $('.equipment_table-tbody-tr').eq(indConf).addClass('equipment_table-tr-check');
        };
    });
});

//----------------------Открыть закрыть меню 1199px

$(document).on('click', '.aside_burg-btn', function () {
    $('.aside_menu-nav').slideToggle().toggleClass('activ');
    if ($('.aside_menu-nav').hasClass('activ')) {
        asideBurgClose()
    } else {
        asideBurgOpen()
    }
});

$(document).on('click', '.aside_menu-nav', function (e) {
        if (!$('.aside_menu').is(e.target)
            && $('.aside_menu').has(e.target).length === 0) {
                asideBurgClose()
                $('.aside_menu-nav').slideToggle().toggleClass('activ');
        }
});

function asideBurgClose(){
    $('.aside_burg-btn-open').fadeOut();
    $('.aside_burg-btn-close').fadeIn();
};

function asideBurgOpen(){
    $('.aside_burg-btn-close').fadeOut();
    $('.aside_burg-btn-open').fadeIn();
};

//закрыть попапы по клику на оболочку

$(document).on('click', '.popap-overlay--js, .aside_menu-nav ', function () {
    $('.popap-overlay--js, .popap-open').fadeOut();
});

