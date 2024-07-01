let arrayOfUsers = JSON.parse(window.localStorage.getItem("Users")) || [];
let id = arrayOfUsers.length + 1;
let userObj = {};

document.addEventListener("DOMContentLoaded", function () {
    let name1 = document.getElementById("name");
    let m1 = document.getElementById("s-nvald");

    let email = document.getElementById("email1");
    let m2 = document.getElementById("s-evald");

    let password = document.getElementById("password1");
    let m3 = document.getElementById("s-pvald1");

    let password2 = document.getElementById("password2");
    let m4 = document.getElementById("s-pvald2");

    let form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let namevalidation = /^[a-zA-Z]+ [a-zA-Z]+$/;
        let result1 = namevalidation.test(name1.value);
        if (result1) {
            m1.style.display = "block";
            m1.innerHTML = "Valid name";
            m1.style.color = "white";
        } else {
            m1.style.display = "block";
            m1.innerHTML = "Not valid name";
            m1.style.color = "red";
        }

        let emailvalidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        let result2 = emailvalidation.test(email.value);
        if (result2) {
            m2.style.display = "block";
            m2.innerHTML = "Valid email";
            m2.style.color = "white";
        } else {
            m2.style.display = "block";
            m2.innerHTML = "Not valid email";
            m2.style.color = "red";
        }

        let Passwordvalidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&()])[A-Za-z\d!@#$%^&()]{6,18}$/;
        let result3 = Passwordvalidation.test(password.value);
        if (result3) {
            m3.style.display = "block";
            m3.innerHTML = "Valid password";
            m3.style.color = "white";
        } else {
            m3.style.display = "block";
            m3.innerHTML = "Not valid password";
            m3.style.color = "red";
        }

        if (password2.value != password.value) {
            m4.style.display = "block";
            m4.innerHTML = "Passwords do not match";
            m4.style.color = "red";
        } else {
            m4.style.display = "block";
            m4.innerHTML = "Passwords match";
            m4.style.color = "white";
        }

        if (result1 && result2 && result3 && password2.value === password.value) {
            userObj = {
                id: id++,
                Name: name1.value,
                email: email.value,
                password: password.value,
            };
            arrayOfUsers.push(userObj);
            window.localStorage.setItem("Users", JSON.stringify(arrayOfUsers));
            alert("Account created");
            window.location = "/login.html";
        } else {
            alert("Please fill out all fields correctly.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("form");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let arrayOfUsers = JSON.parse(window.localStorage.getItem("Users")) || [];

        let foundUser = arrayOfUsers.find(user => user.email === emailInput.value && user.password === passwordInput.value);

        if (foundUser) {
            localStorage.setItem("currentUser", JSON.stringify(foundUser));
            alert("Login successful!");
            window.location.href = "page_after_login.html";
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
