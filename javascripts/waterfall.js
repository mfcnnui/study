/**
 * Created by Administrator on 2015/9/14.
 */
$(function () {
    waterfall();
    var timeOut;
    $(window).scroll(function () {
        var dataInt = {data:[{"src":"0.jpg"},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"}]};
        var isScroll = isScrollSlide();
        var $box = $(".box");
        clearTimeout(timeOut);
        $box.removeClass("endBox");
        if(isScroll){
            timeOut = setTimeout(function () {
                $.each(dataInt.data,function(key,val){
                    $("#main").append("<div class='box endBox'><div class='pic'><img src='images/"+val.src+"' alt=''/></div></div>");
                });
                var $endBox = $(".endBox");
                $endBox.hide(0).fadeIn(500).css("-webkit-transform","rotate (-720 deg)");
                waterfall();//元素添加后调用
            },500)
        }
    });
});
/**
 * 计算并排序瀑布流
 */
function  waterfall(){
    var $main = $("#main");
    var $box = $(".box");
    //计算整个页面显示的列数（页面宽/box的宽）
    var oBxoW = $box.eq(0).outerWidth();//获得每个盒子的宽
    var cols = Math.floor($(window).width()/oBxoW);//算出有几列--用窗口宽/盒子宽
    //设置main的宽度
    $main.css({
        width:cols*oBxoW ,
        margin:"0 auto"
    });
    //设置图片位置
    var hArr = [];
    $box.each(function (index,val) {
        var h = $box.eq(index).outerHeight();//取出盒子的高，准备放入数组里进行最小值筛选
        if(index<cols){//判断是否超过了一行，这里由第一行的所有高做为参照
            hArr.push(h);//放入数组，准备进行最小值筛选
        }else{//表示超过了第一行，已经是第二行的第一张
            var minH = Math.min.apply(null,hArr);//取出最小高度值-------Math.min.apply这个方法可以在数组里最小值，Math.min则只能对一组数字例如（1,2,3,4）进行筛选
            var minHindex = $.inArray(minH,hArr);//取出最小值在数组中的索引----jQuery,提供的可以直接取得某个值在某个数中组的下标

            var $val = $(val);//将遍历后的$box的值封装成jQuery对象
            $val.css({//为第二行开始的盒子进行定位
                "position":"absolute",
                "top":minH+"px",
                "left":minHindex*oBxoW+"px"
            });
//            console.log(hArr);
//            console.log(minHindex);
            hArr[minHindex] += $box.eq(index).outerHeight();//从第二开始，每加载一张图片就去改变存数组里面的最小值，对数组里最小高度 和新排过来的盒子高
        }
    });
}
/**
 * 判断是否达到加载条件，当最后一个盒子高的一半出现在window里的时候，则达到加载条件返回true，
 * @returns {boolean}
 */
function isScrollSlide(){
    var $lastBox = $(".box").last();//找到最后一个box
    var lastBoxTop = $lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);//算出最后一个盒子高的一半+此元素距离最顶点的高度
                                                                                                                                     //outerHeight()是获取元素本身的包括padding的高度，而height(),则不包括
    var scrollTop = $(window).scrollTop();//获取窗口滚动条的滚动距离
    var docH = $(window).height();//获取窗口的高
    return (lastBoxTop<docH+scrollTop)?true:false;//判断最后一个盒子距离父元素顶部的距离是否小于了窗口高+滚动距离，是，返回true,否，返回false
}

