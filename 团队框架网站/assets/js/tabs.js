$(function(){
    let num=1;
    $(".item a").click(function(){
        if(num%2==0){
            $(this).parent().next().show().slideDown();
        }else{
            $(this).parent().next().hide().slideUp();
        }  
    });

})