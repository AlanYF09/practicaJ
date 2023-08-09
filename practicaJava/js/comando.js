var bebidas=document.getElementsByTagName("li")
var op = document.getElementById("bebida").value;
var bebida=bebidas[op-1].innerHTML
var can=document.getElementById("cantidad").value;
var total=0
function calcular(){
switch(op){
    case "1":
        total=45*can
        document.getElementById("resultado").innerHTML='su bebida es '+bebida+' cantidad '+can+' TOTAL:$'+total
        break;
    case "2":
        total=35*can
        document.getElementById("resultado").innerHTML='su bebida es '+bebida+' cantidad '+can+' TOTAL:$'+total
        break;
    case "3":
        total=20*can
        document.getElementById("resultado").innerHTML='su bebida es '+bebida+' cantidad '+can+' TOTAL:$'+total
        break;
    case "4":
        total=60*can
        document.getElementById("resultado").innerHTML='su bebida es '+bebida+' cantidad '+can+' TOTAL:$'+total
        break;
    case "5":
        total=20*can
        document.getElementById("resultado").innerHTML='su bebida es '+bebida+' cantidad '+can+' TOTAL:$'+total
        break;
}
}
