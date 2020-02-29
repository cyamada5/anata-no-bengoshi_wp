


// -------map
$(function(){
    // 北海道
    $('.hokkaido,#hokkaidoPath').on('mouseover',function(){
        $('#hokkaidoPath').css({
            'fill':'#F6F670',
            'transition':'all  0.3s ease',
        });
    });
    $('.hokkaido,#hokkaidoPath').on('mouseout',function(){
        $('#hokkaidoPath').css({
            'fill':'#2CAEBF',
            'transition':'all  0.3s ease',
        });
    });
    // 東北
    $('.tohoku,#tohokuPath').on('mouseover',function(){
        $('#tohokuPath').css({
            'fill':'#F6F670',
            'transition':'all  0.3s ease',
        });
    });
    $('.tohoku,#tohokuPath').on('mouseout',function(){
        $('#tohokuPath').css({
            'fill':'#2CAEBF',
            'transition':'all  0.3s ease',
        });
    });
    // 関東
    $('.kantou,#kantouPath').on('mouseover',function(){
        $('#kantouPath').css({
            'fill':'#F6F670',
            'transition':'all  0.3s ease',
        });
    });
    $('.kantou,#kantouPath').on('mouseout',function(){
        $('#kantouPath').css({
            'fill':'#2CAEBF',
            'transition':'all  0.3s ease',
        });
    });
    // 北陸・甲信越
    $('.hokuriku-kousinnetsu,#hokuriku-kousinnetsuPath').on('mouseover',function(){
        $('#hokuriku-kousinnetsuPath').css({
            'fill':'#F6F670',
            'transition':'all  0.3s ease',
        });
    });
    $('.hokuriku-kousinnetsu,#hokuriku-kousinnetsuPath').on('mouseout',function(){
        $('#hokuriku-kousinnetsuPath').css({
            'fill':'#2CAEBF',
            'transition':'all  0.3s ease',
        });
    });
    // 東海
    $('.tokai,#tokaiPath').on('mouseover',function(){
        $('#tokaiPath').css({
            'fill':'#F6F670',
            'transition':'all  0.3s ease',
        });
    });
    $('.tokai,#tokaiPath').on('mouseout',function(){
        $('#tokaiPath').css({
            'fill':'#2CAEBF',
            'transition':'all  0.3s ease',
        });
    });
    // 関西
    $('.kansai,#kansaiPath').on('mouseover',function(){
        $('#kansaiPath').css({
            'fill':'#F6F670',
            'transition':'all  0.3s ease',
        });
    });
    $('.kansai,#kansaiPath').on('mouseout',function(){
        $('#kansaiPath').css({
            'fill':'#2CAEBF',
            'transition':'all  0.3s ease',
        });
    });
    // 中国
    $('.tyugoku,#tyubuPath').on('mouseover',function(){
        $('#tyubuPath').css({
            'fill':'#F6F670',
            'transition':'all  0.3s ease',
        });
    });
    $('.tyugoku,#tyubuPath').on('mouseout',function(){
        $('#tyubuPath').css({
            'fill':'#2CAEBF',
            'transition':'all  0.3s ease',
        });
    });
    // 四国
    $('.shikoku,#shikokuPath').on('mouseover',function(){
        $('#shikokuPath').css({
            'fill':'#F6F670',
            'transition':'all  0.3s ease',
        });
    });
    $('.shikoku,#shikokuPath').on('mouseout',function(){
        $('#shikokuPath').css({
            'fill':'#2CAEBF',
            'transition':'all  0.3s ease',
        });
    });
    // 九州・沖縄
    $('.kyusyu-okinawa,.kyusyu-okinawaPath').on('mouseover',function(){
        $('.kyusyu-okinawaPath').css({
            'fill':'#F6F670',
            'transition':'all  0.3s ease',
        });
    });
    $('.kyusyu-okinawa,.kyusyu-okinawaPath').on('mouseout',function(){
        $('.kyusyu-okinawaPath').css({
            'fill':'#2CAEBF',
            'transition':'all  0.3s ease',
        });
    });
});


// -------subtitle蛍光ペン
$(window).scroll(function (){
	$(".marker-animation").each(function(){
	  var position = $(this).offset().top; //ページの一番上から要素までの距離
	  var scroll = $(window).scrollTop(); //スクロール位置
	  var windowHeight = $(window).height(); //ウインドウの高さ
	  if (scroll >= position - windowHeight){ //スクロール位置>=要素の位置
	    $(this).addClass('active'); //クラス「active」を与える
	  }
	});
});


// ハンバーガーメニュー

$(function(){
    $("#menuToggle").on("click", function() {

        if ($('nav').hasClass("close")) {
            $('nav').addClass("open");
            $('nav').removeClass("close");
        }else{
            $('nav').addClass("close");
            $('nav').removeClass("open");
        }
    });
});





$(function(){

    function prefectureToggle() {
        $(this).next().slideToggle(300);
    }

    $(".toggle").click(prefectureToggle);

});


$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });