{/* <button onclick="typeWriter()">Click me</button>

<p id="demo"></p>

// <script> */}
document.getElementById("login");
document.getElementById("demo");
let type = document.getElementById("demo1");
var i = 0;
var txt = 'Poditivity';
var speed = 100;

function typeWriter() {
   if (i < txt.length) {
   type.innerHTML += txt.charAt(i);
     i++;
     setTimeout(typeWriter, speed);
   }
 }
type.addEventListener("animationend",typeWriter);