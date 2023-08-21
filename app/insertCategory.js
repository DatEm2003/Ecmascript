import "regenerator-runtime/runtime";

import Category from "./models/Category";
import CategoryService from "./services/CategoryService";
import FirebaseConstants from "./constants/FirebaseConstants";

$(document).ready(function (){
    $('#save').on('click', () => {
        const categoryIdCtrl = $('#categoryId');
        const name = $('#name').val();

        const cate = new Category(null, name);//category đối tượng đã tạo 
        const categoryService = new CategoryService(
            FirebaseConstants.RealtimeDb, 
            "Token"
        );
        try {
            categoryService.insertCategory(cate).then((data) => {//insert thành công sẽ trả về dữ liệu: idcategory đc tạo ra từ reatimedb
                categoryIdCtrl.val(data);//hiển thị lại trong categoryid 
                location.href = 'listCategories.html';
            });
        } catch (error) {
            console.log(error);
        }

        console.log(cate);
        console.log("save click");
    });
});