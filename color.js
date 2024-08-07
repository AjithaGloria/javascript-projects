const btn=document.getElementById("btn")
const color=document.getElementById("color")
const wrap=document.getElementById("wrap")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']//hexadec lies btwn these
btn.addEventListener('click',change)
function change()
{
    let hexcolor="#"
    for(let i=1;i<=6;i++)
    {
hexcolor=hexcolor+display() // returns from second function and appends the random number to #
    }
    wrap.style.backgroundColor=hexcolor //to change the wrap color
    color.innerHTML=hexcolor // changing the FFFFFF to theb random colour code generated
}
function display()
{
    let randomno=Math.floor(Math.random()*16)//we need 16 random no
    return hex[randomno] //return randomno generated in above step with hex array that is from 1 to F

}