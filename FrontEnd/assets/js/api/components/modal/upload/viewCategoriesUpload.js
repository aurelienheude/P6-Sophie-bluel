import { apiUrl } from '../../../modules/config.js';
import { createOptionCategories } from './createCategoriesUploadElements.js';

export const viewCategoriesOption = async () => {
  const dataCategories = await apiUrl.get('/categories');

  if (dataCategories) {

    dataCategories.forEach(optionData => {
      createOptionCategories(optionData);
    });

    return dataCategories;
  }
};