//判断访问设备，方便后面针对不同设备调用代码
var dev = "";
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    //设备为移动端
    dev = "mobile";
    $("html").addClass("mobile");
}
else {
    //设备为pc
    dev = "pc";
    $("html").addClass("pc");
}

//定义设备宽度和高度
var dw = $(window).width(),
    dh = $(window).height();
    
//console.log("当前使用设备为：" + dev + "||设备宽度为：" + dw + "||设备高度为：" + dh);