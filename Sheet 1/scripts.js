function calculate() {
  const operand1 = document.getElementById("operand1").value;
  const operand2 = document.getElementById("operand2").value;

  const error = document.getElementById("error");
  error.innerHTML = "";
  if (operand2 === 0) {
    error.innerHTML = "cant divide or mod by zero mate";
    return;
  }
  const table = document.getElementById("results");
  if(!(isNaN(operand1))&&!(isNaN(operand2))){ // i added this to the other Questions too just so its not dumb
  table.innerHTML = `
    <tr>
      <th>Addition</th>
      <td>${parseFloat(operand1) + parseFloat(operand2)}</td> 
    </tr>
    <tr>
      <th>Subtraction</th>
      <td>${operand1 - operand2}</td>
    </tr>
    <tr>
      <th>Multiplication</th>
      <td>${operand1 * operand2}</td>
    </tr>
    <tr>
      <th>Division</th>
      <td>${operand1 / operand2}</td>
    </tr>
    <tr>
      <th>Remainder</th>
      <td>${operand1 % operand2}</td>
    </tr>
  `;
  }// the parseFloat or parseInt i used because i got 4+2 = 42 i just had to parse it into a number for addition so it doesnt concatinate
}

////////////////////////////////////////////////////////

function tempConvert() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  const fCheck = document.getElementById("fahrenheit");
  const kCheck = document.getElementById("kelvin");

    if (celsius === "" || isNaN(celsius)) {
    alert("put in a valid temp bozo");
  }

  const fRes = document.getElementById("fResult");
  const kRes = document.getElementById("kResult");
    if (fCheck.checked) {
    const fahrenheit = (celsius * 9/5) + 32;
    fRes.innerHTML = `Fahrenheit: ${fahrenheit}°F`;
  } else {
    fRes.innerHTML = "";
  }

  if (kCheck.checked) {
    const kelvin = celsius + 273.15;
    kRes.innerHTML = `Kelvin: ${kelvin} K`;
  } else {
    kRes.innerHTML = "";
  }
}

document.getElementById("convertBtn").addEventListener("click", tempConvert);

/////////////////////////////////////////////////////////////////

const form = document.getElementById("pizza-form");
    const nameInput = document.getElementById("name");
    const sizeSelect = document.getElementById("size");

    const nameError = document.getElementById("name-error");
    const sizeError = document.getElementById("size-error");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (nameInput.value === "") {
        nameError.innerHTML = "Name is required.";
        nameError.classList.add("visible");
      } else {
        nameError.classList.remove("visible");
      }

      if (sizeSelect.value === "") {
        sizeError.innerHTML = "Size is required.";
        sizeError.classList.add("visible");
      } else {
        sizeError.classList.remove("visible");
      }

      if (nameInput.value !== "" && sizeSelect.value !== "") {
        const pizzaOrder = {
          name: nameInput.value,
          size: sizeSelect.value,
          toppings: []
        };
      
        // ill try to think of this part (getting toppings) -> its probably getting an array w/ foreach & joining
        // the errors dont work either ~~~
        
        alert(
          "Name: " + pizzaOrder.name +
          "\nSize: " + pizzaOrder.size +
          "\nToppings: " + pizzaOrder.toppings.join(", ")
        );
      }
  });

////////////////////////////////////////////////////////////////////////////////////////

const factorForm = document.getElementById("factors-form");
const numberInput = document.getElementById("number");
var alrClicked= false;


factorForm.addEventListener("submit", (e)=> {
  e.preventDefault();
  if (!alrClicked){ // without this i wouldve had the table duplicate every single time i click submit
  const number = parseInt(numberInput.value);
  const factors = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }

  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  const headerCell = document.createElement("th");
  headerCell.textContent = "Factor";
  headerRow.appendChild(headerCell);
  table.appendChild(headerRow);

  for (let i = 0; i < factors.length; i++) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.textContent = factors[i];
    row.appendChild(cell);
    table.appendChild(row);
  }

  table.classList.add(factors.length % 2 === 0 ? "blue-bg" : "green-bg");
  document.body.appendChild(table);

  console.log(`Number of factors: ${factors.length}`);
  alrClicked=!alrClicked;
}})
