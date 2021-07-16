//variable declaration and assigning
const uppercaseletters = document.getElementById('uppercase');
const lowercaseletters = document.getElementById('lowercase');
const symbols = document.getElementById('symbols');
const numbers = document.getElementById('number');
const lengthpassword = document.getElementById('length');
const generatebtn = document.getElementById('generate');
const generatedpassword = document.getElementById('password');

//event listener
generatebtn.addEventListener('click', () => {
//getting the checked elements and length 
    const uppercase = uppercaseletters.checked;
    const lowercase = lowercaseletters.checked;
    const symbol = symbols.checked;
    const number = numbers.checked;
    const length = lengthpassword.value;
//empty variable declaration 
    const randomselector = [];
    const password = [];
//creating array for aplhabets, symbols, numbers
    const uppercasealphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowercasealphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const sym = ['!', '@', '#', '$', '%', '&', ',', '=', '+', '/', ';', '-', '_', '*', '<', '>'];
    const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
//deriving random uppercaseletters using if statement and loops
    if (uppercase === true){
        for (let i = 0; i <= uppercasealphabets.length; i++){
            randomselector.push(uppercasealphabets[i]);
        }
    }
 //deriving random lowercaseletters using if statement and loops
    if (lowercase === true){
        for (let i = 0; i <= lowercasealphabets.length; i++){
            randomselector.push(lowercasealphabets[i]);
        }    
    }
//deriving random symbols using if statement and loops
    if (symbol === true){
        for (let i = 0; i <= sym.length; i++){
            randomselector.push(sym[i]);
        }    
    }
//derivining random numbers using if statement and loops
    if (number === true){
        for (let i = 0; i <= num.length; i++){
            randomselector.push(num[i]);
        }    
    }
//deriving password uisng loop and random selector
    for (let i = 0; i <= length; i++){
        password.push(randomselector[Math.floor(Math.random() * randomselector.length)])
    }
//displaying generated password in div 
    generatedpassword.innerHTML = password.join('');
   
});




