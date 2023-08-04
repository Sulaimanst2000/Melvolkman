// ceramic product ceramic
const getting_product = JSON.parse(localStorage.getItem("productvalue"));
const showData = document.querySelector(".show-data")
// mapping data
const getting_Data = getting_product.map((data) => {
    return `        
    <div class="col-md-4 col-12" ${data.id}>
                    <div class="thecard">
                        <div class="thefront">
                            <img src=${data.img} alt="">
                            <span
                                class="span-sale position-absolute bg-primary d-flex justify-content-center align-items-center text-white">SOLD OUT</span>
                            <p class="product-title pt-3">${data.pdtt}</p>
                            <p class="product-price">$ ${data.pdprice}</p>
                        </div>
                        <div class="theback">
                            <img src=${data.img_hover} alt="">
                            <button class="quick-btn">QUICK VIEW</button>
                        </div>
                    </div>
                </div>
    `
})
showData.innerHTML = getting_Data.join('');