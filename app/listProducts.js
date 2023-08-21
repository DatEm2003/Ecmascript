import "regenerator-runtime/runtime";

import Product from "./models/Product";
import ProductService from "./services/ProductService";
import FirebaseConstants from "./constants/FirebaseConstants";

$(document).ready(function (){
        const productService = new ProductService(
            FirebaseConstants.RealtimeDb, 
            "Token"
        );
        try {
            const placeholder = $('#placeholder');

            productService.findAllProducts().then((data) => {
                console.log(data);
                let list = '';
                for (const key in data) {
                    const element = data[key];
                    let { categoryId, name, description, price, quantity } = element;

                    list += `
                    <tr>
                    <td>${categoryId}</td>
                    <td>${key}</td>
                    <td>${name}</td>
                    <td>${description}</td>
                    <td>${price}</td>
                    <td>${quantity}</td>
                    <td>
                    <a href="editProduct.html?id=${key}">
                            <i class="fa fa-pencil" aria-hidden="true" style='color:green;'></i>
                            Edit
                    </a> |
                    <a href="deleteProduct.html?id=${key}">
                        <i class="fa fa-trash" aria-hidden="true" style='color:red;'></i>
                        Delete
                    </a> 
                    </td>
                    </tr>
                    `;      
                }
                placeholder.append(list);
            });
        } catch (error) {
            console.log(error);
        }

});