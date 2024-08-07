let select=document.querySelectorAll('.currency')//to apply the api to the dropdown box(2 dropdown box)
let btn=document.getElementById('btn')
let input=document.getElementById('input')
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displaydropdown(res))
function displaydropdown(res)
{
let curr=Object.entries(res)//converting to array
for(let i=0;i<curr.length;i++)//traversing the array
{
    let opt=`<option value="${curr[i][0]}">${curr[i][0]}</option>`
    //console.log(curr[i][0])//country code printing
    select[0].innerHTML+=opt//dropdown 1 (+ is used to add each and every option to dropdown)
    select[1].innerHTML+=opt//dropdown 2
}
}
btn.addEventListener('click',()=>{
let curr1 =select[0].value//1st dropdown
let curr2=select[1].value
let inputval=input.value
if(curr1==curr2)
    alert("choose different currencies")
else
convert(curr1,curr2,inputval)
});
function convert(curr1,curr2,inputval)//copy paste from website
{
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputval}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    //alert(`10 GBP = ${data.rates.USD} USD`);
    document.getElementById('result').value=Object.values(data.rates)[0]
  });
}