let myButton = document.getElementById("myButton");
let myButton1 = document.getElementById("myButton1");
let myButton2 = document.getElementById("myButton2");
let box = document.getElementById("box");

myButton.onclick = ()=>{
    alert("Button Clicked!");
}

myButton1.onclick = ()=>{
    alert("Button Clicked once!");
}

myButton2.ondblclick = ()=>{
    alert("Button Clicked Twice!");
}
box.onclick = ()=>{
    alert("Box Clicked!");
}
box.onmouseover = ()=>{
    box.style.backgroundColor = "lightblue";
}
box.onmouseout = ()=>{
    box.style.backgroundColor = "yellow";
}

