/**
 * 版权所有
 * All right reserved.
 *====================================================
 * 文件名称: 4-1-manMgmt.js
 * 修订记录：
 * No    日期             作者(操作:具体内容)
 * 1.    2016/2/16        zhengjl(创建:创建文件)
 *====================================================
 * 文件描述：(说明本文件需要实现的内容)
 *
 */
$(document).ready(function(){
    qlTree();               //左侧导航条
    manMgmtTable();         //人员管理信息表
    employRecord();         //就业推荐历史记录表
    trainRecord();         //培训推荐及结果历史记录表
});
function trainRecord(){
    $("#tb-info1").ulynlist({
        basePath: "lib/ulynlist",
        tableTpl: "flat",
        pageBarTpl: "flat",
        tableColumn: {
            title: "示例",
            keyColumn: "",
            columns: [
                {field: 'XM', label: '推荐日期', className: "sortable"},
                {field: 'SFZH', label: '推荐途径', className: "sortable"},
                {field: 'HJ', label: '报名日期', className: "unsortable"},
                {field: 'SHZT', label: '报名途径', className: "unsortable"},
                {field: 'LXDH', label: '培训结果来源', className: "unsortable"},
                {field: 'JYYX', label: '是否参加技能鉴定', className: "unsortable"},
                {field: 'YXGZ', label: '职业技能等级', className: "unsortable"},
                {field: 'GZDDYQ', label: '培训工种', className: "unsortable"},
                {field: 'PXGZ', label: '培训补贴时间', className: "unsortable"},
                {field: 'CYYY', label: '培训补贴金额', className: "unsortable"}
            ],
            rownumbers: false
        },
        customData: [
            {

            }
        ],
        requestData: {linesPerPage: 5},
        fullRow: 9,
        pageBarId: 'tb-pageBar',
        afterTableRender: function () {
        }
    });
}
function employRecord(){
    $("#tb-info").ulynlist({
        basePath: "lib/ulynlist",
        tableTpl: "flat",
        pageBarTpl: "flat",
        tableColumn: {
            title: "示例",
            keyColumn: "",
            columns: [
                {field: 'XM', label: '推荐日期', className: "sortable"},
                {field: 'SFZH', label: '推荐方式', className: "sortable"},
                {field: 'HJ', label: '推荐就业类型', className: "unsortable"},
                {field: 'SHZT', label: '就业单位', className: "unsortable"},
                {field: 'LXDH', label: '岗位工种', className: "unsortable"},
                {field: 'JYYX', label: '岗位名称', className: "unsortable"},
                {field: 'YXGZ', label: '薪资待遇', className: "unsortable"},
                {field: 'GZDDYQ', label: '是否就业', className: "unsortable"},
                {field: 'PXGZ', label: '就业日期', className: "unsortable"},
                {field: 'CYYY', label: '未就业原因', className: "unsortable"}
            ],
            rownumbers: false
        },
        customData: [
            {

            }
        ],
        requestData: {linesPerPage: 5},
        fullRow: 9,
        pageBarId: 'tb-pageBar',
        afterTableRender: function () {
        }
    });
}
function manMgmtTable() {
    $("#tb-info").ulynlist({
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
                {field: 'HJ', label: '户籍', className: "unsortable"},
                {field: 'SHZT', label: '审核状态', className: "unsortable"},
                {field: 'LXDH', label: '联系电话', className: "unsortable"},
                {field: 'JYYX', label: '就业意向', className: "unsortable"},
                {field: 'YXGZ', label: '意向工种', className: "unsortable"},
                {field: 'GZDDYQ', label: '工作地点要求', className: "unsortable"},
                {field: 'PXGZ', label: '培训工种', className: "unsortable"},
                {field: 'CYYY', label: '创业意愿', className: "unsortable"}
            ],
            rownumbers: false
        },
        customData: [
            {
                "CHECKED": "",
                "XM": "<a href='4-2-manInfo.html'>卢华</a>",
                "SFZH": "35060019810101001",
                "HJ": "",
                "SHZT": "待审核",
                "LXDH": "13458909094",
                "JYYX": "企业正规就业",
                "YXGZ": "厨师",
                "GZDDYQ": "不限",
                "PXGZ": "调酒师",
                "CYYY": "无"
            }
        ],
        requestData: {linesPerPage: 5},
        fullRow: 5,
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
                        },
                        "opened":true
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