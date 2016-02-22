/**
 * 版权所有
 * All right reserved.
 *====================================================
 * 文件名称: 2-1-recFairMgmt.js
 * 修订记录：
 * No    日期             作者(操作:具体内容)
 * 1.    2016/2/16        zhengjl(创建:创建文件)
 *====================================================
 * 文件描述：(说明本文件需要实现的内容)
 *
 */
$(document).ready(function(){
    qlTree();               //左侧导航条
    recFairInfoTable();     //2-1-招聘会信息表
    enrollUnitInfoTable();     //2-3-报名单位信息表
});
function enrollUnitInfoTable(){
    $("#tb-info1").ulynlist({
        basePath: "lib/ulynlist",
        tableTpl: "flat",
        pageBarTpl: "flat",
        tableColumn: {
            title: "示例",
            keyColumn: "",
            columns: [
                {field: 'CHECKED', checkbox: 'ID', className: "sortable checkeds"},
                {field: 'DWMC', label: '单位名称', className: "sortable"},
                {field: 'SHZT', label: '审核状态', className: "unsortable"},
                {field: 'SSHY', label: '所属行业', className: "unsortable"},
                {field: 'JYFW', label: '经营范围', className: "unsortable"},
                {field: 'ZPFS', label: '招聘方式', className: "unsortable"},
                {field: 'ZPCK', label: '招聘窗口', className: "unsortable"},
                {field: 'YXQSSJ', label: '有效起始时间', className: "unsortable"},
                {field: 'YXJZSJ', label: '有效截止时间', className: "unsortable"},
                {field: 'ZPZRS', label: '招聘总人数', className: "unsortable"},
                {field: 'ZPGW', label: '招聘岗位', className: "unsortable"},
                {field: 'ZPRS', label: '招聘人数', className: "unsortable"}
            ],
            rownumbers: false
        },
        customData: [
            {
                "CHECKED": "",
                "DWMC": "<a href='#' class='pop-tooltip'>畅想信息技术有限公司</a>",
                "SHZT": "",
                "SSHY": "信息传输、计算机服务和软件业",
                "JYFW": "",
                "ZPFS": "",
                "ZPCK": "",
                "YXQSSJ": "",
                "YXJZSJ": "",
                "ZPZRS": "",
                "ZPGW": "岗位1",
                "ZPRS": "6"
            },
            {
                "CHECKED": "",
                "DWMC": "<a>单位2</a>",
                "SHZT": "",
                "SSHY": "",
                "JYFW": "",
                "ZPFS": "",
                "ZPCK": "",
                "YXQSSJ": "",
                "YXJZSJ": "",
                "ZPZRS": "",
                "ZPGW": "岗位2",
                "ZPRS": "6"
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
function recFairInfoTable(){
    $("#tb-info").ulynlist({
        basePath: "lib/ulynlist",
        tableTpl: "flat",
        pageBarTpl: "flat",
        tableColumn: {
            title: "示例",
            keyColumn: "",
            columns: [
                {field: 'CHECKED', checkbox: 'ID', className: "sortable checkeds"},
                {field: 'ZPHMC', label: '招聘会名称', className: "sortable", width: 150},
                {field: 'ZPHRQ', label: '招聘会日期', className: "sortable"},
                {field: 'ZPHZT', label: '招聘会状态', className: "unsortable"},
                {field: 'SHZT', label: '审核状态', className: "unsortable"},
                {field: 'ZPHLX', label: '招聘会类型', className: "unsortable"},
                {field: 'ZBDW', label: '主办单位', className: "unsortable", width: 150},
                {field: 'DSHDW', label: '待审核单位', className: "unsortable"},
                {field: 'SHTGDW', label: '审核通过单位', className: "unsortable"},
                {field: 'CZ', label: '操作', className: "unsortable",width:60}
            ],
            rownumbers: false
        },
        customData: [
            {
                "CHECKED": "",
                "ZPHMC": "<a href='#' class='pop-tooltip'>厦门市湖里区服务企业用工专场招聘会（6月）</a>",
                "ZPHRQ": "2015-12-31",
                "ZPHZT": "未开始",
                "SHZT": "审核通过",
                "ZPHLX": "常规专场",
                "ZBDW": "湖里区劳动就业管理中心",
                "DSHDW": "50",
                "SHTGDW": "21",
                "CZ": "<a href='2-3-enrollUnitAudit.html'>查看/审核报名</a>"
            }
        ],
        requestData: {linesPerPage: 5},
        fullRow: 5,
        pageBarId: 'jobFairPage',
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
                        }
                    },
                    {
                        "label":"招聘会管理",
                        "prop":{
                            "href":"2-1-recFairMgmt.html",
                            "id": "menu1-0"
                        },
                        "opened":true
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