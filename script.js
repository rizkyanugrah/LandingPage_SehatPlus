//6. Make Function handleGetFormData For Handle From Input By User
function handleGetFormData() {
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  let zipCode = document.getElementById("zip-code").value;
  let status = document.getElementById("status").checked;

  return {
    name: name,
    city: city,
    email: email,
    zipCode: zipCode,
    status: status,
  };
}

//7. Make Function isNumber For Check Zip-Code is Not a Number
function isNumber(string) {
  return !isNaN(string);
}

//8. Make Function checkboxIsChecked For Check Input is Checked Or Not
function checkboxIsChecked() {
  let status = document.getElementById("status");
  if (status.checked) {
    return true;
  } else {
    return false;
  }
}

//9. Make Function validateFormData
function validateFormData(formData) {
  if (
    formData.name !== null &&
    formData.city !== null &&
    formData.email !== null &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked(formData.status)
  ) {
    return true;
  } else {
    return false;
  }
}

//10. Make Function Submit For Handle Proses Submit Form
function submit() {
  const formData = handleGetFormData();
  if (validateFormData(formData)) {
    document.getElementById("warning").textContent = "";
  } else {
    document.getElementById("warning").textContent =
      "Periksa form anda sekali lagi";
  }
}

// Call Function submit when form on click submit
document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
});
