//document.getElementById("divideButton").addEventListener("click",function() {
   // console.log("divide");

//});

let divideButton = document.getElementById("divideButton");

divideButton.addEventListener("click", function() {
    console.log("divide");
});


let divideButtonActual = document.getElementById("divideButtonActual");

divideButtonActual.addEventListener("click", function() {
    let foo = Number(document.getElementById("foo").value);
    let bar = Number(document.getElementById("bar").value);

    const result = foo/bar;

if (isNaN(result)) {
    console.log("You can't divide us!!");
} else {
    console.log(result);
}
});