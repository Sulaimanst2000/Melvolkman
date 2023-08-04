// beauty and truth product
const product = [
    {
        id: "1",
        img: "./assets/image/product1.webp",
        img_hover:"./assets/image/product1-overlay.webp",
        pdtt: "For Beauty & Truth No. 01 / Limited Edition Print",
        pdprice: "55.00"
    }
    ,{
        id: "2",
        img: "./assets/image/product2.webp",
        img_hover:"./assets/image/product2-overlay.webp",
        pdtt: "For Beauty & Truth No. 02 / Limited Edition Print",
        pdprice: "55.00"
    },{
        id: "3",
        img: "./assets/image/product3.webp",
        img_hover:"./assets/image/product3-overlay.webp",
        pdtt: "For Beauty & Truth No. 03 / Limited Edition Print",
        pdprice: "55.00"
    }
]
// saving value in local storage
const myproduct = JSON.stringify(product); 
const localdata= localStorage.setItem("productvale", myproduct);
