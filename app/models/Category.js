export default class Category{
    constructor(categoryId, name){
        this.categoryId = categoryId;
        this.name = name;
    }
}

//export để cho phép file khác sử dụng
//import để gọi đến dữ liệu từ một module khác