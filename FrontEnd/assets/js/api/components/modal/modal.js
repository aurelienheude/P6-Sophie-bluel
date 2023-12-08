import { viewWorksModal } from "./works/viewWorksModal.js";
import { viewCategoriesOption } from "./upload/viewCategoriesUpload.js";
import { deleteWorkHandler } from "./works/deleteWorks.js";
import { btnFormValidation } from "./upload/addWorks.js";

const closeModal = () => {
    const closeModalBtn = document.getElementById("closeModal");

    closeModalBtn.addEventListener("click", () => {
        const overlay = document.querySelector('.overlay');
        overlay.remove();
    });
};

const changeModalBtn = (modal) => {
    if(modal === 'deleteWorks'){
        const btnAddWork = document.getElementById("addWork");

        btnAddWork.addEventListener("click", () => {
            const overlay = document.querySelector('.overlay');
            overlay.remove();
            changeToUploadModal();
        });
    }else if(modal === 'uploadWorks'){
        const btnAddWork = document.getElementById("deleteWorkModal");

        btnAddWork.addEventListener("click", () => {
            const overlay = document.querySelector('.overlay');
            overlay.remove();
            changeToWorkModal();
        });
    }
};

export const changeToWorkModal = () => {
    const workModal = `
        <div id='modalWork' class='overlay'>
            <dialog class='modal'>
            <div class='modal__headerControls'>
            <svg id='closeModal' width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M11.6546 2.05106C12.1235 1.58214 12.1235 0.820611 11.6546 0.351691C11.1856 -0.11723 10.4241 -0.11723 9.95519 0.351691L6.005 4.30563L2.05106 0.355442C1.58214 -0.113479 0.820611 -0.113479 0.351691 0.355442C-0.11723 0.824363 -0.11723 1.58589 0.351691 2.05481L4.30563 6.005L0.355442 9.95894C-0.113479 10.4279 -0.113479 11.1894 0.355442 11.6583C0.824363 12.1272 1.58589 12.1272 2.05481 11.6583L6.005 7.70437L9.95894 11.6546C10.4279 12.1235 11.1894 12.1235 11.6583 11.6546C12.1272 11.1856 12.1272 10.4241 11.6583 9.95519L7.70437 6.005L11.6546 2.05106Z' fill='black'/>
            </svg>
            </div>
            <h3 class='modal__title'>Galerie photo</h3>
                <div class='modal__content'>
                </div>
                <button id='addWork' class='btn'>Ajouter une photo</button>
            </dialog>
        </div>
        `;

    document.body.insertAdjacentHTML('afterbegin', workModal);

    viewWorksModal();
    const headerControls = document.querySelector(".modal__headerControls");
    headerControls.style.justifyContent = "flex-end";

    changeModalBtn("deleteWorks");
    closeModal();

    setTimeout(() => {
        deleteWorkHandler()
    }, 500);
};

