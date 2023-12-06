import { spaceMemberBuilder } from '../edit/createSpaceMemberElement.js';
import { changeToWorkModal } from '../modal/modal.js';

export const checkUserAuthentification = async () => {
    if (localStorage.getItem('token')) {

        spaceMemberBuilder();

        const logout = document.querySelector("body > div.container > header > nav > ul > li:nth-child(3) > a");
        logout.addEventListener("click", () => {
            localStorage.removeItem('token');
            location.reload();
        });

        const editProjectBtn = document.querySelector(".editProject");
        
        editProjectBtn.addEventListener("click", () => {
            changeToWorkModal();
        });

        /**/
    }
}