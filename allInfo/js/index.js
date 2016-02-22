/**
 * Created by wszra on 2016/1/15.
 */
window.onload = function () {
    menuDisplay();  //左侧菜单显示隐藏
    btnDeptDisplay(); //查询部门收起与展开
    datetimeFun();//日期选择
};
function datetimeFun(){
    $("#startDate,#endDate").datetimepicker({
        lang:"ch",
        format:"Y-m-d",
        timepicker:false
    });
}
function menuDisplay(){
    var menu = document.getElementById("menu");
    var divs = menu.getElementsByTagName("div");
    var subMenu = menu.getElementsByTagName("ul");
    var arrow = menu.getElementsByTagName("span");
    //alert(subMenu.length);
    var len = divs.length;
    for(var i=0; i<len; i++){
        divs[i].index = i;
        divs[i].onclick = function(){
            subMenu[this.index].className = subMenu[this.index].className == "sub" ? "sub hide" : "sub";
            arrow[this.index].className = arrow[this.index].className == "arrow arrowD" ? "arrow arrowR" : "arrow arrowD";
        };
    }
}
function btnDeptDisplay(){
    var btnDisplay = document.getElementsByClassName("btnDisplay");
    var dept = document.getElementsByClassName("checkboxGroup");
    var arrow = document.getElementsByClassName("arrow");
    var len = btnDisplay.length;
    //alert(arrow.length);
    for(var i=0; i<len; i++){
        btnDisplay[i].index = i;
        btnDisplay[i].onclick = function () {
            this.className = this.className == "btnDisplay btnBack" ? "btnDisplay btnExtend" : "btnDisplay btnBack";
            dept[this.index].className = dept[this.index].className == "checkboxGroup" ? "checkboxGroup hide" : "checkboxGroup";
            arrow[this.index].className = arrow[this.index].className == "arrow arrowT" ? "arrow arrowD" : "arrow arrowT";
        }
    }
}