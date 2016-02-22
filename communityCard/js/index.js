/**
 * Created by wszra on 2016/1/15.
 */
window.onload = function(){
    var menu = document.getElementById("menu");
    var subTitle = document.getElementsByClassName("subTitle");
    var arrow = menu.getElementsByTagName("span");
    var subMenu = document.getElementsByClassName("subMenu");
    var len = subTitle.length;
    //alert(len);
    for(var i=0; i<len; i++){
        subTitle[i].index = i;
        subTitle[i].onclick = function(){
            arrow[this.index].className = arrow[this.index].className == "arrowR" ? "arrowD" : "arrowR";
            subMenu[this.index].className = subMenu[this.index].className == "subMenu" ? "subMenu hide" : "subMenu";
        }
    }
}