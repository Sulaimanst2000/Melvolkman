const beauty1product = [
    {
        id:"1",
        image_4:"./assets/image/beauty-and-truth-5.webp",
        image_5:"./assets/image/beauty-and-truth-6.webp",
        title: "For Beauty & Truth No. 02 / Limited Edition Print",
        price: "55.00"
    }
]
// saving value in local storage
const mybeauty1product = JSON.stringify(beauty1product); 
const mylocal1data= localStorage.setItem("beauty1value", mybeauty1product);
