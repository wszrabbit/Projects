/**
 * 版权所有
 * All right reserved.
 *====================================================
 * 文件名称: public.js
 * 修订记录：
 * No    日期             作者(操作:具体内容)
 * 1.    2016/2/16        zhengjl(创建:创建文件)
 *====================================================
 * 文件描述：(说明本文件需要实现的内容)
 *
 */
$(document).ready(function(){
    datetimeFun();           //日期
    placeholderFun();        //
    statusChoose();          //状态单选
    tooltipFun();            //tooltip弹出框
});
function tooltipFun(){
    $(".pop-tooltip").hover(function(){
        $(this).parents(".has-tooltip").siblings(".tooltip-box").toggle();
    });
}
function statusChoose(){
    $(".label").click(function () {
        $(this).toggleClass("labelCur").siblings().removeClass("labelCur");
    });
}
function placeholderFun(){
    $("input, textarea").placeholder();
}
function datetimeFun(){
    $(".date").datetimepicker({
        lang:"ch",           //语言选择中文
        format:"Y-m-d",      //格式化日期
        timepicker:false    //关闭时间选项
    });
}