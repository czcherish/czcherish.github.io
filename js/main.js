window.onload = function(){
	var navBar = document.getElementsByClassName('navBar');
	var imgBar = document.getElementById('imgBar');
	var disImg = imgBar.getElementsByTagName('a');
	var img_num_li = document.getElementsByClassName('img_num')[0].getElementsByTagName('li');
	var count = 0;//全局变量 控制小方点和图片的序号 实现动态改变图片和小方点的序号

	for(var i =0;i < 5;i++)//点击小方点控制图片位置
	{
		img_num_li[i].index = i;
		img_num_li[i].onclick = function(){
			var clearActive = document.getElementsByClassName('active');
			count = this.index;
			for(var j = 0;j < 5;j++)
			{
				disImg[j].style.display = 'none';
			}
			disImg[this.index].style.display = 'block';
			buttonsShow();
		}
	}

	function buttonsShow() {//设置小方点样式
                //将之前的小圆点的样式清除
                for (var i = 0; i < img_num_li.length; i++) {
                    if (img_num_li[i].className == "active") {
                        img_num_li[i].className = "";
                    }
                }
                //数组从0开始
                img_num_li[count].className = "active";
            }

	var timer;//计时器
	function play(){//轮播图片
		timer = setInterval(function(){
			disImg[count++].style.display = 'none';
			if(count == 5)
			{
				count = 0;
			}
			buttonsShow();
			disImg[count].style.display = 'block';
		},1500);
	}

	function stop() {//停止轮播
		clearInterval(timer);
	}

	play();
	navBar[0].onmouseenter = stop;
	navBar[0].onmouseleave = play;	 
}