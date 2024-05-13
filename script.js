const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  e.preventDefault();

  const userData = JSON.stringify({
    name: name.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
    city: city.value,
    state: state.value,
    image: "",
  });
  
  fetch("http://10.92.198.38:3001/signup", {
    method: "Post",
    body: userData,
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

