/**
 * Created by wszra on 2016/1/27.
 */
$(document).ready(function () {
    placeholderFun();
    menuDisplay();
    datetimeFun();
    catalogDisplay();
    //checkboxDisplay();
});
/*function checkboxDisplay(){
    var chkbox = $(":checkbox");
    var tag = $(".deptTag");
    var len = chkbox.length;
    //alert(tag.length);
    chkbox.each(function (index) {
        $(this).click(function(){
            tag.toggleClass("hide");
        });
    });

}*/
function catalogDisplay(){
    $(".checkboxGroup").each(function () {
        if(!($(this).hasClass("on"))){
            $(this).hide();
        }
    });
    $(".btnDisplay").click(function(){
        $(this).toggleClass("btnBack btnExtend").parent().next(".checkboxGroup").slideToggle(300);
        $(this).children("span").toggleClass("glyphicon-menu-up glyphicon-menu-down");
    });
}
function placeholderFun() {
    $("input").placeholder();
}
function menuDisplay() {
    $(".sidebarMenu li div").each(function(){
        if(!($(this).hasClass("on"))){
            $(this).siblings(".sidebarSubMenu").hide();
        }
    });
    $(".sidebarMenu li div").click(function () {
        if ($(this).next().length !== 0) {
            $(this).toggleClass("on").siblings(".sidebarSubMenu").slideToggle(500);
            $(this).children("span").toggleClass("glyphicon-menu-down glyphicon-menu-right");
        }
    });
}
function datetimeFun(){
    $("#startDate,#endDate").datetimepicker({
        lang:"ch",
        format:"Y-m-d",
        timepicker:false
    });
}