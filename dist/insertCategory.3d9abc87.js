$(document).ready(function() {
    $("#save").on("click", ()=>{
        const categoryIdCtrl = $("#categoryId");
        const name = $("#name").val();
        const cate = new CategoryService(null, name);
        console.log(cate);
        console.log("save click");
    });
});

//# sourceMappingURL=insertCategory.3d9abc87.js.map
