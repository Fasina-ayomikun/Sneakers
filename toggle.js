const  cart = document.querySelector('.cart');
const  cartItems = document.querySelector('.cart-items');
const cartContent = document.querySelector('.cart-content');
const thumbnails =  document.querySelectorAll('.thumbnail');
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.modal-close-btn');
const toggleContent = document.querySelector('.toggle-content');
const toggleCloseBtn = document.querySelector('.close-btn')
const toggleBtn = document.querySelector('.toggle-btn');
const modalImages = document.querySelectorAll('.modal-main-image .img')

cart.addEventListener('click',function(){
    cartContent.classList.toggle('active');

})

toggleBtn.addEventListener('click',function(){
    toggleContent.classList.add('active');
    console.log('ok');
})
toggleCloseBtn.addEventListener('click',function(){
    toggleContent.classList.remove('active');
})

thumbnails.forEach((thumbnail)=>{
    thumbnail.addEventListener('click',function(){
        modal.classList.add('active')
        modalImages.forEach((img)=>{
            img.style.visibility = `visible`
        })
    })
})

modalCloseBtn.addEventListener('click',function(){
    modal.classList.remove('active')
    modalImages.forEach((img)=>{
        img.style.visibility = `hidden`
    })
})