import "regenerator-runtime/runtime";

import Category from "./models/Category";
import CategoryService from "./services/CategoryService";
import FirebaseConstants from "./constants/FirebaseConstants";
import UrlHelper from "./helpers/UrlHelper";

$(document).ready(function (){
    //const cate = new Category(null, name);//tạo ra đối tượng

        const categoryService = new CategoryService(
            FirebaseConstants.RealtimeDb, 
            "Token"
        );

        const url = location.href;//lấy địa chỉ url
        const urlHelper = new UrlHelper() //tạo đối tượng từ class urlhelper để lấy giá trị của tham số
        const id = urlHelper.readParam(url, 'id')
        //lấy thông tin categoryid và name
        const categoryIdCtrl = $('#categoryId');
        const nameCtrl = $('#name');

        categoryService.findById(id).then((data) => {
            const { name } = data;

            //hiển thị categoryid và name trên thành phần form để chỉnh sửa
            categoryIdCtrl.val(id);
            nameCtrl.val(name);
        });

    $('#update').on('click', () => {
        const cate = new Category(null, nameCtrl.val());

        try {
            categoryService.updateCategory(categoryIdCtrl.val(), cate).then((data) => {
                location.href = 'listCategories.html'
                console.log('category is updated');
            });
        } catch (error) {
            console.log(error);
        }
    });
});