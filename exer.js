function run() {

    //Getting the value of b and n in the actual website.
    let b = document.getElementById("input_base").value;
    let n = document.getElementById("input_exponent").value;

    // Function to find the power of a number (Exponential Value).
    let mathSol = (b,n) => b ** n;
   
    console.log(mathSol(b,n))
    document.getElementById("output").innerHTML = mathSol(b,n);
}
