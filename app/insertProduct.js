import "regenerator-runtime/runtime";

import Category from "./models/Category";
import CategoryService from "./services/CategoryService";
import FirebaseConstants from "./constants/FirebaseConstants";
import Product from "./models/Product";
import ProductService from "./services/ProductService";



$(document).ready(function (){
    const categoryService = new CategoryService(
        FirebaseConstants.RealtimeDb, 
        "Token"
    );
    const productService = new ProductService(
        FirebaseConstants.RealtimeDb, 
        "Token"
    );
    const categoryIdCtrl = $('#categoryId');
        categoryService.findAllCategories().then((data) => {
            let list = '';
            for (const key in data) {
                    const element = data[key];
                
                    const { name } = element
                    list += `
                    <option value='${key}'>${key} - ${name}</option>
                    `
            }
            categoryIdCtrl.append(list);
        });


    $('#save').on('click', () => {
        const name = $('#name').val();
        const productIdCtrl = $('#productId');
        const price = $('#price').val();
        const quantity = $('#quantity').val();
        const description = $('#description').val();

        const product = new Product(categoryIdCtrl.val(), null, name, description, price, quantity)
        
        try {
            productService.insertProduct(product).then((data) => {
                productIdCtrl.val(data);
                alert('New product has been created');
            });
        } catch (error) {
            console.log(error);
        }
    });
});