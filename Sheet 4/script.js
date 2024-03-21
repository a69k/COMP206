checkUser = () => {
  const username = document.getElementById("user");
  let userValid = false;

  if (username.value.length >= 6 && username.value.length <= 12 && username.value !== "") {
    userValid = true;
  } else {
    const uLabel = document.getElementById("uLabel");
    uLabel.style.color = 'red';
  }

  username.addEventListener("focus", () => {
    uLabel.style.color = 'rgb(33, 247, 229)';
  });

  return userValid;
}

function correctpatt(ele) {
  const re = /[a-z]/ && /[A-Z]/;
  return re.test(ele);
}

checkPass = () => {
  const password = document.getElementById("pass");
  let passValid = false;

  if (password.value.length >= 6 && correctpatt(password.value)) {
    passValid = true;
  } else {
    const pLabel = document.getElementById("pLabel");
    pLabel.style.color = 'red';
  }

  password.addEventListener("focus", () => {
    pLabel.style.color = 'rgb(33, 247, 229)';
  });
  return passValid;
}
checkSem = () => {
  const semOptions = document.querySelectorAll("option");
  let semValid = false;

  for (let i = 1; i < semOptions.length; i++) {
    if (semOptions[i].selected) {
      semValid = true;
      break;
    }
  }

  const semLabel = document.getElementById('sLabel');
  if (!semValid) {
    semLabel.style.color = "red";
  } else {
    semLabel.style.color = 'rgb(33, 247, 229)';
  }

  document.getElementById("sel").addEventListener("focus", () => {
    semLabel.style.color = 'rgb(33, 247, 229)';
  });

  return semValid;
}

const checkboxes = document.querySelectorAll("input[type=checkbox]");

checkboxes[3].addEventListener("change", () => {
  if (checkboxes[3].checked) {
    window.alert("You're Signing up for out newsletter");
  }
});

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();
  const checkboxes = document.querySelectorAll("input[type=checkbox]");

  if (checkPass() && checkSem() && checkUser()) {
    const textarea = document.createElement("textarea");
    document.forms[0].appendChild(textarea);
    textarea.setAttribute("rows", "8");
    textarea.textContent = `name : ${document.getElementById("user").value} \npassword : ${document.getElementById("pass").value}\nsemester: `;

    const semOptions = document.querySelectorAll("option");

    for (let i = 0; i < semOptions.length; i++) {
      if (semOptions[i].selected) {
        textarea.textContent += `${semOptions[i].value}\n`;
      }
    }
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        textarea.textContent += `${checkboxes[i].value}\n`;
      }
    }
  }
});