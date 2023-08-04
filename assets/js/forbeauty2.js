const beauty2product = [
    {
        id: "1",
        img_6:"./assets/image/beauty-and-truth-11.webp",
        img_7:"./assets/image/beauty-and-truth-9.webp",
        img_8:"./assets/image/beauty-and-truth-10.webp",
        fb3tt: "For Beauty & Truth No. 03 / Limited Edition Print",
        fb3price: "55.00"
    }
]
// saving value in local storage
const mybeauty2product = JSON.stringify(beauty2product); 
const mylocal2data= localStorage.setItem("beauty2value", mybeauty2product);
