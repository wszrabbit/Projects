/**
 * Created by wszra on 2016/1/22.
 */
$(document).ready(function () {
    placeholderFunction(); //input的placeholder
    dateTimePicker();  //input获取日期时间，兼容IE、FF
    oaSystem_menu();  //办公系统主菜单
    osSystem_subMenu();  //办公系统子菜单
    checkDocumentContent();  //查看公文内容
    addCirPeople(); //传阅人输入框添加已选的传阅人
    leftAndRight(); //添加传阅人模态框的选项左右切换

});
function placeholderFunction (){
    $("input").placeholder();
}
function dateTimePicker (){
    $("#datetimepicker1,#datetimepicker2,#datetimepicker3").datetimepicker(
        {
            lang:"ch",
            format:"Y-m-d",
            timepicker:false
        }
    );
}
function oaSystem_menu(){
    $("#oaSys").click(function () {
        $(this).children("span").toggleClass("glyphicon-triangle-top glyphicon-triangle-bottom");//三角形方向
        $("#menu").slideToggle(300);
    });
}
function osSystem_subMenu(){
    $("#hasSub").click(function () {
        $(this).children("span:eq(1)").toggleClass("glyphicon-menu-down glyphicon-menu-right");//箭头方向
        $("#subMenu").slideToggle(300);
    });
}
function checkDocumentContent(){
    $('#modal2').on('show.bs.modal', function (event) {  //当公文查看模态框打开时显示对应的数据
        var a = $(event.relatedTarget);
        var docTitle = a.parent().siblings(".docTitle").text();
        var docUnit = a.parent().siblings(".docUnit").text();
        var docFontSize = a.parent().siblings(".docFontSize").text();
        var docTime = a.parent().siblings(".docTime").text();

        var modal = $(this);
        modal.find(".docTitle").text(docTitle);
        modal.find(".docUnit").text(docUnit);
        modal.find(".docFontSize").text(docFontSize);
        modal.find(".docTime").text(docTime);
    });
}
function addCirPeople(){
    $('#modal3').on("hide.bs.modal", function () {
        var value = "";
        $("#select2 a").each(function () {
            value += $(this).text() + " ";
        });
        $("#cirPeople").val(value);
    });
}
function leftAndRight(){
    for(var i=1; i<=2; i++){
        $("#select"+i).children("a").click(function (e) {
            $(this).toggleClass("choose");
            if (e.shiftKey) {  //shift键多项选择
                $(this).prevUntil($('.choose:first')).addClass("choose");
            }
            document.onselectstart = function (event) { //禁止多选时选中文字。
                event = window.event || event;
                event.returnValue = false;
            };
        });
    }
    $("#select1 a").each(function () {
        $(this).dblclick(function () {  //双击选项选择
            $(this).appendTo("#select2").removeClass("choose");
        });
    });

    /*$("#select2 a").each(function () {
            $(this).dblclick(function () {  //双击取消选择
                $(this).appendTo("#select1");
            });
    });*/

    $("#toRight").bind("click",function () {  //单击按钮选择
        $("#select1 a").each(function () {
            if($(this).hasClass("choose")){
                $(this).appendTo("#select2").removeClass("choose");
            }
        });
    });
    $("#toLeft").bind("click",function () {  //单击按钮取消选择
        $("#select2 a").each(function () {
            if($(this).hasClass("choose")){
                $(this).appendTo("#select1").removeClass("choose");
            }
        });
    });
}
