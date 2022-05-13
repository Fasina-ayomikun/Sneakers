const thumbnails = document.querySelectorAll('.thumbnail');
const modalMainImg = document.querySelector('.modal-img1');

thumbnails.forEach((thumbnail)=>{
    thumbnail.addEventListener('click',function(e){
      const element = e.currentTarget;
      if(element.classList.contains('thumbnail')){
          modalMainImg.src = element.src;
          element.classList.add('current-image')
      }
      else{
          console.log('no');
      }
        
    })
})
