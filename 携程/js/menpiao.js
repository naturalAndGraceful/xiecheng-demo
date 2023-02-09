$(function () {
    $(".hove").hover(function () {
        $(".remen").css({ "display": "block" });
    }, function () {
        $(".remen").css({ "display": "none" });
    })
	
	// 门票
    $(".address").hover(function () {
        $(".shanghai").css({ "display": "block" });
    }, function () {
        $(".shanghai").css({ "display": "none" });
    })
    //导航
    $(".save li").hover(function () {
        $(this).find(".tishi1").toggle();
        $(this).find(".jiantou1").toggle();
        $(this).find(".tishi2").toggle();
        $(this).find(".tishi3").toggle();
        $(this).find(".tishi4").toggle();
        $(this).find(".tishi5").toggle();
        $(this).find(".tishi6").toggle();
        $(this).find(".tishi7").toggle();
        $(this).find(".tishi8").toggle();
        $(this).find(".tishi9").toggle();
        $(this).find(".tishi10").toggle();
        $(this).find(".tishi11").toggle();
    })
    //国内港澳台a的切换
    // $(".mudidi").mousedown(function () {
    //     $(".shanghai").css("display", "block");
    // })
    $(".a1").click(function () {
        $(this).css({ "background": "blue", "color": "#fff" });
        $(".a2").css({ "background": "#fff", "color": "blue" });
        $(".tab2").hide();
        $(".tab1").show();
    })
    $(".a2").click(function () {
        $(this).css({ "background": "blue", "color": "#fff" });
        $(".a1").css({ "background": "#fff", "color": "blue" });
        $(".tab1").hide();
        $(".tab2").show();
    })
    //移动下标
    $(".quanbu li").click(function () {
        $(".quanbu li.active").removeClass("active");
        $(this).addClass("active");
    })
    // 获取input值
    $(".chengshi li").click(function () {
        var aa = $(this).children().val();
        $(".lol").append("<span></span>");
        $(".lol span").wrapInner(aa);
        $(".qc1").css({ "display": "inline-block" })
    })
    $(".qc1").click(function () {
        $(".lol").remove();
        // $(".chengshi li").children().attr(checkbox)
    })

    //切换

    $(".zonghe").click(function () {
        $(".uk2").css({ "display": "block" })
        $(".uk3").css({ "display": "none" });
        $(".uk4").css({ "display": "none" })
    })
    $(".haoping").click(function () {
        $(".uk2").css({ "display": "none" })
        $(".uk3").css({ "display": "block" });
        $(".uk4").css({ "display": "none" })
    })
    $(".dijia").click(function () {
        $(".uk2").css({ "display": "none" })
        $(".uk3").css({ "display": "none" });
        $(".uk4").css({ "display": "block" })
    })
    $(".jdmp").click(function () {
        $(".yiryou").css({ "display": "block" });
        $(".menpiao").css({ "display": "none" });
    })
    $(".yry").click(function () {
        $(".yiryou").css({ "display": "none" });
        $(".menpiao").css({ "display": "block" });
    })





})
