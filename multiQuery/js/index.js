/**
 * Created by wszra on 2016/1/15.
 */
window.onload = function() {
    document.getElementById("all").onclick = function() {
        var div = document.getElementsByClassName("queryResult")[0];
        var chk = div.getElementsByTagName("input");
        //alert(chk.length);
        for(var i=0;i<chk.length;i++){
            if(chk[i].type == "checkbox"){
                chk[i].checked = true;
            }
        }
    }
}