const changeToUploadModal = () => {
    const uploadModal = `
    <div id='modalUpload' class='overlay'>
    <dialog class='modal'>
        <div class='modal__headerControls'>
            <svg id='deleteWorkModal' width='21' height='21' viewBox='0 0 21 21' fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M0.439478 8.94458C-0.146493 9.53055 -0.146493 10.4822 0.439478 11.0681L7.9399 18.5686C8.52587 19.1545 9.47748 19.1545 10.0635 18.5686C10.6494 17.9826 10.6494 17.031 10.0635 16.445L5.11786 11.5041H19.4999C20.3297 11.5041 21 10.8338 21 10.004C21 9.17428 20.3297 8.50393 19.4999 8.50393H5.12255L10.0588 3.56303C10.6447 2.97706 10.6447 2.02545 10.0588 1.43948C9.47279 0.853507 8.52118 0.853507 7.93521 1.43948L0.43479 8.9399L0.439478 8.94458Z'
                    fill='black' />
            </svg>
            <svg id='closeModal' width='12' height='12' viewBox='0 0 12 12' fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M11.6546 2.05106C12.1235 1.58214 12.1235 0.820611 11.6546 0.351691C11.1856 -0.11723 10.4241 -0.11723 9.95519 0.351691L6.005 4.30563L2.05106 0.355442C1.58214 -0.113479 0.820611 -0.113479 0.351691 0.355442C-0.11723 0.824363 -0.11723 1.58589 0.351691 2.05481L4.30563 6.005L0.355442 9.95894C-0.113479 10.4279 -0.113479 11.1894 0.355442 11.6583C0.824363 12.1272 1.58589 12.1272 2.05481 11.6583L6.005 7.70437L9.95894 11.6546C10.4279 12.1235 11.1894 12.1235 11.6583 11.6546C12.1272 11.1856 12.1272 10.4241 11.6583 9.95519L7.70437 6.005L11.6546 2.05106Z'
                    fill='black' />
            </svg>
        </div>
        <h3 class='modal__title'>Ajout photo</h3>
        <form class='modal__content' enctype='multipart/form-data'>
            <div class='upload'>
                <svg width='70' height='61' viewBox='0 0 70 61' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M60.5517 6.88793C61.7228 6.88793 62.681 7.84612 62.681 9.01724V51.5768L62.0156 50.7118L43.9165 27.2894C43.3176 26.5042 42.3727 26.0517 41.3879 26.0517C40.4031 26.0517 39.4715 26.5042 38.8594 27.2894L27.8136 41.5824L23.7546 35.8998C23.1557 35.0614 22.1975 34.569 21.1595 34.569C20.1214 34.569 19.1632 35.0614 18.5644 35.9131L7.91783 50.8183L7.31896 51.6434V51.6034V9.01724C7.31896 7.84612 8.27715 6.88793 9.44827 6.88793H60.5517ZM9.44827 0.5C4.75048 0.5 0.93103 4.31945 0.93103 9.01724V51.6034C0.93103 56.3012 4.75048 60.1207 9.44827 60.1207H60.5517C65.2495 60.1207 69.069 56.3012 69.069 51.6034V9.01724C69.069 4.31945 65.2495 0.5 60.5517 0.5H9.44827ZM20.0948 26.0517C20.9337 26.0517 21.7644 25.8865 22.5394 25.5655C23.3144 25.2444 24.0186 24.7739 24.6118 24.1807C25.2049 23.5876 25.6755 22.8834 25.9965 22.1083C26.3175 21.3333 26.4828 20.5027 26.4828 19.6638C26.4828 18.8249 26.3175 17.9943 25.9965 17.2192C25.6755 16.4442 25.2049 15.74 24.6118 15.1468C24.0186 14.5537 23.3144 14.0831 22.5394 13.7621C21.7644 13.4411 20.9337 13.2759 20.0948 13.2759C19.2559 13.2759 18.4253 13.4411 17.6503 13.7621C16.8752 14.0831 16.171 14.5537 15.5779 15.1468C14.9847 15.74 14.5142 16.4442 14.1931 17.2192C13.8721 17.9943 13.7069 18.8249 13.7069 19.6638C13.7069 20.5027 13.8721 21.3333 14.1931 22.1083C14.5142 22.8834 14.9847 23.5876 15.5779 24.1807C16.171 24.7739 16.8752 25.2444 17.6503 25.5655C18.4253 25.8865 19.2559 26.0517 20.0948 26.0517Z'
                        fill='#B9C5CC' />
                </svg>
                <div class='fakeBtnUpload'>+ Ajouter une photo<input type='file' accept='image/*' placeholder=''></div>
                <span>jpg, png : 4mo max</span>
            </div>
            <div class='form__grp' id='workTitleGrp'>
                <label for='text'>Titre</label>
                <input type='text' id='workTitle' />
            </div>
            <div class='form__grp'>
                <label for='category'>Catégorie</label>
                <select class='input' id='category'>
                    <option value='option1'></option>
                </select>
            </div>
        </form>
        <button id='addWorkValidate' class='btn'>Valider</button>
    </dialog>
</div>
        `;

    document.body.insertAdjacentHTML('afterbegin', uploadModal);
    viewCategoriesOption();
    btnFormValidation();

    const headerControls = document.querySelector(".modal__headerControls");
    headerControls.style.justifyContent = "space-between";

    changeModalBtn("uploadWorks");
    closeModal();
};