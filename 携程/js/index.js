// 搜索提示
$("#search").focus(function () {
	$(".titleBck").css("background", "blue")
	$("#search").css("border", "2px blue solid")
})
$("#search").blur(function () {
	$(".titleBck").css("background", "lightblue")
	$("#search").css("border", "2px lightblue solid")
})


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
})


// 轮播图区域
var _wrap = document.querySelector(".wrap")
var _container = document.querySelector(".container")
// var index = -1
//下一张
function next() {
	if (_wrap.offsetLeft <= -2800) {
		_wrap.style.left = 0
	} else {
		_wrap.style.left = _wrap.offsetLeft - 1400 + "px"
	}
}
// 自动播放
// 轮播图区域开始
var timer
auto()
function auto() {
	timer = setInterval(next, 1500);
}
$(".container").on({
	"mouseover": function () {
		clearInterval(timer)
	},
	"mouseout": function () {
		auto()
	}
})
// 轮播图区域结束

// 小框导航选项显示与隐藏
$(".bck").focus(function () {
	$(".city").css("display", "block")
})
$(".bck").blur(function () {
	$(".city").css("display", "none")
})


// 酒店显示与隐藏
$(".dian").click(function () {
	$(".dian").removeClass('littleCurrent')
	$(this).addClass('littleCurrent')
	$(this).parent().find(".second").css("display", "block")
	$(this).parent().siblings().find(".second").css("display", "none")
	$(this).parent().siblings().find(".second").css("display", "none")
})
$(".dian").eq(0).addClass('littleCurrent')
$(".dian").eq(0).parent().find(".second").css("display", "block")
$(".dian").eq(0).parent().siblings().find(".second").css("display", "none")
$(".dian").eq(0).parent().siblings().find(".second").css("display", "none")

// 景点旅游hover效果
$(".pic>div").on({
	"mouseover": function () {
		$(this).parent().find(".mask").show() //显示
	},
	"mouseout": function () {
		$(this).parent().find(".mask").hide() //隐藏
	}
})

// 景点旅游大块更换
$(".selec>a").click(function () {
	$(this).parent().find(".frame").css("display", "block")
	$(this).parent().siblings().find(".frame").css("display", "none")
})

//酒店大块更换
$(".cialspec").click(function () {
	$(this).parent().parent().find(".right").css("display", "none")
	$(".replace").css("display", "block")
})
$(".special").click(function () {
	$(this).parent().parent().find(".replace").css("display", "none")
	$(".right").css("display", "block")
})

// 机票更换
$(".nei").click(function () {
	$(".first").show()
	$(".second").hide()
})
$(".wai").click(function () {
	$(".first").hide()
	$(".second").show()
})

$("#haoli").click(function () {
	$(".ycc").animate({ left: '1400px' });
	$("#haoli").css({ display: 'none' })
})
$("#xiaochu").click(function () {
	$(".ycc").animate({ left: '-1400px' });
	$("#haoli").css({ display: 'block' })
})
