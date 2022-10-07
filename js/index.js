
$('.container-nav').on({

    mouseenter:function(){
        $('.container-nav').addClass('container-nav-animation')
        $('.section').removeClass('almostHide');
    },
    mouseleave:function(){
        $('.container-nav').removeClass('container-nav-animation');
        $('.section').addClass('almostHide');
    }
});

// var burger = $('.collapse-btn');

//     if ($('.burger-menu').is(':hidden')){
//         console.log("The menu is hidden");
//         $('.word').addClass('column');
//     }else{
//         console.log("visible");
//         $('.word').removeClass('column');
//     };


$('.collapse-btn').on('click', function(){
    $('.burger-menu').toggle('slow');
});




// if (burger.is(':hidden')){
//     console.log("The menu is visible");
// }


