// get_product ceramic
const get_product = JSON.parse(localStorage.getItem("productvale"));
const showingData = document.querySelector(".showdata")
// mapping product ceramic
const gettingData = get_product.map((data) => {
    let location = '';
    if(data.pdtt.includes('01')){
        location = 'for-beauty-truth.html'
    }
    else if(data.pdtt.includes('02')){
    }
    else if(data.pdtt.includes('03')){
        location = 'for-beauty-truth-2.html'
    }
    return `    
    <a href="${location}">    
        <div class="col-md-4 col-12" ${data.id}>
            <div class="thecard">
                <div class="thefront">
                    <img src=${data.img} alt="">
                    <span class="span-sale position-absolute bg-primary d-flex justify-content-center align-items-center text-white">SOLD OUT</span>
                    <p class="product-title pt-3">${data.pdtt}</p>
                    <p class="product-price">$ ${data.pdprice}</p>
                </div>
                <div class="theback">
                    <img src=${data.img_hover} alt="">
                    <button class="quick-btn" >QUICK VIEW</button>
                </div>
            </div>
        </div>
    </a>
    `
})
showingData.innerHTML = gettingData.join('')