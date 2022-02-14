function addNewWEField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("mt-2");
    newNode.classList.add("weField");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter Here');

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}


function addNewAQField() {

    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("mt-2");
    newNode.classList.add("weField");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter Here');

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("acAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}


//Generate CV 
function generateCv() {

    let nameField = document.getElementById("nameField").value;
    document.getElementById('nameT1').innerHTML = nameField;
    document.getElementById('nameT2').innerHTML = nameField;

    let contactField = document.getElementById("contactField").value;
    document.getElementById('contactT').innerHTML = contactField;

    let adressField = document.getElementById("adressField").value;
    document.getElementById('addressT').innerHTML = adressField;

    let fbField = document.getElementById("fbField").value;
    document.getElementById('fbT').innerHTML = fbField;

    let instaField = document.getElementById("instaField").value;
    document.getElementById('instaT').innerHTML = instaField;

    let linkedField = document.getElementById("linkedField").value;
    document.getElementById('linkedT').innerHTML = linkedField;

    let objectiveField = document.getElementById("objectiveField").value;
    document.getElementById('objectiveT').innerHTML = objectiveField;

    // we
    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        str += `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML = str;


    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";
    for (let f of aqs) {
        str1 += `<li> ${f.value} </li>`;
    }
    document.getElementById('aqT').innerHTML = str1;

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-templete').style.display = 'block';

}

function printCv() {
    window.print();
}