/**
 * Created by Administrator on 2015/12/9.
 */
define(['jquery'],function ($) {
    function Window(opts){
        this.opts = $.extend({},Window.DEFAULTS,opts);
    }
    Window.DEFAULTS = {
        $btn:$("#a"),
        content:'',
        handler: null
    };
    Window.prototype.alerts = function () {
        var CFG = this.opts;
        var $alertBox = $('<div class="alert-box"></div>');
        $alertBox.appendTo('body');
        $alertBox.html(CFG.content);
        var $btn = $('<button class="btn-sub">确定</button>');
        $btn.appendTo($alertBox);
        $btn.click(function () {
            CFG.handler && CFG.handler();
            $alertBox.remove();
        });
    };
    Window.prototype.show = function () {
        var cfg = this.opts;
        //console.log(cfg);
    };
    //$.fn.extend({
    //    window: function (opts) {
    //        return this.each(function () {
    //            new Window(opts);
    //        });
    //    }
    //});
    return {
        window:Window
    }
});