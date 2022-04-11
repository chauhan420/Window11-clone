let taskbar=document.getElementsByClassName("taskbar")[0]
let startmenu=document.getElementsByClassName("startmenu")[0]


taskbar.addEventListener("click",()=>{
    if(startmenu.style.bottom=="50px")
    {
        startmenu.style.bottom="-655px"
    }
    else{
        startmenu.style.bottom="50px"
    }
})
function displaytime() {
    a = new Date();
    date = a.toLocaleDateString();

    time = a.toLocaleTimeString();
    document.getElementById('time').innerHTML=time;
    document.getElementById('date').innerHTML=date;
}
setInterval(displaytime, 1000);
