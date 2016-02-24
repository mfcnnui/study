/**
 * Created by Administrator on 2016/1/20.
 */
define(["jquery"], function ($) {
    var chen = function () {
        var $result = $("#result");
        var $run = $("#run");
        $run.click(function () {
            var $num1 = $("#one").val();
            var $num2 = $("#two").val();
            $result.val(parseInt($num1) * parseInt($num2));
        });
    };
    return{
        chen:chen
    }
});