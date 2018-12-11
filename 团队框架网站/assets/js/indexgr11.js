
$(function(){
    let num = 1;
    $(".toggle").click(function(){
        num++;
        if(num%2==0){
            $(".contentBox").animate({"margin-left":"0px"});
            $(".row .col .icon,.desc").css({float:"left"});
            $(".nav ").animate({
                position:"relative",
                left:"-260px"
            });
           
        }else{
            $(".contentBox").animate({"margin-left":"260px"});
            $(".row .col .icon,.desc").css({float:"none"});
            $(".nav").animate({
                position:"fixed",
                left:"0px"
            }); 
        }    
    });

    // $(".nav ul li a").click(function(){
    //     $(this).find("a").addClass("cur");
    //     $(this).siblings().find("a").removeClass("cur");
    // })
});

//点击nav的li，相应的变色
$(function(){
    
});
























