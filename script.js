var box=document.createElement("div");
box.setAttribute("id","box");
var heading=document.createElement("h1");
heading.setAttribute("id","heading");
heading.innerHTML="Nationality By Using Name"
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("name","inp-name")
input.setAttribute("id","name");
input.setAttribute("placeholder","Enter the Name...");
var button=document.createElement("button");
button.addEventListener("click",getdata);
button.setAttribute("class","btn btn-primary")
button.innerHTML="Search";
var button1=document.createElement("button");
button1.addEventListener("click",resetdata);
button1.setAttribute("class","btn btn-danger")
button1.innerHTML="Reset";
var result=document.createElement("div");
result.setAttribute("id","result");
box.append(heading,input,button,button1,result);
document.body.append(box);
async function getdata(){
    try{
        var getting_name=document.getElementById("name").value;
        console.log(getting_name);
        var url=`https://api.nationalize.io/?name=${getting_name}`
        var res=await fetch(url);
        var res1=await res.json();
        //console.log(res1.country)
        //console.log(res1.country[0].country_id);
        //console.log(res1.country[1].country_id);
        const regionNames = new Intl.DisplayNames(
            ['en'], {type: 'region'}
          );
        console.log(regionNames.of(res1.country[0].country_id));
        console.log(regionNames.of(res1.country[1].country_id));
        console.log(res1.country[0].probability);
        console.log(res1.country[1].probability);
        var display=document.getElementById("result");
        display.innerHTML=`
        <b>Country Name 1:</b>${regionNames.of(res1.country[0].country_id)}<br>
        <b>Probability of Country 1:</b> ${res1.country[0].probability}<br>
        <b>Country Name 2:</b>${regionNames.of(res1.country[1].country_id)}<br>
        <b>Probability of Country 2:</b> ${res1.country[1].probability}`
    }
    catch(error){
        console.log(error);
    }
}
function resetdata(){
    var getting_name1=document.getElementById("name");
 var reset=document.getElementById("reset");
 var display=document.getElementById("result");
getting_name1.value=" "
result.innerHTML=" "
}











