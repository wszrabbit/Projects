/**
 * Created by wszra on 2016/1/20.
 */
window.onload = function (){
    placeholderFun();
    datetimeFun();
    mainMenuDisplay();
    subMenuDisplay();
};
function placeholderFun(){
    $("input").placeholder();
}
function datetimeFun(){
    $("#datetimepicker1,#datetimepicker2").datetimepicker(
        {
            lang:"ch",
            format:"Y-m-d",
            timepicker:false
        }
    );
}
function mainMenuDisplay(){
    var oaSys =  document.getElementById("oaSys");
    //alert(oaSys.length);
    var menu = document.getElementById("menu");
    var triangle = oaSys.getElementsByTagName("span")[0];
    oaSys.onclick = function(){
        menu.className = menu.className == "menu" ? "menu hide" : "menu";
        triangle.className = triangle.className == "glyphicon glyphicon-triangle-top" ? "glyphicon glyphicon-triangle-bottom" : "glyphicon glyphicon-triangle-top";
    };
}
function subMenuDisplay(){
    var hasSub = document.getElementById("hasSub");
    var subMenu = document.getElementById("subMenu");
    var arrow = hasSub.getElementsByTagName("span")[1];
    hasSub.onclick = function () {
        arrow.className = arrow.className == "glyphicon glyphicon-menu-down pull-right" ? "glyphicon glyphicon-menu-right pull-right" : "glyphicon glyphicon-menu-down pull-right";
        subMenu.className = subMenu.className == "subMenu" ? "subMenu hide" : "subMenu";
    }
}