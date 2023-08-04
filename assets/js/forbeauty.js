const beautyproduct = [
    {
        id: "1",
        img_1:"./assets/image/beauty-and-truth-1.webp",
        img_2:"./assets/image/beauty-and-truth-2.webp",
        img_3:"./assets/image/beauty-and-truth-3.webp",
        img_4:"./assets/image/beauty-and-truth-4.webp",
        fbtt: "For Beauty & Truth No. 01 / Limited Edition Print",
        fbprice: "55.00"
    }
]
// saving value in local storage
const mybeautyproduct = JSON.stringify(beautyproduct); 
const mylocaldata= localStorage.setItem("beautyvalue", mybeautyproduct);
