
const collection=[
    {
        name: "Lionel Messi",
        nationalite:"argentin",
        poste: "Attaquant",
        birth : 1987,
        picture: "images/messi.jpg",
        taille: 170,
        poids: 72,
        description:"blabla",
    }, 
    
    {
        name: "Samuel Eto'o",
        nationalite: "camerounais",
        poste: "Attaquant",
        birth : 1981,
        picture: "images/etoo.jpg",
        taille: 180,
        poids: 75,
        description:"blabla",
    },

    {
        name: "Thierry Henry",
        nationalite: "français",
        poste: "Attaquant",
        birth : 1977,
        picture: "images/henry.jpg",
        taille: 188,
        poids: 83,
        description:"blabla",
    },

    {
        name: "Andres Iniesta",
        nationalite: "espagnol",
        poste: "Milieu",
        birth : 1984,
        picture: "images/iniesta.jpg",
        taille: 171,
        poids: 68,
        description:"blabla",
    },

    {
        name: "Xavi Hernandez",
        nationalite: "espagnol",
        poste: "Milieu",
        birth : 1980,
        picture: "images/xavi.jpg",
        taille: 170,
        poids: 68,
        description:"blabla",
    },

    {
        name: "Sergio Busquets",
        nationalite: "espagnol",
        poste: "Milieu",
        birth : 1980,
        picture: "images/sergio.jpg",
        taille: 189,
        poids: 76,
        description:"blabla",
    },

    {
        name: "Carles Puyol",
        nationalite: "espagnol",
        poste: "Defenseur",
        birth : 1978,
        picture: "images/puyol.jpg",
        taille: 178,
        poids: 80,
        description:"blabla",
    },

    {
        name: "Yaya Toure",
        nationalite: "ivoirien",
        poste: "Defenseur",
        birth : 1983,
        picture: "images/yaya.jpg",
        taille: 191,
        poids: 90,
        description:"blabla",
    },

    {
        name: "Gerard Pique",
        nationalite: "espagnol",
        poste: "Defenseur",
        birth : 1987,
        picture: "images/pique.jpg",
        taille: 194,
        poids: 85,
        description:"blabla",
    },

    {
        name: "Sylvinho",
        nationalite: "bresilien",
        poste: "Defenseur",
        birth : 1974,
        picture: "images/sylvinho.jpg",
        taille: 170,
        poids: 68,
        description:"blabla",
    },

    {
        name: "Victor Valdes",
        nationalite: "espagnol",
        poste: "Gardien",
        birth : 1982,
        picture: "images/valdes.jpg",
        taille: 183,
        poids: 78,
        description:"blabla",
    },
];

let header = document.querySelector('header');
let titre = document.createElement('h1');
titre.innerText=`Triomphe Inoubliable: Le 11 du FC Barcelone, vainqueur la Ligue des Champions 2009`;

document.addEventListener('DOMContentLoaded',function(){
for(let i=0;i<collection.length;i++){

    let collector=collection[i];

    let main = document.querySelector('main');
    main.classList.add('container');
    
        let section = document.createElement('section');
        section.classList.add('card');

            let division1 = document.createElement('div');
            division1.classList.add('card__div');

                let image=document.createElement('img');
                image.classList.add('card__div__image');
                image.src=collector.picture;

            let article = document.createElement('article');
            article.classList.add('card__text');
                
                let division2= document.createElement('div');
                division2.classList.add('card__text__natio');
                division2.innerText=`Nationalité: ${collector.nationalite}`;

                let division3= document.createElement('div');
                division3.classList.add('card__text__birth');
                division3.innerText=`Année de naissance: ${collector.birth}`;

                let division4 = document.createElement('div');
                division4.classList.add('card__text__poste');
                division4.innerText=`Poste: ${collector.poste}`;

                let division5 = document.createElement('div');
                division5.classList.add('card__text__taille');
                division5.innerText=`Taille: ${collector.taille} cm`;

                let division6 = document.createElement('div');
                division6.classList.add('card__text__poids');
                division6.innerText=`Poids: ${collector.poids} kg`;

                let nom = document.createElement('h2');
                nom.classList.add('card__text__nom');
                nom.innerText=collector.name;

                let paragraph = document.createElement('p');
                paragraph.classList.add('card__text__paragraph');
                paragraph.innerText=collector.description;

        header.appendChild(titre);       
        main.appendChild(section);
        section.appendChild(division1);
        section.appendChild(article);
        division1.appendChild(image);
        article.appendChild(nom);
        article.appendChild(division2);
        article.appendChild(division3);
        article.appendChild(division4);
        article.appendChild(division5);
        article.appendChild(division6);
        article.appendChild(paragraph);

    }
});
   





