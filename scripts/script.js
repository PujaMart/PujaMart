//window.addEventListener('resize',() => {
  //  location.reload();
//});


function CloseTopOffer() {
    document.querySelector('.coupons-nav').style.display = 'none';
}

function svmenu() {
    document.querySelector('.cat-nav-links').style.display = 'flex';
    document.querySelector('.cat-container').style.display = 'flex';
}

function ShowMenu() {
    document.getElementById('menu-btn').style.display = 'none';
    document.getElementById('menu-close-btn').style.display = 'flex';
    svmenu();
}

function CloseMenu() {
    document.getElementById('menu-close-btn').style.display = 'none';
    document.getElementById('menu-btn').style.display = 'flex';
    document.querySelector('.cat-nav-links').style.display = 'none';
    document.querySelector('.cat-container').style.display = 'none';
}


document.addEventListener("DOMContentLoaded", function() {
    //Cart Count Update
    let cartCounter = 0;

    document.querySelectorAll(".cart-add").forEach(button => {
        button.addEventListener("click", function() {
        cartCounter++;
        document.getElementById("Cart-Counter").textContent = cartCounter;
        });
    });


    //Product Search
    const searchInput = document.getElementById("site-search");
    const searchImg = document.getElementById("search-img");

    searchImg.addEventListener("click", function(event) {
        event.preventDefault(); 

        // Manually trigger form submission
        const query = searchInput.value;
        const currentUrl = window.location.href.split('?')[0]; // Get the base URL without query parameters
        const redirect = `${currentUrl}?search_query=${encodeURIComponent(query)}`;

        // Redirect to the constructed URL
        window.location.href = redirect;
    });
});



//Sliding Product Containers
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

