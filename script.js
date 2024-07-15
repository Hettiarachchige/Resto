let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');


window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.toggle('activate');


}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');

}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,

    
  });
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        swiper.slideNext();
    } else if (event.key === 'ArrowLeft') {
        swiper.slidePrev();
    }
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop: true,  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});

window.addEventListener('scroll', () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
});

// Get all the "Add to cart" buttons
const addToCartButtons = document.querySelectorAll('.btn');
const cartItemsContainer = document.querySelector('.cart-items');
const totalPriceElement = document.getElementById('total');

let total = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const item = event.target.closest('.box');
    const itemName = item.querySelector('h3').textContent;
    const itemPrice = parseFloat(item.querySelector('span').textContent.replace('$', ''));
    const itemImageSrc = item.querySelector('img').src;

    addItemToCart(itemName, itemPrice, itemImageSrc);
    updateTotalPrice(itemPrice);
  });
});

function addItemToCart(name, price, imageSrc) {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  
  cartItem.innerHTML = `
    <img src="${imageSrc}" alt="${name}" style="width: 100px; height: 100px;">
    <div class="item-details">
      <h4>${name}</h4>
      <span>$${price.toFixed(2)}</span>
    </div>
    <button class="remove-btn">Remove</button>
  `;

  cartItemsContainer.appendChild(cartItem);

  const removeButton = cartItem.querySelector('.remove-btn');
  removeButton.addEventListener('click', () => {
    cartItem.remove();
    updateTotalPrice(-price);
  });
}

function updateTotalPrice(price) {
  total += price;
  totalPriceElement.textContent = total.toFixed(2);
}




