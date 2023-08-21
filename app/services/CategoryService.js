import axios from "axios";

class CategoryService {
    constructor (realtimeDb, accessToken){
        this.collectionName = "categories.json"
        this.realtimeDb = realtimeDb;
        this.accessToken = accessToken;
    }

    insertCategory = async (entity) => {
        const response = await axios.post(//gửi dữ liệu truyền vào tới reatimedb
            this.realtimeDb + this.collectionName, 
            entity //dữ liệu về phía sever
            );
        const insertedId = await response.data.name;

        return insertedId;//trả về id đc chèn vào reatimedb 
    };

    updateCategory = async (id, entity) => {
        const response = await axios.put(
            `${this.realtimeDb}categories/${id}.json`, 
            entity //thông tin category mới cần update
            );

        return response.data;//trả về dữ liệu đã đc update về db
    };

    deleteCategory = async (id) => {
        const response = await axios.delete(
            `${this.realtimeDb}categories/${id}.json`, 
            );

        return response.data;
    };

    findById = async (id) => {//tìm kiếm theo id
        const response = await axios.get(
            `${this.realtimeDb}categories/${id}.json` 
            );
            return response.data;
    };

    findAllCategories = async (entity) => {//gửi y/c đến reatimedb 
        const response = await axios.get(
            this.realtimeDb + this.collectionName
            );
            return response.data;//trả kq: ds category hiện có ở đb
    };
}
export default CategoryService;