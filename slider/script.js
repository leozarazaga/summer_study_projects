const productConainer = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.nxt-btn')];
const prevBtn = [...document.querySelectorAll('.pre-btn')];

productConainer.forEach((item, i) =>{
    let containerDimesions = item.getBoundingClientRect();
    let containerWidth = containerDimesions.width;

    nextBtn[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
    })

    prevBtn[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;
    })
})