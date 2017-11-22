
/***********简介************/
/*
通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。
JavaScript 能够改变页面中的所有 HTML 元素
JavaScript 能够改变页面中的所有 HTML 属性
JavaScript 能够改变页面中的所有 CSS 样式
JavaScript 能够对页面中的所有事件做出反应
*/

/*
通常，通过 JavaScript，您需要操作 HTML 元素。
为了做到这件事情，您必须首先找到该元素。有三种方法来做这件事：
1.通过 id 找到 HTML 元素
        var x=document.getElementById("intro");
2.通过标签名找到 HTML 元素
        本例查找 id="main" 的元素，然后查找 "main" 中的所有 <p> 元素：
        var x=document.getElementById("main");
        var y=x.getElementsByTagName("p");
3.通过类名找到 HTML 元素

*/


/*********JavaScriptDom*************/
// HTML DOM 允许 JavaScript 改变 HTML 元素的内容。
/*
改变 HTML 输出流
JavaScript 能够创建动态的 HTML 内容：
今天的日期是： Wed Nov 22 2017 17:52:05 GMT+0800 (CST)
在 JavaScript 中，document.write() 可用于直接向 HTML 输出流写内容。
*/

/*
改变 HTML 内容
修改 HTML 内容的最简单的方法时使用 innerHTML 属性。
如需改变 HTML 元素的内容，请使用这个语法：
document.getElementById(id).innerHTML=new HTML
*/

/*
改变 HTML 属性
如需改变 HTML 元素的属性，请使用这个语法：
document.getElementById(id).attribute=new value
实例
本例改变了 <img> 元素的 src 属性：
<!DOCTYPE html>
<html>
<body>

<img id="image" src="smiley.gif">

<script>
document.getElementById("image").src="landscape.jpg";
</script>

</body>
</html>
*/

/*********JS Dom CSS***********/
// HTML DOM 允许 JavaScript 改变 HTML 元素的样式。
/*改变 HTML 样式
如需改变 HTML 元素的样式，请使用这个语法：
document.getElementById(id).style.property=new style
例子 1
下面的例子会改变 <p> 元素的样式：
<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color="blue";
</script>
*/


/***********JS Dom 事件*************/
/*
对事件做出反应
我们可以在事件发生时执行 JavaScript，比如当用户在 HTML 元素上点击时。
如需在用户点击某个元素时执行代码，请向一个 HTML 事件属性添加 JavaScript 代码：
onclick=JavaScript
HTML 事件的例子：
当用户点击鼠标时
当网页已加载时
当图像已加载时
当鼠标移动到元素上时
当输入字段被改变时
当提交 HTML 表单时
当用户触发按键时
*/

/* onclick
本例从事件处理器调用一个函数：---这里的this就是指h1元素！！！！
<!DOCTYPE html>
<html>
<head>
<script>
function changetext(id)
{
    id.innerHTML="谢谢!";
}
</script>
</head>
<body>
<h1 onclick="changetext(this)">请点击该文本</h1>
    </body>
    </html>
*/


/*
onload 和 onunload 事件
onload 和 onunload 事件会在用户进入或离开页面时被触发。
onload 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。
onload 和 onunload 事件可用于处理 cookie。
实例
<body onload="checkCookies()">
*/

/*
onchange 事件
onchange 事件常结合对输入字段的验证来使用。
下面是一个如何使用 onchange 的例子。当用户改变输入字段的内容时，会调用 upperCase() 函数。
实例
<input type="text" id="fname" onchange="upperCase()">
*/

/*
onmouseover 和 onmouseout 事件
onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。
*/

/*
onmousedown、onmouseup 以及 onclick 事件
onmousedown, onmouseup 以及 onclick 构成了鼠标点击事件的所有部分。首先当点击鼠标按钮时，会触发 onmousedown 事件，当释放鼠标按钮时，会触发 onmouseup 事件，最后，当完成鼠标点击时，会触发 onclick 事件。
*/


/***********DOM 节点****************/
// JavaScript HTML DOM 元素（节点）
/*
添加和删除节点（HTML 元素）。
创建新的 HTML 元素
如需向 HTML DOM 添加新元素，您必须首先创建该元素（元素节点），然后向一个已存在的元素追加该元素。
实例
<div id="div1">
    <p id="p1">这是一个段落</p>
    <p id="p2">这是另一个段落</p>
    </div>

    <script>
var para=document.createElement("p");
var node=document.createTextNode("这是新段落。");
para.appendChild(node);

var element=document.getElementById("div1");
element.appendChild(para);
</script>
亲自试一试
例子解释：
这段代码创建新的 <p> 元素：
var para=document.createElement("p");
如需向 <p> 元素添加文本，您必须首先创建文本节点。这段代码创建了一个文本节点：
var node=document.createTextNode("这是新段落。");
然后您必须向 <p> 元素追加这个文本节点：
para.appendChild(node);
最后您必须向一个已有的元素追加这个新元素。
这段代码找到一个已有的元素：
var element=document.getElementById("div1");
这段代码向这个已有的元素追加新元素：
element.appendChild(para);


删除已有的 HTML 元素
如需删除 HTML 元素，您必须首先获得该元素的父元素：
实例
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另一个段落。</p>
</div>

<script>
var parent=document.getElementById("div1");
var child=document.getElementById("p1");
parent.removeChild(child);
</script>
*/
