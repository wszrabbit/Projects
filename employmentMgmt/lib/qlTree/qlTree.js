/** 注：目前支持两级菜单，三级以上请用ztree插件
 * 参数说明：
 *  label:菜单标题
 *  prop:给当前a标签添加属性：
 *                      "prop":{
                            "class":"cur",
                            "id":"id1",
                            "href":"http://www.baidu.com",
                            "target":"_blank"
                        }
 *  subTree:子菜单
 *  opened:当前菜单是否展开，true为展开，默认false不展开（只要任意一个子菜单配置即可）
 *
 */
;(function($,window,document,undefined){
    var pluginName = "qlTree",
        defaults = {
            "prop":{
                "href":"#"
            }
        },
        $tmp,
        $tree;

    function QlTree(elements, options, expandId){
        this.elements = elements;
        this.options = $.extend({},defaults,options);
        this.expandId = getExpandId(this.options.list, expandId);
        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    QlTree.prototype.init = function(){
        if(!this.options.list){
            throw new Error("没有填写list属性");
            return;
        }
        var list = this.options.list;
        var $list = renderData($(this.elements),list, this.expandId);


        bindEvents($(this.elements));
    };

    function renderData($tmp, list, expandId){
        $tmp.append($("<ul></ul>"));
        $.each(list,function(index,value){
            //通过菜单id展开默认菜单
            if(expandId && (value.prop && value.prop.id == expandId)){
                console.info(expandId);
                value.opened = true;
            }

            //配置图片地址
            if(value.iconUrl){
                $tmp.children("ul").append($("<li><a onselectstart='return false;' title='" + value.label +
                    "'><img src='" + value.iconUrl + "' /><span>" +
                    "" + value.label + "</span></a></li>"));
            }else{
                $tmp.children("ul").append($("<li><a onselectstart='return false;' title='" + value.label +
                    "'><span>" + value.label + "</span></a></li>"));
            }
            if(value["prop"]){
                $.each(value["prop"],function(p,v){
                    $tmp.children("ul").children("li:last-child").children("a").attr(p,v);
                });
            }
            //在父元素li里加上opened类
            if(value.opened){
                $tmp.children("ul").children("li:last-child").addClass("opened");
            }
            if(value.subTree&&value.subTree.length>0){
                $tmp.children("ul").children("li:last-child").children("a").append($("<i class='i_end'></i>"));
                renderData($tmp.children("ul").children("li:last-child"),value.subTree, expandId);
            }else{
                return $tmp;
            }
        });
    }



    //绑定事件
    function bindEvents($ele){
        //展开菜单
        $ele.find(".opened").each(function(){
            $(this).parent("ul").parents("li").addClass("expand");
        });
        $ele.find("li.opened").each(function(){
            $(this).parents().show();
        });

        //子菜单拉伸
        $ele.find("a").click(function(){
            if($(this).siblings("ul").length > 0){
                //手风琴
                if($(this).siblings("ul").is(":hidden")){
                    $ele.find("li.expand").not($(this).parents("li.expand")).children("a").trigger("click");
                }
                $(this).siblings("ul").slideToggle("fast");
                $(this).parent("li").toggleClass("expand");
            }else{
                $(this).addClass("cur");
                $ele.find("li a.cur").not($(this)).removeClass("cur");
                //其他菜单收起来
                $ele.find("li.expand").not($(this).parents("li.expand")).children("a").trigger("click");
            }
        });
    }

    $.fn[pluginName] = function(options, expandId){
        return this.each(function(){
            if(!$.data(this,"plugin_" + pluginName)){
                $.data(this,"plugin_" + pluginName);
                new QlTree(this,options, expandId);
            }
        });
    };

    function getExpandId(expandId){

    }
})(jQuery,window,document,undefined);