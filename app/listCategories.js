import "regenerator-runtime/runtime";

import Category from "./models/Category";
import CategoryService from "./services/CategoryService";
import FirebaseConstants from "./constants/FirebaseConstants";

$(document).ready(function (){
        const categoryService = new CategoryService(
            FirebaseConstants.RealtimeDb, 
            "Token"
        );
        try {
            const placeholder = $('#placeholder');

            categoryService.findAllCategories().then((data) => {
                console.log(data);
                let list = '';
                for (const key in data) {
                    // console.log(key);
                    const element = data[key];
                    let {name} = element;

                    list += `
                    <tr>
                    <td>${key}</td>
                    <td>${name}</td>
                    <td>
                    <a href="editCategory.html?id=${key}">
                            <i class="fa fa-pencil" aria-hidden="true" style='color:green;'></i>
                            Edit
                    </a> |
                    <a href="deleteCategory.html?id=${key}">
                        <i class="fa fa-trash" aria-hidden="true" style='color:red;'></i>
                        Delete
                    </a> 
                    </td>
                    </tr>
                    `;      
                }
                placeholder.append(list);//chèn nội dung vào thành phần có id placeholder
            });
        } catch (error) {
            console.log(error);
        }

});