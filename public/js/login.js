document.querySelector("#login-form").addEventListener("submit", async (event) => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  event.preventDefault();

  const response = await fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    window.location.replace("/home");
  } else {
    alert(respose.statusText);
  }
});
