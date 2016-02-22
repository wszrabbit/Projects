/**
 * 版权所有
 * All right reserved.
 *====================================================
 * 文件名称: 3-1-trainMgmt.js
 * 修订记录：
 * No    日期             作者(操作:具体内容)
 * 1.    2016/2/16        zhengjl(创建:创建文件)
 *====================================================
 * 文件描述：(说明本文件需要实现的内容)
 *
 */
$(document).ready(function(){
    qlTree();                   //左侧导航条
    trainMgmtTable();           //培训管理表
    trainRecommendTable();      //培训推荐表
    trainEnrollTable();         //培训报名表
});
function trainEnrollTable(){
    $("#tb-info2").ulynlist({
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
                {field: 'TJRQ', label: '推荐日期', className: "unsortable"},
                {field: 'TJTJ', label: '推荐', className: "unsortable"},
                {field: 'BMRQ', label: '报名日期', className: "unsortable"},
                {field: 'BMTJ', label: '报名途径', className: "unsortable"},
                {field: 'ZYJNDJ', label: '职业技能等级', className: "unsortable"},
                {field: 'PXBTSJ', label: '培训补贴时间', className: "unsortable"},
                {field: 'PXBTJE', label: '培训补贴金额', className: "unsortable"},
                {field: 'JNPXCS', label: '今年培训次数', className: "unsortable"}
            ],
            rownumbers: false
        },
        customData: [
            {
                "CHECKED": "",
                "XM": "<a href='#' data-toggle='modal' data-target='#modal-name'>卢莉</a>",
                "SFZH": "",
                "XB": "",
                "NL": "",
                "WHCD": "",
                "JYFX": "",
                "YXGZ": "",
                "GZDDYQ": "",
                "LXDH": "",
                "HJSZDSQ": ""
            }
        ],
        requestData: {linesPerPage: 5},
        fullRow: 5,
        pageBarId: 'tb-pageBar',
        afterTableRender: function () {
        }
    });}
function trainRecommendTable(){
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
function trainMgmtTable(){
    $("#tb-info").ulynlist({
        basePath: "lib/ulynlist",
        tableTpl: "flat",
        pageBarTpl: "flat",
        tableColumn: {
            title: "示例",
            keyColumn: "",
            columns: [
                {field: 'CHECKED', checkbox: 'ID', className: "sortable checkeds"},
                {field: 'PXKC', label: '培训课程', className: "sortable", width: 150},
                {field: 'PXZT', label: '培训状态', className: "unsortable"},
                {field: 'PXRQ', label: '培训日期', className: "unsortable"},
                {field: 'PXGZ', label: '培训工种', className: "unsortable"},
                {field: 'PXDD', label: '培训地点', className: "unsortable",width: 150},
                {field: 'PXFY', label: '培训费用', className: "unsortable", width: 120},
                {field: 'PXDW', label: '培训单位', className: "unsortable"},
                {field: 'CZ', label: '操作', className: "unsortable",width:120}
            ],
            rownumbers: false
        },
        customData: [
            {
                "CHECKED": "",
                "PXKC": "<a href='3-2-pub_editTrain.html'>室内设计软件与知识培训</a>",
                "PXZT": "未开始",
                "PXRQ": "2015-02-03至2015-02-07",
                "PXGZ": "PHOTOSHOP",
                "PXDD": "",
                "PXFY": "免费",
                "PXDW": "厦门云光培训机构",
                "CZ": "<a href='3-3-trainRecommend.html'>推荐</a>&nbsp;&nbsp;<a href='3-4-trainEnroll.html'>报名</a>"
            },
            {
                "CHECKED": "",
                "PXKC": "<a href='3-2-pub_editTrain.html'>咖啡制作培训</a>",
                "PXZT": "已结束",
                "PXRQ": "",
                "PXGZ": "公共营养师",
                "PXDD": "",
                "PXFY": "",
                "PXDW": "半年（周末）",
                "CZ": ""
            },
            {
                "CHECKED": "",
                "PXKC": "<a href='3-2-pub_editTrain.html'>美容培训</a>",
                "PXZT": "未开始",
                "PXRQ": "",
                "PXGZ": "美容师",
                "PXDD": "",
                "PXFY": "",
                "PXDW": "半年（周末）",
                "CZ": ""
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
                        },
                        "opened":true
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