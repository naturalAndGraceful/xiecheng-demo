$(function () {
    $(".save li").hover(function () {
        $(this).find(".tishi1").toggle();
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
        $(this).find(".jiantou1").toggle();
    })
    $(".lingshi .swiper-slide").hover(function () {
    })
    $(".btn1").hover(function () {
        $(".uk1").css({ display: 'block' })
        $(".uk2").css({ display: 'none' })
        $(this).css({ backgroundColor: 'blue' })
        $(".btn2").css({ backgroundColor: '#fff' })
    })
    $(".btn2").hover(function () {
        $(".uk2").css({ display: 'block' })
        $(".uk1").css({ display: 'none' })
        $(this).css({ backgroundColor: 'blue' })
        $(".btn1").css({ backgroundColor: '#fff' })
    })
    $("#haoli").click(function () {
        $(".ycc").animate({ left: '1400px' });
        $("#haoli").css({ display: 'none' })
    })
    $("#xiaochu").click(function () {
        $(".ycc").animate({ left: '-1400px' });
        $("#haoli").css({ display: 'block' })
    })
    $(".ssts").hover(function () {
        $(".ssts ul").show();
    }, function () {
        $(".ssts ul").hide();
    })
    $(".wxsl").hover(function () {
        $(".wxsl img").css({ display: 'block' })
    }, function () {
        $(".wxsl img").css({ display: 'none' })
    })
    $(document).scroll(function () {
        $(".hdb").css({ display: 'none' })
        var scc = $(window).scrollTop();
        if (scc < 500) {
            $(".hdb").css({ display: 'none' })
        } else {
            $(".hdb").css({ display: 'block' })

        }
    })
    $(".hdb").click(function () {
        $("html,body").animate({ "scrollTop": 0 }, 600)
    })
})