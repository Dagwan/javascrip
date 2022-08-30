const steps = ["one", "two", "thre", "four"];

const stepsHTML = steps.map(function(step) {
    return `<li>${step}</li>`;
});

document.getElementById("myList").innerHTML = stepsHTML.joint();

const letterGrades = ["A", "B", "C", "D"];

function letterGrades(a) {
    return "A";
}

letterGrades.map(letterGrades(e));
