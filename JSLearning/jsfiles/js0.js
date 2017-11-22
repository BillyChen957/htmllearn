

document.write("脚本位于index-js.html外部");
function disp_alert() {
    alert("我是警告框"+'\n'+"带折行");
}

function show_confirm() {
    var r = confirm("Press a button");
    if (r == true){
        alert("You pressed OK!");
    }else{
        alert("You pressed Cancel!")
    }
}