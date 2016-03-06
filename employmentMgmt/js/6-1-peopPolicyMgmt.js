/**
 * 版权所有
 * All right reserved.
 *====================================================
 * 文件名称: 6-1-peopPolicyMgmt.js
 * 修订记录：
 * No    日期             作者(操作:具体内容)
 * 1.    2016/2/16        zhengjl(创建:创建文件)
 *====================================================
 * 文件描述：(说明本文件需要实现的内容)
 *
 */
$(document).ready(function(){
    qlTree();               //左侧导航条
    entpsPolicyTable();     //优惠政策表
    entpsListTable();       //企业名单表
});
function entpsListTable(){
    $("#tb-info1").ulynlist({
        basePath: "lib/ulynlist",
        tableTpl: "flat",
        pageBarTpl: "flat",
        tableColumn: {
            title: "示例",
            keyColumn: "",
            columns: [
                {field: 'CHECKED', checkbox: 'ID', className: "unsortable checkeds"},
                {field: 'MC', label: '企业名称', className: "sortable"},
                {field: 'ZCH', label: '企业注册号', className: "unsortable"},
                {field: 'ZCDZ', label: '企业注册地址', className: "unsortable"},
                {field: 'SSHY', label: '所属行业', className: "unsortable"},
                {field: 'LXR', label: '联系人', className: "unsortable"},
                {field: 'TEL', label: '联系电话', className: "unsortable"},
                {field: 'DATE', label: '推荐日期', className: "unsortable"}
            ],
            rownumbers: false
        },
        customData: [
            {
            }
        ],
        requestData: {linesPerPage: 10},
        fullRow: 10,
        pageBarId: 'tb-pageBar',
        afterTableRender: function () {
        }
    });
}
function entpsPolicyTable(){
    $("#tb-info2").ulynlist({
        basePath: "lib/ulynlist",
        tableTpl: "flat",
        pageBarTpl: "flat",
        tableColumn: {
            title: "示例",
            keyColumn: "",
            columns: [
                {field: 'MC', label: '优惠政策名称', className: "sortable"},
                {field: 'DX', label: '优惠对象', className: "unsortable"},
                {field: 'SJ', label: '生效时间', className: "unsortable"},
                {field: 'SXSJ', label: '失效时间', className: "unsortable"},
                {field: 'TJRC', label: '已推荐人次', className: "unsortable"},
                {field: 'CZ', label: '操作', className: "unsortable"}
            ],
            rownumbers: false
        },
        customData: [
            {
                "MC": "<a href='5-2-pub_editEntps.html'>自主创业奖励</a>",
                "DX": "经营实体营业执照上载明的法定代表人（或经营者、执行事务合伙人、负责人）必须是自主创业扶持对象",
                "SJ": "",
                "SXSJ": "",
                "TJRC": "",
                "CZ": "<a href='6-3-peopList.html'>查看居民名单</a>"
            },
            {
                "MC": "<a href='5-2-pub_editEntps.html'>自主创业奖励</a>",
                "DX": "经营实体营业执照上载明的法定代表人（或经营者、执行事务合伙人、负责人）必须是自主创业扶持对象",
                "SJ": "",
                "SXSJ": "",
                "TJRC": "",
                "CZ": "<a href='6-3-peopList.html'>查看居民名单</a>"
            }
        ],
        requestData: {linesPerPage: 10},
        fullRow: 8,
        pageBarId: 'tb-pageBar',
        afterTableRender: function () {
        }
    });
}
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
                        }
                    },
                    {
                        "label":"惠民政策管理",
                        "prop": {
                            "href": "6-1-peopPolicyMgmt.html",
                            "id": "menu2"
                        },
                        "opened":true
                    }
                ]
            }
        ],
        expandAll: false
    };
    $("#qlTree").qlTree(data);
}
