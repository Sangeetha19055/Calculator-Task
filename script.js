//  calculator starts here
const loader_div = document.createElement("div");
loader_div.setAttribute("class", "loader");
const loader_image = document.createElement("img");
loader_image.setAttribute(
  "src",
  "https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif"
);
loader_div.append(loader_image);
document.querySelector(".page_loader").append(loader_div);

const main = document.createElement("section");
main.setAttribute("class", "main");
const nav = document.createElement("nav"); //create nav
const taga = document.createElement("a"); //create a
const span = document.createElement("span"); //create span
span.innerHTML = "My calc"; //add text to span
taga.append(span); //append span to a tag
nav.append(taga); //append nav to a tag

let section = document.createElement("section");
section.setAttribute("class", "sec");
const calculator_Box = document.createElement("div");
calculator_Box.setAttribute("class", "calculator-Box");

let togglediv = document.createElement("div");
togglediv.setAttribute("class", "toggle");

const calculator_Box__container = document.createElement("div");
calculator_Box__container.setAttribute("class", "calculator-Box__container");

calculator_Box__container.innerHTML = `

<input onkeypress="return isNumberKey(event)"  type="text" id="inputext" placeholder="0">
<!-- use onclick event -->
<!-- while passing the arguments in the function use single ' ' not " " -->
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

calculator_Box.append(togglediv, calculator_Box__container);
section.append(calculator_Box);
main.append(nav, section);
document.body.append(main);
//-----------------calculator ENDS here---------------------------

//----------------scrpit for toggle----------------------------
const sec = document.querySelector(".sec");
const toggle = document.querySelector(".toggle");
toggle.onclick = function () {
  sec.classList.toggle("dark");
};
//----------------scrpit for toggle----------------------------

// script starts here
let result = document.getElementById("inputext");

//--------------------only numbers are allowed------------------------------------
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    alert("only numbers are allowed");
    return false;
  } else {
    return true;
  }
}

// const numb=213231221;

function separator(numb) {
  console.log(numb);
  var str = numb.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
}
//calculator

let calculator = (number) => {
  result.value = result.value + number;
};

//reslut
let Result = () => {
  if (result.value === "") {
    alert("please! Enter Input to perform the calculation.");
    return false;
  }
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("please! Enter the valid Input");
    result.value = "";
  }
};
// clear button function
function clearbutton() {
  if (result.value === "") {
    alert("All the numbers are cleared.");
    return false;
  }
  result.value = "";
}

// delete button function
function deletebutton() {
  if (result.value === "") {
    alert("All the numbers are deleted.");
    return false;
  }
  // slice method as two para( start and end)
  result.value = result.value.slice(0, -1);
}

// loader script
const loader = document.querySelector(".loader");
const main_content = document.querySelector(".main");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main_content.style.display = "block";
    setTimeout(() => (main_content.style.opacity = 1), 50);
  }, 4000);
});
