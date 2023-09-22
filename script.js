//6. Make Function handleGetFormData For Handle From Input By User
function handleGetFormData() {
  var name = document.getElementById("name").value;
  var city = document.getElementById("city").value;
  var email = document.getElementById("email").value;
  var zipCode = document.getElementById("zip-code").value;
  var status = document.getElementById("status").checked;

  return {
    name: name,
    city: city,
    email: email,
    zipCode: zipCode,
    status: status,
  };
}

//7.Make Function isNumber For Check Zip-Code is Not a Number
function isNumber(string) {
  return !isNaN(string);
}

//8.
