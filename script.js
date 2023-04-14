function fetchUser() {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      displayUser(data.results[0]);
    });
}

function displayUser(user) {
  const newUser = document.getElementById("main");
  newUser.innerHTML = `<img src="${user.picture.large}" alt="" />
      <p><span>Name: </span>${user.name.first} ${user.name.last}</p>
      <p><span>Email: </span>${user.email}</p>
      <p><span>Phone: </span>${user.phone}</p>
      <p><span>Location: </span>${user.location.state}, ${user.location.country}</p>
      <p><span>Age: </span>${user.dob.age}</p>`;
}

document.querySelector("button").addEventListener("click", fetchUser);

fetchUser();
