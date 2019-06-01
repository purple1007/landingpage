
/*nav*/

$(document).ready(function(){

        // 視窗滾動時導覽列變化
        $(window).scroll(function(){
            var scrollVal = $(this).scrollTop();
            if ( scrollVal >= 50 ) {
                $("nav").addClass("w_nav");
                $("#taptop").removeClass("hidden");
                $("#home").removeClass("active_yellow");
            }
            else {
                $("nav").removeClass("w_nav");
                $("#home").addClass("active_yellow");
                $("#taptop").addClass("hidden");
            }
        });

         $(window).trigger("scroll");

        // 判斷視窗滾動到哪裡時 導覽列變顏色
        //scrollspy
        $(window).on('scroll', function () {
             var sections = $('section'),
              nav = $('nav'),
              nav_height = nav.outerHeight()+30,
              cur_pos = $(this).scrollTop();

             sections.each(function() {
                var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
              nav.find('a').removeClass('active');
              sections.removeClass('active');

              $(this).addClass('active');
              nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
               }
             });
    });
        // lightbox
        var lightBox = $(".lightbox"), /*lightbox樣式*/
            body = $("body"),
            imgbox = $(".imgbox"),
            closeBox= $(".lightbox .closeBox, .lightbox .bg"),
            lightBox_photo = $(".lightbox img");

        imgbox.click(function(){
        var photoSrc = $(this).data("src"), /*抓取圖片連結*/
            detail_img = '#' + $(this).data("target"); /*抓取圖片在網頁上的位置*/
            console.log(detail_img);

        lightBox.fadeIn(); /*顯示lightbox樣式*/
        body.css("overflow-y","hidden"); /*取得$("body")的 overflow-y,hidden的css值*/
        lightBox_photo.attr('src' , photoSrc) /*attr() ->设置或返回被选元素的属性值。*/
        $(detail_img).fadeIn(0).siblings().fadeOut(0); /*siblings 選則和 $detail_item 同層的所有標籤(li) 除了本身。*/
    });
    closeBox.click(function(){
        lightBox.fadeOut();
        body.css("overflow-y","scroll");
    });



        // 導覽列連結到頁面錨點
        // smooth scrollTo
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
            $('html, body').stop(0,1).animate({
            scrollTop: target.offset().top-100
            }, 800);
            return;
            }
            }
            });

         //scrollreveal
    window.sr = ScrollReveal({
        reset: false,
        distance: '20px',
        scale:1,
        easing:'ease-in-out',
        duration: 600,
        viewFactor: 0.5
    });
    sr.reveal('.reveal_bottom', {
        origin:'bottom',
        delay: 0
    });
    sr.reveal('.reveal_Lleft', {
        origin:'left'
    });
    sr.reveal('.reveal_right', {
        origin:'right'
    });
    sr.reveal('.reveal_opacity', {
        distance: '0px',
    });
    sr.reveal('.reveal_scale', {
        distance: '0px',
        scale:0.9
    });

    ScrollReveal().reveal('.servicebox, .imgbox', {
        interval: 200
    });

        // 導覽列 小螢幕時顯示
        $(window).resize(function(){
            var wdth = $(window).width();
            if ( wdth < 768 ){
                $("#rwdNav").removeClass("container");
                $("#rwdNav").addClass("container-fluid");
                $("#rwdNav2").removeClass("row");
            }
            else{
                $("#rwdNav").addClass("container");
                $("#rwdNav").removeClass("container-fluid");
                $("#rwdNav2").addClass("row");
            }
        });
        $(window).trigger("resize");

        $(".fa-align-center").click(function(){
            $(".nav_list").addClass("show_nav");
            $(".fa-align-center").addClass("hidden");
            $(".fa-times-circle").removeClass("hidden");

        });

        $(".navclose").click(function(){
            $(".nav_list").removeClass("show_nav");
            $(".fa-align-center").removeClass("hidden");
            $(".navclose").addClass("hidden");

        });



    });




/*客戶區*/

$('.clienttheme').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
    }

})



