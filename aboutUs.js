let opener = document.querySelector('.opener');
let circle = document.querySelector('.circle');

let teachers = [
    {name: 'Matteo', description: 'Docente FrontEnd hackademy 69', url: './media/insegnante1.jpg'},
    {name: 'Marco', description: 'Docente FrontEnd e responsabile hackademy', url: './media/insegnante2.jpg'},
    {name: 'Nicola', description: 'Docente FrontEnd e noto sex symbol', url: './media/insegnante3.jpg'},
    {name: 'Davide', description: 'Docente Backend e giocatore di ruolo', url: './media/insegnante4.jpg'},
];

teachers.forEach((docente)=>{
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${docente.url})`;
    circle.appendChild(div);
});

let movedDivs = document.querySelectorAll('.moved');

let check = false;

opener.addEventListener('click', ()=>{
    if(check == false){
        opener.style.transform = `rotate(45deg)`;
        movedDivs.forEach((moved, i)=>{
        let angle = (360 * i) / movedDivs.length;
        moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
    });
    check = true;
    }else{
        check = false;
        opener.style.transform = `rotate(0deg)`;
        movedDivs.forEach((moved, i)=>{
            moved.style.transform = `rotate(0deg) translate(0px)`;
        });
        

    }
});

let flipCard = document.querySelector('.flip-card');

movedDivs.forEach((moved, i)=>{
    moved.addEventListener('click', ()=>{
        let docente = teachers[i];
        flipCard.style.backgroundImage = `url(${docente.url})`;

    });
});