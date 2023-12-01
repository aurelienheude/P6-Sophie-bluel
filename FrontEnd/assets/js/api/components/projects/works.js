import { apiUrl } from "../../modules/config.js";

let CategorieTargeting;
let worksHTML = '';

const createWorks = (work) => {
    const nodeParent = document.querySelector(".projectGallery");
    const newNodeElement = document.createElement("figure");
    newNodeElement.innerHTML = `<img src="${work.imageUrl}" alt="${work.title}" /><figcaption>${work.title}</figcaption>`;
    nodeParent.appendChild(newNodeElement);
};

const createWorksDelete = (work) => {
    const nodeParent = document.querySelector(".modal__content");
    const newNodeElement = document.createElement("figure");
    if(nodeParent){
        newNodeElement.classList.add("worksEdit");
    
        const workImage = `<img src="${work.imageUrl}" alt="${work.title}" />
            <svg id='deleteBtn' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="17" height="17" rx="2" fill="black"/>
                <path d="M6.71607 3.35558C6.82455 3.13661 7.04754 3 7.29063 3H9.70938C9.95246 3 10.1754 3.13661 10.2839 3.35558L10.4286 3.64286H12.3571C12.7127 3.64286 13 3.93013 13 4.28571C13 4.64129 12.7127 4.92857 12.3571 4.92857H4.64286C4.28728 4.92857 4 4.64129 4 4.28571C4 3.93013 4.28728 3.64286 4.64286 3.64286H6.57143L6.71607 3.35558ZM4.64286 5.57143H12.3571V12C12.3571 12.7092 11.7806 13.2857 11.0714 13.2857H5.92857C5.21942 13.2857 4.64286 12.7092 4.64286 12V5.57143ZM6.57143 6.85714C6.39464 6.85714 6.25 7.00179 6.25 7.17857V11.6786C6.25 11.8554 6.39464 12 6.57143 12C6.74821 12 6.89286 11.8554 6.89286 11.6786V7.17857C6.89286 7.00179 6.74821 6.85714 6.57143 6.85714ZM8.5 6.85714C8.32321 6.85714 8.17857 7.00179 8.17857 7.17857V11.6786C8.17857 11.8554 8.32321 12 8.5 12C8.67679 12 8.82143 11.8554 8.82143 11.6786V7.17857C8.82143 7.00179 8.67679 6.85714 8.5 6.85714ZM10.4286 6.85714C10.2518 6.85714 10.1071 7.00179 10.1071 7.17857V11.6786C10.1071 11.8554 10.2518 12 10.4286 12C10.6054 12 10.75 11.8554 10.75 11.6786V7.17857C10.75 7.00179 10.6054 6.85714 10.4286 6.85714Z" fill="white"/>
            </svg>`;

        newNodeElement.innerHTML = workImage;
        nodeParent.appendChild(newNodeElement);
    }
};

const createBtnCategories = (name, active) => {
    const nodeParent = document.querySelector(".filtersbtn");
    const newBtn = document.createElement("button");
    newBtn.classList.add("btnCategory", active && "btnCategory--inactive");
    newBtn.setAttribute("data-filter", name);
    newBtn.innerText = name;
    nodeParent.appendChild(newBtn);
    return newBtn;
};

const createOptionCategories = (name) => {
    const nodeParent = document.querySelector("#category");

    if (nodeParent) {
        nodeParent.insertAdjacentHTML('beforeend', `<option value="${name}">${name}</option>`);
    }
};

async function viewCategoriesOption(){
    const dataCategories = await apiUrl.get('/categories');
    
    if (dataCategories) {
        dataCategories.forEach(optionData => {
            createOptionCategories(optionData.name);
        });
    }
};

async function viewCategories(){

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
}

async function updateWork(){
    const dataWorks = await apiUrl.get('/works');

    const nodeParent = document.querySelector(".projectGallery");
    nodeParent.innerHTML = "";

    if(CategorieTargeting === "Tous"){
        dataWorks.forEach(work => {
            createWorks(work);
        })
    } else{
        const objetsWorks = dataWorks.filter(work => work.category.name === CategorieTargeting);

        objetsWorks.forEach(work => {
            createWorks(work);
        });
    }
    
};

async function viewWorks(){
    const dataWorks = await apiUrl.get('/works');

    dataWorks.forEach(work => {
        createWorks(work);
    })
};

async function viewWorksDelete() {
    const dataWorksDelete = await apiUrl.get('/works');
    dataWorksDelete.forEach(work => { createWorksDelete(work);});
};

export { viewWorks, viewCategories, viewCategoriesOption, viewWorksDelete };