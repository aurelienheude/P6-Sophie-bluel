import { apiUrl } from "../../modules/config.js";

const formInput = document.querySelectorAll('.form__grp input');
const form = document.querySelector('.form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche la soumission par défaut du formulaire

    const email = formInput[0].value;
    const password = formInput[1].value;
    
    const formData = {
        email: email,
        password: password
    };
    apiUrl.post('/users/login', formData)
    .then(data => {
        window.location.href = "index.html";
    })
    .catch(error => {
        console.error(error);
        const nodeParent = document.querySelector(".form");
        const newNodeElement = document.createElement("p");
        newNodeElement.innerText = "Email ou mot de passe invalide";
        nodeParent.appendChild(newNodeElement);
    });
});