var age = document.querySelector("#age");
var height = document.querySelector("#height");
var weight = document.querySelector("#weight");
var male = document.querySelector("#m");
var female = document.querySelector("#f");
var form = document.querySelector("#form");

function validateForm() {
    if (
        age.value == "" ||
        height.value == "" ||
        weight.value == "" ||
        (male.checked == false && female.checked == false)
    ) {
        alert("All fields are required!");
        document
            .querySelector("submit")
            .removeEventListener("click", countBmi);
    } else {
        countBmi();
    }
}

document.querySelector("#submit").addEventListener("click", validateForm);
function countBmi() {
    var p = [age.value, height.value, weight.value];
    if (male.checked) {
        p.push("male");
    } else if (female.checked) {
        p.push("female");
    }
    form.reset();
    
    var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);
    var result = "";
    if (bmi < 18.5) {
        result = "Underweight";
    } 
    else if (18.5 <= bmi && bmi <= 24.9) {
        result = "Healthy";
    } 
    else if (25 <= bmi && bmi <= 29.9) {
        result = "Overweight";
    } 
    else if (30 <= bmi && bmi <= 34.9) {
        result = "Obese";
    } 
    else if (35 <= bmi) {
        result = "Extremely obese";
    }

    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    var t = document.createTextNode(result);
    var b = document.createTextNode("BMI: ");
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));
    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.querySelector("#submit").removeEventListener("click", countBmi);
    document
        .querySelector("#submit")
        .removeEventListener("click", validateForm);
}

document.querySelector("submit").addEventListener("click", countBmi);