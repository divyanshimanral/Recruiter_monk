const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

let form = document.getElementById("login-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Define all the inputs
  let userNameInput = document.getElementById("userName");
  let userEmailInput = document.getElementById("userEmail");
  let userPasswordInput = document.getElementById("userPassword");

  // Get their values
  let name = userNameInput.value;
  let email = userEmailInput.value;
  let password = userPasswordInput.value;

  // Retrieve stored userArray from local storage
  let userArray = JSON.parse(localStorage.getItem("userArray")) || [];

  let id = 0;
  for (let i = 0; i < userArray.length; i++) {
    id += i;
  }
  var userData = {
    id: id,
    name: name,
    email: email,
    password: password,
  };

  // Add userData to the userArray
  userArray.push(userData);

  // Save userArray in local storage
  localStorage.setItem("userArray", JSON.stringify(userArray));

  // Clear the form
  userNameInput.value = "";
  userEmailInput.value = "";
  userPasswordInput.value = "";

  //   get values from local storage
  let storedData = JSON.parse(localStorage.getItem("userArray"));
  let i = 
  console.log(storedData[0].name)
  console.log(name)
  if(storedData && storedData.name === name && storedData.email === email) {
    alert('You are already register kindly login your account')
  }

    // console.log(userArray);
  //   if (storedNa)
});



