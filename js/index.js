$(function(){
    var lis = $(".box-ul li")
    var arrow = $(".arrow")
    var circleLis = $(".circle li")
    var img = 0;
    var timer = null;
    var flag = true;
    

    $(".box").hover(function(){
        arrow.fadeIn();
        clearInterval(timer);
    },function(){
        arrow.fadeOut();
        timer = setInterval(assign,2000);
    })

    function assign(){
        // if(img<lis.length-1){
        //     img++;
        // }else{
        //     img=0;
        // }
        if(flag){
            flag = false;
            img<lis.length-1?img++:img=0;
            lis.eq(img).animate({"opacity":1},1000)
            lis.eq(img-1).animate({"opacity":0},1000,function(){
                flag = true;
            })
            circleLis.eq(img).addClass("current").siblings().removeClass("current");
        }
        // img<lis.length-1?img++:img=0;
        // lis.eq(img).animate({"opacity":1},1000)
        // lis.eq(img-1).animate({"opacity":0},1000)
        // circleLis.eq(img).addClass("current").siblings().removeClass("current");
        
    }

    timer = setInterval(assign,2000);
    $(".right").on("click",assign)

    // $(".left").on("click",function(){
    //     img>0?img--:img=lis.length-1;
    //     if(img==lis.length-1){
    //         lis.eq(0).animate({"opacity":0},1000)
    //         lis.eq(img).animate({"opacity":1},1000)
    //     }else{
    //         lis.eq(img).animate({"opacity":1},1000)
    //         lis.eq(img+1).animate({ "opacity":0},1000)
    //     }
    //      circleLis.eq(img).addClass("current").siblings().removeClass("current");
    // })
    $(".left").on("click",function(){
        if(flag){
            flag = false;
            img>0?img--:img=lis.length-1;
            if(img==lis.length-1){
                lis.eq(0).animate({"opacity":0},1000)
                lis.eq(img).animate({"opacity":1},1000,function(){
                    flag = true;
                })
            }else{
                flag = false;
                lis.eq(img).animate({"opacity":1},1000)
                lis.eq(img+1).animate({ "opacity":0},1000,function(){
                    flag = true;
                })
            }
            circleLis.eq(img).addClass("current").siblings().removeClass("current");
        }
    })
})