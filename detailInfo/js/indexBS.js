/**
 * Created by wszra on 2016/1/27.
 */
$(document).ready(function () {
    placeholderFun();
    menuDisplay();
    btnDisplay();
});
function btnDisplay(){
    $(".metadataDes .divInnerContent").each(function(){
        if(!($(this).hasClass("on"))){
            $(this).hide();
        }
    });
    $(".btnDisplay").click(function () {
        $(this).children("span").toggleClass("glyphicon-menu-up glyphicon-menu-down");
        $(this).toggleClass("btnBack btnExtend").parent().siblings(".divInnerContent").slideToggle(500);
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