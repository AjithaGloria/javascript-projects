ampm=document.getElementById('ampm')
function display()
{
    let displaytime=new Date()
    let hr=addzero(displaytime.getHours())
    let min=addzero(displaytime.getMinutes())
    let sec=addzero(displaytime.getSeconds())
    document.getElementById("hours").innerHTML=hr
    document.getElementById("mins").innerHTML=min
    document.getElementById("seconds").innerHTML=sec
    if(hr>12)
    {
        ampm.innerHTML="PM"
        hr=hr-12
    }

}
     function addzero(num){
        return num<10?"0"+num:num
    }
   

setInterval(display,100);