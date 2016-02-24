/**
 * Created by Administrator on 2015/12/9.
 */
require.config({
    paths:{
        jquery:'../../javascripts/jquery-1.11.1.min.js',
        win:'../module/window',
        add:"../module/add",
        jian:'../module/jian',
        chen:'../module/chen'
    }
});
require(['jquery','win'], function ($,win) {
    var parent = new win.window({
        $btn:$('#a'),
        content:'你好你好',
        handler:function(){
            //console.log(parent.opts.$btn);
        }
    });
    parent.opts.$btn.click(function () {
        parent.alerts();
        //parent.show();
    });
});

require(["jquery","add","jian","chen"], function ($ , add , jian , chen) {
    var $add_btn = $("#add-btn");
    var $jian_btn = $("#jian_btn");
    var $chen_btn = $("#chen_btn");
    var $box = $("#box");
    $add_btn.click(function () {
        $box.load("module/html/add.html",function () {
            new add.add();
        });
    });

    $jian_btn.click(function () {
        $box.load("module/html/jian.html",function () {
            new jian.jian();
        });
    });

    $chen_btn.click(function () {
        $box.load("module/html/chen.html",function () {
            new chen.chen();
        });
    });
});