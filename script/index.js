//-------------------Свернуть развернуть ASIDE, закрыть sub-menu


$('.aside_logo_close').click( function(){
    if($('.aside_submenu').hasClass('sub-open')){
        $('.aside_submenu').removeClass('sub-open');
        $('.aside_submenu').hide(300);
        if ($('#aside').hasClass('aside-close')) {        
            setTimeout(function() { 
                asideOpen();
            }, 300);         
        } else {
            submenuCloseClickMain();
            setTimeout(function() { 
                asideClose();
            }, 300); 
        }
    } else {
        if ($('#aside').hasClass('aside-close')) {   
                asideOpen();
        } else {
                asideClose();
        }
    }
});


function asideClose() {
    $('.aside_logo_link img').hide(300);
    $('.aside_menu-link span').hide(300);
    $('#aside').animate({width: '80px'}, 300);
    $('.aside_logo').animate({'margin-left': '32px'}, 300);
    $('#aside').addClass('aside-close');
}

function asideOpen() {
    $('.aside_logo_link img').show(300);
    $('.aside_menu-link span').show(300);
    $('#aside').animate({width: '256px'}, 300);
    $('.aside_logo').animate({'margin-left': '40px'}, 300);
    $('#aside').removeClass('aside-close');
}

//-------------------Открыть закрыть подменю NAV

$('.aside_submenu-btn').each(function(){
    $(this).click(function(){
        let indSubmenuBtn = $('.aside_submenu-btn').index(this);

        if ($('.aside_submenu').eq(indSubmenuBtn).hasClass('sub-open')) {            
            $('.aside_submenu').eq(indSubmenuBtn).removeClass('sub-open');
            $('.aside_submenu').eq(indSubmenuBtn).hide(300);
        } else {          
            $('.aside_submenu').hide(300);                     
            $('.aside_submenu').removeClass('sub-open');
            $('.aside_submenu').eq(indSubmenuBtn).addClass('sub-open');
            $('.aside_submenu').eq(indSubmenuBtn).show(300);            
        }
    });
});

//---Закрыть подменю по клику вне, при закрытом ASIDE

function submenuCloseClickMain() {
    $('main').click(function(){
        if ($('#aside').hasClass('aside-close')) {      
            $('.aside_submenu').removeClass('sub-open');
            $('.aside_submenu').hide(300);
        } else {
            return
        }
    })
}


//------------------Открыть закрыть выбор способа загрузки, заменить текст

$('.form_cotrols-load-select').click(function(){
    $('.form_cotrols-load-options').slideToggle();

    $('.form_cotrols-load-options-elem').each(function(){
        $(this).click(function(){
            $('.form_cotrols-load-select').text($(this).text());
            $('.form_cotrols-load-options').slideUp();
        });
    });
});

//------------------Выбрать все пункты таблицы

$('.title-equipment-check').click(function(){
    if($('.title-equipment-check').hasClass('check-box-activ')){
        $('.title-equipment-check').removeClass('check-box-activ');
        $('.equipment-check').removeClass('check-box-activ');
    } else {
        $('.title-equipment-check').addClass('check-box-activ');
        $('.equipment-check').addClass('check-box-activ');
    }
})

//------------------Выбрать один пункт таблицы

$('.equipment-check').each(function(){
    $(this).click(function(){
        let indCheck = $('.equipment-check').index(this);
        $('.equipment-check').eq(indCheck).toggleClass('check-box-activ');
    });
});

//---------------------------Клик на строку таблицы

$('.equipment_table-tbody-tr').each(function(){
    $(this).click(function(){
        
        let indTr = $('.equipment_table-tbody-tr').index(this);

       if ($('.equipment_table-tbody-tr').eq(indTr).hasClass('equipment_table-tbody-tr-activ')) {
         $('.equipment_table-tbody-tr').eq(indTr).removeClass('equipment_table-tbody-tr-activ');
       } else {
        $('.equipment_table-tbody-tr').removeClass('equipment_table-tbody-tr-activ');
        $('.equipment_table-tbody-tr').eq(indTr).addClass('equipment_table-tbody-tr-activ');        
       }
    });
});

