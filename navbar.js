const filterItem = document.querySelector(".filter-item");
const filterProducto = document.querySelectorAll(".div_productos");

window.onload = ()=>{
    filterItem.onclick = (selectedItem)=>{
        if(selectedItem.target.classList.contains("filter-item")){
            let filterName = selectedItem.target.getAttribute("data-name");
            filterProducto.forEach((div_productos)=>{
                let filterProducto = div_productos.getAttribute("data-name");
                if((filterProducto == filterName) || filterName == "all"){
                    div_productos.classList.remove("hide");
                    div_productos.classList.add("show");
                }else{
                    div_productos.classList.remove("show");
                    div_productos.classList.add("hide");
                }
            });
        }
    }
}