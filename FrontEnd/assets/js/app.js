import { viewWorks } from "./api/components/projects/viewWorks.js";
import { viewCategories } from "./api/components/projects/categoriesFilter.js";
import { checkUserAuthentification } from "./api/components/auth/checkUserAuthentification.js";

document.addEventListener('DOMContentLoaded', async () => {
    await viewCategories();
    await viewWorks();
    checkUserAuthentification();
});

