//---------------------calculator starts here------------------------------------

const nav = document.createElement("nav");//create nav
const taga = document.createElement("a");//create a
const span = document.createElement("span");//create span
span.innerHTML="My calc";//add text to span
taga.append(span);//append span to a tag
nav.append(taga);//append nav to a tag

let section = document.createElement("section");
section.setAttribute("class","sec");
const calculator_Box =  document.createElement("div");
calculator_Box.setAttribute("class","calculator-Box");

let togglediv =document.createElement("div");
togglediv.setAttribute("class","toggle");

const calculator_Box__container = document.createElement("div");
calculator_Box__container.setAttribute("class","calculator-Box__container");
calculator_Box__container.innerHTML=`

<input onkeypress="return isNumberKey(event)"  type="text" id="inputext" placeholder="0">
  <button onclick="clearbutton()">C</button>
  <button onclick="deletebutton()">DEL</button>
  <button onclick="calculator('%')">%</button>
  <button onclick="calculator('/')">/</button>
  <button onclick="calculator('7')">7</button>
  <button onclick="calculator('8')">8</button>
  <button onclick="calculator('9')">9</button>
  <button onclick="calculator('*')">*</button>
  <button onclick="calculator('4')">4</button>
  <button onclick="calculator('5')">5</button>
  <button onclick="calculator('6')">6</button>
  <button onclick="calculator('-')">-</button>
  <button onclick="calculator('1')">1</button>
  <button onclick="calculator('2')">2</button>
  <button onclick="calculator('3')">3</button>
  <button onclick="calculator('+')">+</button>
  <button onclick="calculator('.')">.</button>
  <button onclick="calculator('0')">0</button>
  <button class="calculator-Box__container--equal" onclick="Result()">=</button>
`;

calculator_Box.append(togglediv,calculator_Box__container);
section.append(calculator_Box);
document.body.append(nav);
document.body.append(section);
//-----------------calculator ENDS here-----------------------------------------

//----------------scrpit for toggle----------------------------------------------
const sec = document.querySelector('.sec');
const toggle = document.querySelector('.toggle');
toggle.onclick = function()
{
    sec.classList.toggle('dark');
}
//----------------scrpit for toggle-----------------------------------------------

// script starts here
let result = document.getElementById("inputext");
//--------------------only numbers are allowed------------------------------------
function isNumberKey(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
   {
    alert("only numbers are allowed");
    return false;
   }
    else{
        return true;
    }

}

//--------------------calculator-------------------------------------------------
let calculator = (number) =>{      
    result.value = result.value + number;
}

//--------------------result-----------------------------------------------------
let Result = () =>{
if(result.value === "")
{
    alert("please! Enter the Input to perform the calculation.")
    return false;
}
try{
    result.value=eval(result.value)
  }
  catch(err)
  {
      alert("please! Enter the valid Input")
      result.value = "";

  }
}


//---------------------clear button function---------------------------------------
function clearbutton()
{
    if(result.value === "")
{
    alert("All the numbers are cleared.")
    return false;
}
    result.value = "";
}

//----------------------delete button function------------------------------------
function deletebutton()
{
    if(result.value === "")
    {
        alert("All the numbers are deleted.")
        return false;
    }
    // slice method as two para( start and end)
    result.value = result.value.slice(0,-1);
}
