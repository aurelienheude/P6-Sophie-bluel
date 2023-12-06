export const createOptionCategories = (optionData) => {
	const nodeParent = document.querySelector("#category");
	
	if (nodeParent) {
		nodeParent.insertAdjacentHTML('beforeend', `<option value="${optionData.id}">${optionData.name}</option>`);
	}
};