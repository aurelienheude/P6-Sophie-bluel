import { apiUrl } from "../../modules/config.js";

const formInput = document.querySelectorAll('.form__grp input');
const form = document.querySelector('.form');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
        email: formInput[0].value,
        password: formInput[1].value
    };

    await apiUrl.auth("/users/login", formData);
});