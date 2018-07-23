$(function () {
  // banner切换
  var unslider06 = $('#b06').unslider({
      speed: 1,
      delay: 2000,
    }),
    data06 = unslider06.data('unslider');

    // 讲堂切换
    $(".slider-box").slide({mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,});
  // var unslider04 = $('.slider').unslider({
  //     speed:500,
  //     delay:1000
  // }),
  // data04 = unslider04.data('unslider');

  //   $('.unslider-arrow').click(function() {
  //     var fn = this.className.split(' ')[1];
  //     data04[fn]();
  // });


  // 图片切换
  function picChange(el) {
    el.mouseenter(function () {
      var _index = $(this).index();
      $(this).parent().prev().children().stop(true).animate({
        left: -300 * _index + "px"
      }, 400);
    })
  };
  var pifuke = $(".btn-list li");
  var imgs = $(".imgs .imgs-item");
  picChange(pifuke);
  picChange(imgs);

  // 导航	
  $(".navbar-list .team").hover(function () {
    $(".item-navbar").addClass("dn");
    $(".icon-bg-weizi").addClass("tf");
  }, function () {
    $(".item-navbar").removeClass("dn");
    $(".icon-bg-weizi").removeClass("tf");
  });

  // 导航下滑
  $(".dpt-item").click(function () {
    $(".dpt-slide-list").slideToggle("slow");
    if ($(".icon-bg").hasClass("active")) {
      $(".icon-bg").removeClass("active");
    } else {
      $(".icon-bg").addClass("active");
    }
  });

  //回到顶部
  $(".s3").click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 200);
  });

  // 名医团队
  $(".team-tab li").mouseover(function () {
    var _index = $(this).index();
    $(".tab-content .tab").eq(_index).show().siblings().hide();
    $(this).addClass("team-bg").siblings().removeClass("team-bg");
  });
  $(".change").click(function () {
    var _index = $(this).index();
    if (_index == 0) {
      $(".apt-time .time").stop().animate({
        left: 0
      }, 500)
    }
    if (_index == 2) {
      $(".apt-time .time").stop().animate({
        left: -700
      }, 500)
    }
  });

  // 显示隐藏效果
  function adClass(el1, data1, el2) {
    el1.mouseover(function () {
      var index = $(this).index();
      $(this).addClass(data1).siblings().removeClass(data1);
      el2.next().children().eq(index).removeClass("dn").siblings().addClass("dn");
    })
  };
  // 会议设备环境
  adClass($(".list-tab li"), "bor-color", $(".list-tab"));
  // 底部
  adClass($(".footer-address li"), "active1", $(".footer-address"));
});