//------------------Открыть закрыть список фильтров

$('.form_cotrols-filter-select').click(function(){

    $('.popap_filter-wrap').toggle(300).toggleClass('filter-activ');

    if ($('.popap_filter-wrap').hasClass('filter-activ')) {
        $(document).click(function (e){
            if (!$('.popap_filter-wrap').is(e.target) && $('.popap_filter-wrap').has(e.target).length === 0 && !$('.form_cotrols-filter-select').is(e.target) && $('.form_cotrols-filter-select').has(e.target).length === 0) { 
                $('.popap_filter-wrap').hide(300).removeClass('filter-activ')
            }
        });
    } 
});

$('.popap_filter-apply-btn').click(function(){
    $('.popap_filter-wrap').hide(300).removeClass('filter-activ');
});

//----------------------Открыть подфильтр в попапе фильтров

$('.popap_filter_option-elem-btn').each(function(){
    $(this).click(function(){

        let indSubFilter = $('.popap_filter_option-elem-btn').index(this);
        $('.popap_filter_option-elem-search-wrap').eq(indSubFilter).toggleClass('sub-filter-activ').slideToggle()

        // let indSubFilter = $('.popap_filter_option-elem-btn').index(this);
        // if ($('.popap_filter_option-elem').hasClass('sub-filter-activ')) {
        //     $(document).click(function (e){
        //         if (!$('.popap_filter_option-elem').is(e.target) && $('.popap_filter_option-elem').has(e.target).length === 0) { 
        //             $('.popap_filter_option-elem-search-wrap').slideUp();
        //             $('.popap_filter_option-elem').removeClass('sub-filter-activ');
        //         }
        //     });
        // } else {
        //     $('.popap_filter_option-elem-search-wrap').eq(indSubFilter).slideDown();
        //     $('.popap_filter_option-elem').eq(indSubFilter).addClass('sub-filter-activ')
        // }
    });
});



//------------------Выбрать один пункт субфильтра

$('.popap_filter_option-elem-search').each(function(){
    $(this).click(function(){
        let indCheck = $('.popap_filter_option-elem-search').index(this);
        $('.popap_filter_option-elem-search-btn').eq(indCheck).toggleClass('check-box-activ');
    });
});

//------------------Сбросить все пункты субфильтра

$('.popap_filter-reset-btn').click(function(){
    $('.popap_filter_option-elem-search-btn').removeClass('check-box-activ');
})

//------------------Выбрать один пункт в списке поиска субфильтра

$('.popap_filter_list-elem').each(function(){
    $(this).click(function(){
        let indCheck = $('.popap_filter_list-elem').index(this);
        $('.popap_filter_list-elem-btn').eq(indCheck).toggleClass('check-box-activ');
    });
});

//--------------------------------Открыть закрыть попапы комментариев

$('.popap_comment-btn').click(function(){
    $('.popap_comment-wrap').fadeOut()
    $('.popap_comment-not-past').fadeOut();
    $('.popap_comment-past').fadeOut();
})

$('.comment-chat-btn-empty').click(function(){
    $('.popap_comment-wrap').fadeIn();
    $('.popap_comment-not-past').fadeIn();
})
$('.comment-chat-btn-viewed').click(function(){
    $('.popap_comment-wrap').fadeIn();
    $('.popap_comment-past').fadeIn();
})
$('.comment-chat-btn-unseen').click(function(){
    $('.popap_comment-wrap').fadeIn();
    $('.popap_comment-past').fadeIn();
})


//--------------------------------Открыть закрыть попап удаления элемента


$('.popap-delete-btn').click(function(){
    $('.popap-delete-wrap').fadeOut()
})

$('.comment-setting-trash-btn').click(function(){
    $('.popap-delete-wrap').fadeIn()
})

