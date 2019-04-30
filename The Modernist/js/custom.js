$(document).ready(function(){
    $(window).on("scroll",function(){
        var sc = $(window).scrollTop();
        if(sc>600){
            $(".buttonn").fadeIn(1000)
        }else{
            $(".buttonn").fadeOut(1000)
        }
    });
    $(".buttonn").click(function(){
        $("html,body").animate({scrollTop:0},600,function(){
            $(".buttonn").fadeOut(1000)
        })
    });
})