import Header from "./header";
import Sider from "./sidebar";
import avatar from "./assets/1.jpg";
import "./index.less";

var img = new Image();
img.src = avatar;
img.classList.add("avatar");
var root = document.getElementById("root");
console.log(root)
root.append(img);
new Header();
new Sider();
