/**
 * Created by wszra on 2016/1/26.
 */
$(document).ready(function(){
    $("input").placeholder();

    $("#btn_advQuery").click(function() {

        $("#advQuery").slideToggle(500);
        $(this).children(".arrowTip").toggleClass("unVisible");
    });

    $("#checkAll").click(function() {
        $(".queryResult :checkbox").attr("checked",true);
    });

    $(".menu div").click(function(){
        $(this).siblings("ul").toggleClass("hide");
    });

    $(".menu, .contentBody").perfectScrollbar({
        wheelSpeed: 20,
        wheelPropagation: false
    });

});