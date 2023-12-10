import { apiUrl } from '../../modules/config.js';
import { createBtnCategories } from './createCategorieElements.js';
import { createWorkElement } from './createWorkElements.js';

let CategorieTargeting = '';

export const updateWork = async () => {
    const dataWorks = await apiUrl.get('/works');

    const nodeParent = document.querySelector(".projectGallery");
    nodeParent.innerHTML = "";

    if (CategorieTargeting === "Tous") {
        dataWorks.forEach(work => {
            createWorkElement(work);
        })
    } else {
        const objetsWorks = dataWorks.filter(work => work.category.name === CategorieTargeting);

        objetsWorks.forEach(work => {
            createWorkElement(work);
        });
    }
};

export const viewCategories = async () => {

    const data = await apiUrl.get('/categories');

    if (data) {
        const tabBtn = [];
        tabBtn.push(createBtnCategories("Tous", false));

        data.forEach(dataBtn => {
            tabBtn.push(createBtnCategories(dataBtn.name, true));
        });

        tabBtn.forEach(btn => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();

                document.querySelectorAll(".btnCategory").forEach(btn => {
                    btn.className = "btnCategory btnCategory--inactive"
                });

                e.currentTarget.classList.remove("btnCategory--inactive");
                CategorieTargeting = e.currentTarget.getAttribute("data-filter");
                updateWork();
            });
        });
        return CategorieTargeting;
    }
};