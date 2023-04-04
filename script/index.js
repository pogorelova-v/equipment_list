//-------------------Свернуть развернуть ASIDE


$('.aside_logo_close').click( function(){
    $('.aside_submenu').hide(300);

    if ($('#aside').hasClass('aside-close')) {        
        setTimeout(function() { 
            asideOpen();
        }, 300);         
    } else {
        setTimeout(function() { 
            asideClose();
        }, 300); 
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
        $('.aside_submenu').eq(indSubmenuBtn).toggle(300);
    });
});


//------------------Открыть закрыть выбор способа загрузки

$('.form_cotrols-load-select').click(function(){
    $('.form_cotrols-load-options').slideToggle();

    $('.form_cotrols-load-options-elem').each(function(){
        $(this).click(function(){
            console.log($(this).text());
            $('.form_cotrols-load-select').text($(this).text());
            $('.form_cotrols-load-options').slideUp();
        });
    });
});

//------------------Выбрать все пункты таблицы

$('.title-equipment-check').click(function(){
    if($('.title-equipment-check').hasClass('equipment-check-activ')){
        $('.title-equipment-check').removeClass('equipment-check-activ');
        $('.equipment-check').removeClass('equipment-check-activ');
    } else {
        $('.title-equipment-check').addClass('equipment-check-activ');
        $('.equipment-check').addClass('equipment-check-activ');
    }
})

//------------------Выбрать один пункт таблицы

$('.equipment-check').each(function(){
    $(this).click(function(){
        let indCheck = $('.equipment-check').index(this);
        $('.equipment-check').eq(indCheck).toggleClass('equipment-check-activ');
    });
});