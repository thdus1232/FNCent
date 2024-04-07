$(function(){ 

    // let activeSubmenu;
    // $(".nav > ul > li").hover(
    //     function() { 
    //         if($(this).children(".sub").is(":animated")) return;
    //         activeSubmenu = $(this).children(".sub");
    //         activeSubmenu.slideDown(duration);
    //     },
    //     function() { 
    //         if(activeSubmenu) {
    //             activeSubmenu.slideUp(duration);
    //         }
    //     }
    // );

    let duration = 200;
    $(".nav > ul > li").hover(
        function() { 
            if($(this).children(".sub").is(":animated")) return
            $(this).children(".sub").slideDown(duration);
        },

        function() { 
            $(this).children(".sub").slideUp(duration);
        }
    )

    // $(".nav>ul>li").mouseover(function(){ 
    //     $(".sub").stop().show();
    //     $("#header").addClass("on");
    // });
    // $(".nav>ul>li").mouseout(function(){ 
    //     $(".sub").stop().hide();
    //     $("#header").removeClass("on");
    // });

    
    // $(".nav > ul > li").hover(function () {
    //     $(this).addClass("on");  //해당 li를 클릭하면 그 위에 ul 에게 클래스 on을 부여한다.
    //   });
    
    //   $(".nav > ul > li").hover(function () {
    //     $(this).removeClass("on");  //다른 메뉴에 hover 시에는 on 클래스를 제거한다.
    //   });

    

    // photo 슬라이드
    $("#photo ul li").hide().first().show();
    var i=0;
    function slide (){
        if(i<2)i++;
        else i=0;
        $("#photo ul li").fadeOut(1200);
        $("#photo ul li").eq(i).fadeIn(1200);
    };
    setInterval(slide, 3000)
});
