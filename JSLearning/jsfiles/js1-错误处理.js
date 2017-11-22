
// try...catch语句
function try_catch() {
    var txt = "";
    try{
        adddlert("Welcome guest");
    }
    catch (err){
        txt = "本页中存在错误！\n\n";
        txt += "错误描述：" + err.description + "\n\n";
        txt += "点击'确定'继续";
        alert(txt);
    }
}
// 带有确认框的try...catch语句
function try_catch_confirm() {
    var txt = "";
    try{
        addlert("");
    }
    catch (error){
        txt = "本页中存在错误 \n\n";
        txt += "点击'确定'继续查看本页 ";
        txt += "点击'取消'返回首页";

        if (!confirm(txt)){
            document.location.href = "https://www.baidu.com";
        }

    }

}
// throw声明
function throwAction() {

    var x = prompt("请输入0至10之间的数");
    try{
        if(x>10){
            throw "Error1";
        }else if (x<0){
            throw "Error2";
        }else if(isNaN(x)){
            throw "Error3";
        }
    }
    catch (er){
        if (er=="Error1"){
            alert("错误！该值太大");
        }

        if (er=="Error2"){
            alert("错误！该值太小");
        }

        if (er=="Error3"){
            alert("错误！该值不是数字");
        }
    }

}

// onerror事件
onerror = handleErr;
var txt = "";
function handleErr(msg,url,l) {
    txt = "本页存在错误！\n\n";
    txt += "错误：" + msg + "\n";
    txt += "URL:" + url + "\n";
    txt += "行" + l + "\n\n";
    txt += "点击'确定' 继续\n\n ";
    alert(txt);
    return true;
}

function message3()
{
    adddlert("Welcome guest!")
}
