$(document).ready(function(){
    var put = $("img_box").length;
    function nextAni (){
        $(".img_box").not(":animated").animate({"margin-left":"-1920px"},900,function(){
            $(".img_box li").eq(0).appendTo($(".img_box"));
            $(".img_box").css("margin-left","0px");
            $(".btn_box li").eq(0).appendTo($(".btn_box"));
            $(".btn_box li button").removeClass("on");
            $(".btn_box li").eq(0).find("button").addClass("on");
        });
    }
    var intv=setInterval(function(){nextAni();},2900);
    $(".btn_box li").click(function(){
        clearInterval(intv);
        var idx=$(this).index();
        if(idx!=0){
           for(a=0;a<idx-1;a++){
           $(".btn_box li").eq(0).appendTo($(".btn_box"));
           $(".img_box li").eq(0).appendTo($(".img_box"));
           }
        nextAni();
        }
    intv=setInterval(function(){nextAni();},2900); 
    });
});