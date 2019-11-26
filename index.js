/*
Author: Tristan Denyer
GitHub repo: https://github.com/tristandenyer/clone-section-of-form-ES6-or-jQuery/tree/master/ES6-JavaScript
Demo: https://tristandenyer.github.io/Clone-section-of-form-using-jQuery/ES6-JavaScript/
Ver: 0.1.4-alpha

The MIT License (MIT)

Copyright (c) 2018 Tristan Denyer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
const btnDel = document.getElementById("btnDel");
const btnAdd = document.getElementById("btnAdd");

// Enable the "add" button
btnAdd.disabled = false;
// Disable the "remove" button
btnDel.disabled = true;

btnAdd.addEventListener(
  "click",
  function () {
    // Checks to see how many duplicated sections we currently have
    let num = document.getElementsByClassName("clonedInput").length;
    // The numeric ID of the new input field being added, increasing by 1 each time
    let newNum = num + 1;
    let newElem = document.getElementById("entry" + num);
    let newElemCloned = newElem.cloneNode(true);
    // create the new element via clone(), and manipulate it's ID using newNum value
    newElemCloned.setAttribute("id", `entry${newNum}`);

    // Header - <H2>
    let header = newElemCloned.querySelector(".heading-reference");
    header.setAttribute("id", "ID" + newNum + "_reference");
    header.setAttribute("name", "ID" + newNum + "_reference");
    header.innerHTML = "Medicament #" + newNum;

    // Title - <select>
    let medicamentLabel = newElemCloned.querySelector(".label_medicament");
    medicamentLabel.setAttribute("for", "ID" + newNum + "_medicament");
    let medicamentSelect = newElemCloned.querySelector(".select_medicament");
    medicamentSelect.setAttribute("id", "ID" + newNum + "_medicament");
    medicamentSelect.setAttribute("name", "ID" + newNum + "_medicament");

    // First name - <input> text
    let quantiteLabel = newElemCloned.querySelector(".label_quantite");
    quantiteLabel.setAttribute("for", "ID" + newNum + "_quantite");
    let quantiteInput = newElemCloned.querySelector(".input_quantite");
    quantiteInput.setAttribute("id", "ID" + newNum + "_quantite");
    quantiteInput.setAttribute("name", "ID" + newNum + "_quantite");
    quantiteInput.value = "";

    // Last name - <input> text
    let posologieLabel = newElemCloned.querySelector(".label_posologie");
    posologieLabel.setAttribute("for", "ID" + newNum + "_posologie");
    let posologieInput = newElemCloned.querySelector(".input_posologie");
    posologieInput.setAttribute("id", "ID" + newNum + "_posologie");
    posologieInput.setAttribute("name", "ID" + newNum + "_posologie");
    posologieInput.value = "";


    let dureTraitLabel = newElemCloned.querySelector(".label_dureTrait");
    dureTraitLabel.setAttribute("for", "ID" + newNum + "_dureTrait");
    let dureTraitInput = newElemCloned.querySelector(".input_dureTrait");
    dureTraitInput.setAttribute("id", "ID" + newNum + "_dureTrait");
    dureTraitInput.setAttribute("name", "ID" + newNum + "_dureTrait");
    dureTraitInput.value = "";

    /*  Color - <input> checkboxes
        Note that each input_checkboxitem has a unique identifier "-0".
        This helps pair up duplicated checkboxes and labels correctly. A bit verbose, at the moment.
    */
  

    

   

    // Insert the new element after the last "duplicatable" input field
    newElem.after(newElemCloned);

    // Enable the "remove" button. This only shows once you have a duplicated section.
    btnDel.disabled = false;

    // Right now you can only add 4 sections, for a total of 5. Change '5' below to the max number of sections you want to allow.
    if (newNum === 10) {
      btnAdd.disabled = true;
      btnAdd.setAttribute("value", "You've reached the limit");
    }
  },
  false
);

btnDel.addEventListener(
  "click",
  function () {
    // check how many duplicated sections we currently have
    let num = document.getElementsByClassName("clonedInput").length;

    // Confirmation dialog box
    if (
      confirm(
        `Are you sure you wish to remove Entry #${num}? This cannot be undone.`
      )
    ) {
      // remove last section
      document.getElementById("entry" + num).remove(); // TODO: .remove doesn't work in IE :|
      // update num
      num = document.getElementsByClassName("clonedInput").length;
      if (num == 1) {
        btnDel.disabled = true;
      }
      if (num < 5) {
        btnAdd.disabled = false;
        btnAdd.setAttribute("value", "add section");
      }
    }
  },
  false
);
