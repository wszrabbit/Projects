/**
 * 版权所有
 * All right reserved.
 *====================================================
 * 文件名称: 5-1-entpsPolicyMgmt.js
 * 修订记录：
 * No    日期             作者(操作:具体内容)
 * 1.    2016/2/16        zhengjl(创建:创建文件)
 *====================================================
 * 文件描述：(说明本文件需要实现的内容)
 *
 */
$(document).ready(function(){
    qlTree(); //左侧导航条
});
function qlTree(){
    var data = {
        "list":[
            {
                "label":"就业调查管理"
            },
            {
                "label":"招聘培训管理",
                "subTree":[
                    {
                        "label":"招聘管理",
                        "prop":{
                            "href":"1-1-recruitMgmt.html",
                            "id": "menu1-0"
                        }
                    },
                    {
                        "label":"招聘会管理",
                        "prop":{
                            "href":"2-1-recFairMgmt.html",
                            "id": "menu1-0"
                        }
                    },
                    {
                        "label":"培训管理",
                        "prop":{
                            "href":"3-1-trainMgmt.html",
                            "id": "menu1-0"
                        }
                    },
                    {
                        "label":"人员管理",
                        "prop":{
                            "href":"4-1-manMgmt.html",
                            "id": "menu1-0"
                        }
                    }
                ]
            },
            {
                "label":"优惠政策管理",
                "subTree": [
                    {
                        "label":"惠企政策管理",
                        "prop": {
                            "href": "5-1-entpsPolicyMgmt.html",
                            "id": "menu2"
                        },
                        "opened":true
                    },
                    {
                        "label":"惠民政策管理",
                        "prop": {
                            "href": "6-1-peopPolicyMgmt.html",
                            "id": "menu2"
                        }
                    }
                ]
            }
        ],
        expandAll: false
    };
    $("#qlTree").qlTree(data);
}