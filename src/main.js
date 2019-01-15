import { Farm } from './farm.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  let farm = new Farm();
  let farmBoard = document.getElementById("farmBoard");
  farm.farmMap.forEach(row => {
    let rowP = document.createElement("p");
    rowP.innerHTML = row;
    farmBoard.appendChild(rowP);
  });
});
