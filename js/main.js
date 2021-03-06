var img_box_a = document.getElementsByClassName('img_box','div')[0].getElementsByTagName('a');
var navBar_title_li = document.getElementsByClassName('navBar_title','ul')[0].getElementsByTagName('li');
var img_box_a = document.getElementsByClassName('img_box','div')[0].getElementsByTagName('a');
var img_num_li = document.getElementsByClassName('img_num','ul')[0].getElementsByTagName('li');
var poImg = document.getElementsByClassName('poImg')[0];
var count = 0;//定义全局变量同时控制图片和按钮的显示序号
document.getElementsByTagName('body')[0].style.zoom=0.8;

//解决IE浏览器不支持获取ClassName
if (!document.getElementsByClassName) {
    document.getElementsByClassName = function (className, element) {
        var children = (element || document).getElementsByTagName('*');
        var elements = new Array();
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var classNames = child.className.split(' ');
            for (var j = 0; j < classNames.length; j++) {
                if (classNames[j] == className) {
                    elements.push(child);
                    break;
                }
            }
        }
        return elements;
    };
}

//显示微信二维码
navBar_title_li[navBar_title_li.length - 1].onmouseenter = function(){
	var WX = document.getElementById('WX');
	WX.style.display = 'block';
}
navBar_title_li[navBar_title_li.length - 1].onmouseleave = function(){
	var WX = document.getElementById('WX');
	WX.style.display = 'none';
}

//设置按钮显示样式
function btnShow() {
	for(var i = 0;i < img_num_li.length;i++)
	{
		img_num_li[i].className = '';
	}
	img_num_li[count].className = 'active';
}

//设置图片显示
function imgPlay(){
	for(var i = 0;i < img_box_a.length;i++)
	{
		img_box_a[i].style.display = 'none';
	}
	img_box_a[count].style.display = 'block';
}

//点击按钮显示图片
for (var i = 0;i < img_num_li.length;i++) {
	img_num_li[i].index = i;
	img_num_li[i].onclick = function(){
		count = this.index;
		btnShow();
		imgPlay();
	}
}

//轮播图片
var timer;
function startCarousel(){
	timer = setInterval(function function_name() {
		img_num_li[count].className = '';
		img_box_a[count++].style.display = 'none';
		if (count == 5) 
		{
			count = 0;
		}
		img_num_li[count].className = 'active';
		img_box_a[count].style.display = 'block';
	},2000)
}

function stopCarousel(){
	clearInterval(timer);
}

startCarousel();
poImg.onmouseenter =  stopCarousel;
poImg.onmouseleave = startCarousel;