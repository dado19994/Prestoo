let navbar = document.querySelector('#navbar');
let links = document.querySelectorAll('.nav-link');
let logoNavbar = document.querySelector('#logoNavbar');
let lightsaber = document.querySelector('#lightsaber');
let collapse = document.querySelector('#collapse');
let check = false;

console.dir(lightsaber);


window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;

    if (scrolled > 0) {
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-yellow');
        collapse.classList.remove('bg-black');
        collapse.classList.add('bg-yellow');
        navbar.style.height = '70px';
        links.forEach((link) => {
            link.style.color = 'var(--black)'
        });
        logoNavbar.src = 'http://127.0.0.1:5500/logo/logo-b.png';
        lightsaber.src = 'http://127.0.0.1:5500/logo/menu-b.png';
    } else {
        navbar.classList.remove('bg-yellow');
        navbar.classList.add('bg-black');
        collapse.classList.remove('bg-yellow');
        collapse.classList.add('bg-black');
        navbar.style.height = '140px';
        links.forEach((link) => {
            link.style.color = 'var(--yellow)'
        });
        logoNavbar.src = 'http://127.0.0.1:5500/logo/logo-y.png';
        lightsaber.src = 'http://127.0.0.1:5500/logo/logo-y.png';
    }
});

lightsaber.addEventListener('click', () => {
    if (check == false) {
        lightsaber.style.transform = `rotate(-90deg)`
        check = true;
    } else {
        lightsaber.style.transform = `rotate(0deg)`
        check = false;
    }
})


// Chiamate Asincrone

let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');

let confirm = true;


function createInterval(n, element, time) {
    let counter = 0;

    let interval = setInterval(() => {
        if (counter < n) {
            counter++
            element.innerHTML = counter
        } else {
            clearInterval(interval);
        }

    }, time);

    setTimeout(() => {
        confirm = true;
    }, 8000);
}

// IntersectionObserver


let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && confirm) {
            createInterval(100, firstNumber, 100);
            createInterval(200, secondNumber, 50);
            createInterval(300, thirdNumber, 20);
            confirm = false;
        }
    });
});

observer.observe(firstNumber);



let reviews = [
    { user: 'Matteo', description: 'Il più bel sito di annunci al mondo', rank: 5 },
    { user: 'Alin', description: 'Veramento niente di che', rank: 1 },
    { user: 'Michael', description: 'Mi piace tranne per starwars', rank: 3 },
    { user: 'Arina', description: 'Star Wars è meglio!', rank: 5 },
]

let swiperWrapper = document.querySelector('.swiper-wrapper');

reviews.forEach((recensione) => {
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `
    <div class="card-review">
        <p class="lead text-center">${recensione.description}</p>
        <p class="h4 text-center">${recensione.user}</p>
    <div class="d-flex justify-content-center star">
            
        </div>
    </div>
    
    `;
    swiperWrapper.appendChild(div);
});

let stars = document.querySelectorAll('.star');
// <i class="fa-solid fa-star"></i>
stars.forEach( (star, index) => {
    for(let i = 1; i <= reviews[index].rank; i++ ){
        let icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-star');
        star.appendChild(icon);
    }

    let difference = 5 - reviews[index].rank;

    for(let i = 1; i <= difference; i++ ){
        let icon = document.createElement('i');
        icon.classList.add('fa-regular', 'fa-star');
        star.appendChild(icon);
    }
} );




// Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "flip",
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});