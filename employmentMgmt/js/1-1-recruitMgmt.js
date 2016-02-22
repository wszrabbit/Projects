/**
 * 版权所有
 * All right reserved.
 *====================================================
 * 文件名称: 1-1-recruitMgmt.js
 * 修订记录：
 * No    日期             作者(操作:具体内容)
 * 1.    2016/2/16        zhengjl(创建:创建文件)
 *====================================================
 * 文件描述：(说明本文件需要实现的内容)
 *
 */
$(document).ready(function(){
    qlTree();                //左侧导航条
    recruitInfoTable();      //1-1-招聘信息表
    recommendTable();        //1-3-就业推荐表
});
function recommendTable(){
    $("#tb-info1").ulynlist({
        basePath: "lib/ulynlist",
        tableTpl: "flat",
        pageBarTpl: "flat",
        tableColumn: {
            title: "示例",
            keyColumn: "",
            columns: [
                {field: 'CHECKED', checkbox: 'ID', className: "sortable checkeds"},
                {field: 'XM', label: '姓名', className: "sortable"},
                {field: 'SFZH', label: '身份证号', className: "sortable",width: 120},
                {field: 'XB', label: '性别', className: "unsortable"},
                {field: 'NL', label: '年龄', className: "unsortable"},
                {field: 'WHCD', label: '文化程度', className: "unsortable"},
                {field: 'JYFX', label: '就业方向', className: "unsortable"},
                {field: 'YXGZ', label: '意向工种', className: "unsortable"},
                {field: 'GZDDYQ', label: '工作地点要求', className: "unsortable"},
                {field: 'LXDH', label: '联系电话', className: "unsortable"},
                {field: 'HJSZDSQ', label: '户籍所在地社区', className: "unsortable"}
            ],
            rownumbers: false
        },
        customData: [
            {
                "CHECKED": "",
                "XM": "卢华",
                "SFZH": "35060019810101001",
                "XB": "女",
                "NL": "35",
                "WHCD": "初中",
                "JYFX": "企业正规就业",
                "YXGZ": "厨师",
                "GZDDYQ": "",
                "LXDH": "13458909094",
                "HJSZDSQ": "湖里街道康晖社区"
            }
        ],
        requestData: {linesPerPage: 8},
        fullRow: 8,
        pageBarId: 'tb-pageBar',
        afterTableRender: function () {}
    });
}
function recruitInfoTable(){
    $("#tb-info").ulynlist({
        basePath:"lib/ulynlist",
        tableTpl: "flat",
        pageBarTpl: "flat",
        tableColumn: {
            title: "示例",
            keyColumn: "",
            columns: [
                {field: 'CHECKED', checkbox: 'ID', className: "sortable checkeds"},
                {field: 'ZPGW', label: '招聘岗位', className: "sortable"},
                {field: 'SHZT', label: '审核状态', className: "unsortable"},
                {field: 'ZPZT', label: '招聘状态', className: "unsortable"},
                {field: 'QYMC', label: '企业名称', className: "unsortable", width: 120},
                {field: 'QYSZQ', label: '企业所在区', className: "unsortable"},
                {field: 'NLYQ', label: '年龄要求', className: "unsortable"},
                {field: 'XBYQ', label: '性别要求', className: "unsortable"},
                {field: 'WHCDYQ', label: '文化程度要求', className: "unsortable"},
                {field: 'GZDY', label: '工资待遇', className: "unsortable"},
                {field: 'GXRQ', label: '更新日期', className: "unsortable"},
                {field: 'CZ', label: '操作', className: "unsortable"}
            ],
            rownumbers: false
        },
        customData: [
            {
                "CHECKED": "",
                "ZPGW": "<a href='1-2-pub_editRecInfo.html' class='pop-tooltip'>研发专员</a>",
                "SHZT": "待审核",
                "ZPZT": "未开始",
                "QYMC": "宜家设计装修家居集团",
                "QYSZQ": "湖里区",
                "NLYQ": "25-40周岁",
                "XBYQ": "不限",
                "WHCDYQ": "大专以上",
                "GZDY": "8k-15k",
                "GXRQ": "2015-07-28",
                "CZ": "<a href='1-3-recruitRecommend.html'>就业推荐</a>"
            }
        ],
        requestData: {linesPerPage: 5},
        fullRow: 5,
        pageBarId: 'tb-pageBar',
        afterTableRender: function () {
            $('.pop-tooltip').parents("td").hover(function() {
                $(".tooltip-box").toggle();
            });
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
                        },
                        "opened":true
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
                        }
                    }
                ]
            }
        ],
        expandAll: false
    };
    $("#qlTree").qlTree(data);
}