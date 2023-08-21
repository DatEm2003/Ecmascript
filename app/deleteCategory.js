import "regenerator-runtime/runtime";

import Category from "./models/Category";
import CategoryService from "./services/CategoryService";
import FirebaseConstants from "./constants/FirebaseConstants";
import UrlHelper from "./helpers/UrlHelper";

$(document).ready(function (){
        const categoryService = new CategoryService(
            FirebaseConstants.RealtimeDb, 
            "Token"
        );

        const url = location.href;
        const urlHelper = new UrlHelper()
        const id = urlHelper.readParam(url, 'id')

        categoryService.deleteCategory(id).then((data) => {
            location.href = 'listCategories.html';
        }); 
});