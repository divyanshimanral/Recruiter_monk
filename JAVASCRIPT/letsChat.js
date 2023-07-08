let infoForm = document.getElementById("info-form");

infoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let userName = document.getElementById("name");
  let userEmail = document.getElementById("email");
  let userCompany = document.getElementById("Company");
  let userPhone = document.getElementById("Phone");

  let name = userName.value;
  let email = userEmail.value;
  let Company = userCompany.value;
  let Phone = userPhone.value;

  // Storing all the information
  localStorage.setItem("username", name);
  console.log(name);
  localStorage.setItem("email", email);
  localStorage.setItem("Com", Company);
  localStorage.setItem("Contact", Phone);

  // Clear form
  userName.value = "";
  userEmail.value = "";
  userCompany.value = "";
  userPhone.value = "";

  alert("User information submitted successfully! We'll contact you shortly");
});
