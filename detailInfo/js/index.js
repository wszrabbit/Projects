/**
 * Created by wszra on 2016/1/15.
 */
window.onload = function (){
    tabsFun();
    btnDisplayFun();
};

function btnDisplayFun(){
    var btnDisplay = document.getElementsByClassName("btnDisplay");
    var divInner = document.getElementsByClassName("divInnerContent");
    var arrow = document.getElementsByClassName("arrow");
    //alert(arrow.length);
    for(var k=0; k<btnDisplay.length; k++){
        btnDisplay[k].index = k;
        btnDisplay[k].onclick = function () {
            this.className = this.className == "btnDisplay btnBack" ? "btnDisplay btnExtend" : "btnDisplay btnBack";
            divInner[this.index].className = divInner[this.index].className == "divInnerContent" ? "divInnerContent hide" : "divInnerContent";
            arrow[this.index].className = arrow[this.index].className == "arrow arrowT" ? "arrow arrowD" : "arrow arrowT";
        }
    }
}
function tabsFun(){
    var tabs = document.getElementById("tabs");
    var lis = tabs.getElementsByTagName("li");
    var divs = document.getElementsByClassName("inner");
    var len = lis.length;
    for(var i=0; i<len; i++){
        lis[i].index = i;
        lis[i].onclick = function(){
            for(var j=0; j<len; j++){
                lis[j].className = "";
                divs[j].className = "inner hide";
            }
            this.className = "active";
            divs[this.index].className = "inner";
        }
    }
}