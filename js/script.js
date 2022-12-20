$(document).ready(function(){
  $('.tabs').tabs({
    swipeable : true,
    duration: 300,
    responsiveThreshold : 1920,
  });

  // if(Touch.apply()){

  // }else{

  // }

  //抓取當ID內容高度
  $('#tabs-swipe-demo li a').click(function(){
    var href = $(this).attr('href')
    var height = $(href).height()

    // console.log(height);

    $('.tabs-content').css('height', height);

  });

  //每秒抓取當ID內容高度
  function hello(){
    var h = $('.tab__container.active').height()
    $('.tabs-content').css('height', h);
  }

  var t1 = window.setInterval(hello,500)
  window.setInterval(t1);

  $('.scroll').click(function(){
    $('.tab__container').css('transform' , 'translateX(0px) !important')
  });


});







