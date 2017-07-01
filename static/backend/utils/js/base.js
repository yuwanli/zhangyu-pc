require.config({
    baseUrl: "/static/backend/",
    paths: {
        jquery: "utils/js/jquery-1.11.1.min",
        jPage: "utils/js/jPages",
        handlebars: "utils/js/handlebars-v2.min",
        validate: "utils/js/jquery.validate",
        datePicker: "utils/js/foundation-datepicker.min",
        niceScroll: "utils/js/jquery.nicescroll.min",
        cxSelect: "utils/js/jquery.cxselect.min",
        utils: "utils/js/utils",
        ZeroClipboard: "utils/js/ZeroClipboard.min",
        api: "utils/js/api",
        uploadify: "utils/js/jquery.uploadify.min",
        qrcode: "utils/js/jquery-qrcode-0.14.0.min",
        xdomainrequest: "utils/js/jquery.xdomainrequest.min",
        ueditor: "utils/js/ueditor/ueditor.all.min",
        zeroclipboard: "utils/js/ueditor/third-party/zeroclipboard/ZeroClipboard.min",
        ueditorConfig: "utils/js/ueditor/ueditor.config",
        uploader:"utils/js/jquery.fileupload",
        widget:"utils/js/jquery.ui.widget"
    },
    shim: {
        jquery: {exports: "$"},
        xdomainrequest: {deps: ["jquery"]},
        validate: {deps: ["jquery"], exports: "validate"},
        datePicker: {deps: ["jquery"], exports: "fdatePicker"},
        niceScroll: {deps: ["jquery"], exports: "niceScroll"},
        uploadify: {deps: ["jquery"], exports: "uploadify"},
        jPage: {deps: ["jquery"], exports: "jPage"},
        handlebars: {exports: "Handlebars"},
        myTicket_data: {exports: "myTicket_data"},
        myManage_data: {exports: "myManage_data"},
        workerManage_data: {exports: "workerManage_data"},
        applySettle_data: {exports: "applySettle_data"},
        myFocus_data: {exports: "myFocus_data"},
        cxSelect: {deps: ["jquery"], exports: "cxSelect"},
        utils: {exports: "UTILS"},
        api: {exports: "API"},
        uploader:{deps: ["jquery","widget"],exports: "fileupload"},
        qrcode: {deps: ["jquery"], exports: "qrcode"},
        ueditor: {
            deps: ["zeroclipboard", "ueditorConfig"], exports: "UE", init: function (a) {
                window.ZeroClipboard = a
            }
        }
    }
});