// Navbar 置頂
var fixedTop = $('nav').offset().top;

$(window).scroll(function() {

    var currentScroll = $(window).scrollTop();

    if (currentScroll >= fixedTop) {
        $('nav').css({
            position: 'fixed',
            top: '0',
            left: '0'
        });
    } else {
        $('nav').css({
            position: 'static'
        });
    }

});

// 頁籤切換
$('nav>ul>li').click(function () {
    $('nav>ul>li').removeClass('active');
    $(this).addClass('active');

    $('section').removeClass('active');
    var container = $(this).attr('name');
    $('#'+container).addClass('active');
    $(document).scrollTop(0);
})

// 篩選器
$('.filter').click(function () {
    $('.filter__popUp').css({ display: 'block' });
    $('.filter__popUp--container').addClass('active');
    $('body').css({ overflow: 'hidden' });
})

$('.black-wall').click(function () {
    $('.filter__popUp').css({ display: 'none' });
    $('body').css({ overflow: 'auto' });
})

$('.group').find('button').click(function () {
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
})

$('#btn--reset').click(function () {
    $('.filter__popUp').css({ display: 'none' });
    $('body').css({ overflow: 'auto' });
})

$('#btn--confirm').click(function () {
    $('.filter__popUp').css({ display: 'none' });
    $('body').css({ overflow: 'auto' });
})


// 公版 loading
/*
var jQfn = function (){
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('dot-loading'),
        // chrome 禁止直接讀取 local json，這邊要用 local server 才看的到
        path: './js/json/dot-loading.json',
        renderer: 'svg',
        loop: true,
        autoplay: true,
        name: "Demo Animation",
    });
}
*/