const login = document.querySelector("form");

login.addEventListener("submit", (e) => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  e.preventDefault();

  const userData = JSON.stringify({
    email: email.value,
    password: password.value,
  });

  fetch("http://10.92.198.38:8080/auth/signin", {
    method: "Post",
    body: userData,
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((result) => result.json())
    .then((data) => {
      // Store the token in localStorage
      localStorage.setItem("token", data.token);
      console.log(data);
    });
});