// 长条二级菜单栏部分
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

    $(".kk ul").hide()
    $(".kk ul").eq(0).show()
    $(".xianggang li").hover(function () {
        $(".xianggang li.dixiameixian").removeClass("dixiameixian");
        $(this).addClass("dixiameixian");
        var index = $(".xianggang li").index($(this));
        $(".kk ul:visible").hide();
        $(".kk ul").eq(index).show();
    }, function () {
        $(".xianggang li.dixiameixian").removeClass("dixiameixian");
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
    $(document).scroll(function () {
        var scc = $(window).scrollTop();
        console.log(scc);
        if (scc >= 600) {
            $(".ysq").addClass("ysq11");
            $(".fdfd").css({ display: 'none' })
            $(".mingdian").hover(function () {
                $(".fdfd").css({ display: 'block' })
                $(".mingdian").css({ background: '#626b9d' })
            }, function () {
                $(".fdfd").css({ display: 'none' })
                $(".mingdian").css({ background: 'rgba(0,0,0,0)' })
            })
        } else {
            $(".ysq").removeClass("ysq11")
            $(".fdfd").css({ display: 'block' })
        }
    })

})




