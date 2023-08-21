import "regenerator-runtime/runtime";

import Product from "./models/Product";
import ProductService from "./services/ProductService";
import FirebaseConstants from "./constants/FirebaseConstants";
import UrlHelper from "./helpers/UrlHelper";

$(document).ready(function (){
    const pro = new Product(null, name);
        const productService = new ProductService(
            FirebaseConstants.RealtimeDb, 
            "Token"
        );

        const url = location.href;
        const urlHelper = new UrlHelper()
        const id = urlHelper.readParam(url, 'id')

        productService.deleteProduct(id).then((data) => {
            location.href = 'listProduct.html';
        }); 
});