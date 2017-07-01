define(["jquery"],function ($) {
    var utils = {
        "baseUrl":"http://hd.zjqq.dev/",
        "loading" : {
            init : function (o) {
                var str = '<div class="loading" id="loading"><img style="width: '+o.width+'" src="'+o.gif+'" alt=""></div>'
                $(o.target).append(str)
                var p = o.target;
                if($("#loading").parents(p).css("position")==="static"){
                    $("#loading").parents(p).css("position","relative")
                }
                $("#loading").css({
                    "position":"absolute",
                    "left":"50%",
                    "marginLeft":"-66px",
                    "top":o.top
                })
            },
            show:function () {
                $("#loading").show()
            },
            hide:function () {
                $("#loading").hide()
            }
        },
        "alertInfo" : {
            init:function () {
                var _this = this
                var str = '<div id="alertInfo"><div class="cover"></div><div class="cell"><div class="contentCon"></div></div></div>'
                $('body').append(str)
                var style = '<style>' +
                    '#alertInfo{position: fixed;width: 100%;height: 100%;left: 0;top: 0;z-index: 9999;display: none;}' +
                    '#alertInfo .cover{position: absolute;width: 100%;height: 100%;left: 0;top: 0;z-index: -1;background-color: #000;cursor: pointer;opacity: 0.8;filter:alpha(opacity=80);}' +
                    '#alertInfo .cell{display:table-cell;vertical-align: middle}'+
                    '#alertInfo .cell .contentCon{width:430px;margin: 0 auto;padding: 35px 0;text-align: center;background-color: #fff;border-radius: 3px}'+
                    '#alertInfo .cell .contentCon .btn{display: inline-block;margin: 0 10px;min-width: 90px;text-align: center;height: 34px;line-height: 34px;border: 1px solid #fd5b66;border-radius: 3px;color: #fd5b66;cursor: pointer;}'+
                    '#alertInfo .cell .contentCon .btn:hover{color: #fff;background-color:#fd5b66; }'+
                    '</style>'
                $('body').append(style)
            },
            show:function (o) {
                var _this = this
                $("#alertInfo .contentCon").empty()
                switch (o.type){//默认图片
                    case "success":
                        o.img = o.img?o.img:"/static/backend/utils/images/zy_success.png"
                        break;
                    case "error":
                        o.img = o.img?o.img:"/static/backend/utils/images/zy_error.png"
                        break;
                    case "loading":
                        o.img = o.img?o.img:"/static/backend/utils/images/loading/loading.gif"
                        break;
                    default:
                        break;
                }
                var str = '';
                str += '<img style="margin: 0 auto" src="'+o.img+'"/>';
                if(o.title){
                    str += '<h1 style="font-size: 28px;color: #fd5b66;margin-top: 12px;padding: 0 20px;">'+o.title+'</h1>'
                }
                if(o.desc){
                    str += '<p style="color: #878787;margin-top: 10px">'+o.desc+'</p>'
                }
                if(o.btn&&o.btn.length>0){
                    str += '<div style="text-align: center;height: 36px;margin-top: 33px">'
                    for(var i = 0;i<o.btn.length;i++){
                        str += '<div class="btn">'+o.btn[i].name+'</div>'
                    }
                    str += '</div>';
                }
                $("#alertInfo .contentCon").html(str)
                $("#alertInfo .contentCon .btn").on("click",function () {
                    if(o.btn[$(this).index()].callback){
                        o.btn[$(this).index()].callback(_this)
                    }else{
                        _this.hide()
                    }
                })
                $("#alertInfo").css("display","table").fadeIn(200)
                $(document).on('click',"#alertInfo .cover",function () {
                    if(!o.prevent){
                        _this.hide()
                    }
                })
            },
            hide:function () {
                $("#alertInfo").fadeOut(200)
            }
        },
        "handlerResult":function (data,callback_success) {
            console.log(data);
            switch (data.code){
                case 0:
                    callback_success()
                    break;
                case -2:
                    alert("重新登录")
                    break;
                case -1:
                    var obj = {
                        "type":"error",
                        "title":data.msg,
                        "btn":[
                            {
                                "name":"确定"
                            }
                        ]
                    }
                    utils.alertInfo.show(obj);
                    break;
                default:
                    var obj = {
                        "type":"error",
                        "title":"未知错误",
                        "btn":[
                            {
                                "name":"确定"
                            }
                        ]
                    }
                    utils.alertInfo.show(obj);
                    break;
            }
        },
        "handlerError":function (data) {
            var obj = {
                "type":"error",
                "title":data.msg?data.msg:data.status+' '+data.statusText,
                "btn":[
                    {
                        "name":"确定"
                    }
                ]
            }
            if(!$("#alertInfo")){
                utils.alertInfo.init()
                utils.alertInfo.show(obj)
            }else{
                utils.alertInfo.show(obj)
            }
        }
    }
    return utils
})