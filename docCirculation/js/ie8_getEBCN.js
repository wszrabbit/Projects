/**
 * Created by wszra on 2016/1/15.
 */
//解决IE8不支持getElementsByClassName
if (!document.getElementsByClassName) {
    document.getElementsByClassName = function (className, element) {
        var children = (element || document).getElementsByTagName('*');
        var elements = new Array();
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var classNames = child.className.split(' ');
            for (var j = 0; j < classNames.length; j++) {
                if (classNames[j] == className) {
                    elements.push(child);
                    break;
                }
            }
        }
        return elements;
    };
}