const product =[
    {
        id: 1,
        img:"./assets/image/beauty-and-truth-1.webp",
        title:"t-shirt blue",
        price:120,
    },
    {
        id: 1,
        img:"./assets/image/beauty-and-truth-2.webp",
        title:"t-shirt blue",
        price: 50,
    },
    {
        id: 1,
        img:'./assets/image/beauty-and-truth-3.webp',
        title:'t-shirt blue',
        price: 20
    }
]
const categories =[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML =categories.map((item)=>
    {
        var{img,title,price}=item;
        return(
        `<div class ='box'>
        <div class='img-box'>
            <img class='images'src=${img}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}</h2>`+"<button onclick='addtocart("+(i++)+")'>Add to cart"+
            `</div>
            </div>`
    )
    }).join('');
    
    var cart=[];
    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a){
        cart.splice(a,1);
        displaycart();
    }
    function displaycart(){
        let j=0,totalsum=0;
        document.querySelector(".count").innerHTML=cart.length
        if(cart.length==0){
            document.querySelector(".cart-empty").innerHTML="Your cart is empty";
            document.querySelector(".totalsum").innerHTML="$"+0+".00";
        }
        else{
            document.querySelector(".cart-empty").innerHTML=cart.map((items)=>{
                var {img,title,price}=items;
                totalsum=totalsum+price;
                document.querySelector(".totalsum").innerHTML="$"+totalsum+".00"; 
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>   
                    <img class='rowimg' src=${img}>
                    </div>
                    <p style='font-size:15px;'>${title}</p>
                    <p style='font-size:10px;'>$ ${price}.00</p>`+
                    "<i class='fa-solid fa-trash'onclick='delElement("+(j++)+")'></i></div>"
                );
                
            })
        }
    }