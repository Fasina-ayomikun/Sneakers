import get from './getElement.js';

const cart = get('.cart-items')


let number = [];
  const plus = document.querySelector('.plus');
  const minus = document.querySelector('.minus');
  const value = document.querySelector('.amount');
 
function addToCart(){
    const cartBtn = document.querySelector('.cart-btn');

    cartBtn.addEventListener('click',function(){
        cart.innerHTML =  `<div class="item-container">
        <img src="./images/image-product-1-thumbnail.jpg" alt="sneakers" class="cart-img">
        <div class="item-info">
          <p>
            fall limited edition sneakers
          </p>
          <p class="cart-price">$<span class="price">125.00</span><span class="times"> x </span><span class="item-number">3</span> <span class="item-total-price">$375</span></p>
        </div>
        <img src="./images/icon-delete.svg" alt="" class="delete">
      </div>
      <button class="btn cart-btn ">Checkout</button>` ;
      

   
      const noOfItem = document.querySelector('.item-number')
      const totalPrice = document.querySelector('.item-total-price');
      const currentPrice = document.querySelector('.price')
    
     
      
      
          
        if(value.textContent === '0'){
           number = 1
        }
          let price = parseInt(currentPrice.textContent) * number;
          totalPrice.textContent = `$${price}`;
     
    console.log(price);
      value.textContent = `${number}`;
      noOfItem.textContent = `${number}`;
          if(value.textContent === '0'){
              number = 1;
           
          }
          
        })
        plus.addEventListener('click',function(){
            number ++ ;
            value.textContent = number
            
        })
        minus.addEventListener('click',function(){
            if(value.textContent > parseInt('0')){
                number -- ;
              value.textContent = number
            }
               
            
        });
        
  
  
    
}
window.addEventListener('DOMContentLoaded', function(){
    cart.innerHTML = `<p class='loading'>Loading...</p>`;
    addToCart()
})


export default addToCart;