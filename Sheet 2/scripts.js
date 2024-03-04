function findPrimes() {
  const input = document.getElementById("numbers").value;
  const numbersArray = input.split("-"); 

  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  const primeNumbers = numbersArray.find(isPrime); // find() only returns the first element passing the test
  let primeList = "";

  for (let num of numbersArray) {
    if (isPrime(num)) {
      primeList += num + " ";
    }
  }

  const resText = document.getElementById("result");
  (primeList) ? 
    resText.innerHTML = "Prime Numbers: " + primeList :
      resText.innerHTML = "No prime numbers";
  
}
function handleString(){
  const strInput = document.getElementById("string").value;
  const strOut= strInput.split('');

  for(i=0; i<strInput.length; i+=4){
    if(i%2 == 0){ 
      [strOut[i], strOut[i + 2]] = [strOut[i + 2], strOut[i]];
    }
  }
  const strRes = document.getElementById("strRes");
  strRes.innerHTML= strOut.join('');
  //strRes.innerHTML= strOut.reduce((a,k)=>`${a}${k}`);

}

class Student {
  constructor(name, age, gpa) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
  }
}

let students = [];

function addStudent() {
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById('age').value);
  const gpa = parseFloat(document.getElementById('gpa').value);

  const student = new Student(name, age, gpa);
  students.push(student);

  const textArea = document.getElementById("resTA");
  textArea.value = "";

  students.forEach(student => {
    textArea.value += `Name: ${student.name}, Age: ${student.age}, GPA: ${student.gpa}\n`;
  });

  const lowGpaStudents = students.filter(student => student.gpa < 2);
  var warning = false;
  if (lowGpaStudents.length > 3 && warning) {
    alert("Warning: More than 3 students have a GPA less than 2.");
    warning= true;
  }
}

function sortStudents() {
  const sortSel = document.getElementById("sort");
  const textArea = document.getElementById("resTA");

  sortSel.addEventListener("change", (e) => {
    e.preventDefault();

    if (sortSel.value === "gpaDSC") {
      students.sort((a, b) => b.gpa - a.gpa);
    } else if (sortSel.value === "nameASC") {
      students.sort((a, b) => a.name.localeCompare(b.name));
    }

    textArea.value = "";
    students.forEach(student => {
      textArea.value += `Name: ${student.name}, Age: ${student.age}, GPA: ${student.gpa}\n`;
    });
  });
}

sortStudents();


function qFourArr(){
  const words = document.getElementById('words').value;
  const wordArr = words.split(" ");
  const resArr= [];
  const resultTxt= document.getElementById('qFourRes');

  for(i=0; i<wordArr.length; i++){
    if(new Set(wordArr[i]).size === wordArr[i].length){
      resArr.push(wordArr[i]);
    }
  }
  resultTxt.innerHTML= resArr;
}
