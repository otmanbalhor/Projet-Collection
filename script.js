
const collection=[
    {
        name: "Lionel Messi",
        nationalite:"images/argentine.png",
        poste: "Attaquant",
        birth : 1987,
        picture: "images/messi.jpg",
        taille: 170,
        poids: 72,
        description:"Le génie argentin du football aux dribbles magiques.",
    }, 
    
    {
        name: "Samuel Eto'o",
        nationalite: "images/cameroun.png",
        poste: "Attaquant",
        birth : 1981,
        picture: "images/etoo.jpg",
        taille: 180,
        poids: 75,
        description:"L'attaquant camerounais explosif et buteur prolifique.",
    },

    {
        name: "Thierry Henry",
        nationalite: "images/france.png",
        poste: "Attaquant",
        birth : 1977,
        picture: "images/henry.jpg",
        taille: 188,
        poids: 83,
        description:"L'attaquant français élégant et rapide.",
    },

    {
        name: "Andres Iniesta",
        nationalite: "images/espagne.png",
        poste: "Milieu",
        birth : 1984,
        picture: "images/iniesta.jpg",
        taille: 171,
        poids: 68,
        description:"Le meneur de jeu espagnol au toucher de balle sublime.",
    },

    {
        name: "Xavi Hernandez",
        nationalite: "images/espagne.png",
        poste: "Milieu",
        birth : 1980,
        picture: "images/xavi.jpg",
        taille: 170,
        poids: 68,
        description:"Le maestro espagnol du milieu de terrain.",
    },

    {
        name: "Sergio Busquets",
        nationalite: "images/espagne.png",
        poste: "Milieu",
        birth : 1980,
        picture: "images/sergio.jpg",
        taille: 189,
        poids: 76,
        description:"Le milieu défensif espagnol au sens du placement inégalé.",
    },

    {
        name: "Carles Puyol",
        nationalite: "images/espagne.png",
        poste: "Defenseur",
        birth : 1978,
        picture: "images/puyol.jpg",
        taille: 178,
        poids: 80,
        description:"Le défenseur espagnol au leadership indomptable.",
    },

    {
        name: "Yaya Toure",
        nationalite: "images/ivorycoast.png",
        poste: "Defenseur",
        birth : 1983,
        picture: "images/yaya.jpg",
        taille: 191,
        poids: 90,
        description:"le milieu ivoirien puissant et polyvalent.",
    },

    {
        name: "Gerard Pique",
        nationalite: "images/espagne.png",
        poste: "Defenseur",
        birth : 1987,
        picture: "images/pique.jpg",
        taille: 194,
        poids: 85,
        description:"le défenseur espagnol intelligent et habile dans le jeu aérien.",
    },

    {
        name: "Sylvinho",
        nationalite: "images/bresil.png",
        poste: "Defenseur",
        birth : 1974,
        picture: "images/sylvinho.jpg",
        taille: 170,
        poids: 68,
        description:"le défenseur brésilien doté d'une grande technique et de vision du jeu.",
    },

    {
        name: "Victor Valdes",
        nationalite: "images/espagne.png",
        poste: "Gardien",
        birth : 1982,
        picture: "images/valdes.jpg",
        taille: 183,
        poids: 78,
        description:"Le gardien espagnol fiable et agile entre les poteaux.",
    },
];

function ElementAndClass(elementType, className) {
    const element = document.createElement(elementType);
    element.classList.add(className);
    return element;
  }

document.body.style.backgroundImage = "url(images/fond.jpg)";
document.body.style.backgroundRepeat = "no-repeat"; 
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "cover";

let header = document.querySelector('header');
let logo = ElementAndClass('img','logo');
logo.src = "images/barca.png";

header.appendChild(logo);

let titre = document.createElement('h1');
titre.innerText = `Triomphe Inoubliable: Le 11 du FC Barcelone, vainqueur de la Ligue des Champions 2009`;


document.addEventListener('DOMContentLoaded',function(){

    function triename(){
        collection.sort(function (a, b) {
    
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      });
    }
    
for(let i=0;i<collection.length;i++){

    let collector=collection[i];

    let main = document.querySelector('main');
    main.classList.add('container');

    let bouton = document.createElement('div');
    bouton.id = "Button_Alpha";
    
        let section = ElementAndClass('section','card');

            let division1 = ElementAndClass('div','card__div');
            

                let image = ElementAndClass('img','card__div__image');
                image.src = collector.picture;

            let article = ElementAndClass('article','card__text');
                
                let division2 = ElementAndClass('div','card__text__div');

                    let natio = ElementAndClass('img','card__text__div__natio');
                    natio.src = collector.nationalite;

                    let nom = ElementAndClass('h2','card__text__div__nom');
                    nom.innerText = collector.name;

                let division3 = ElementAndClass('div','card__text__birth');
                division3.innerText = `Année de naissance: ${collector.birth}`;

                let division4 = ElementAndClass('div','card__text__poste');
                division4.innerText = `Poste: ${collector.poste}`;

                let division5 = ElementAndClass('div','card__text__taille');
                division5.innerText=`Taille: ${collector.taille} cm`;

                let division6 = ElementAndClass('div','card__text__poids');
                division6.innerText = `Poids: ${collector.poids} kg`;

                let paragraph = ElementAndClass('p','card__text__paragraph');
                paragraph.innerText=collector.description;

        header.appendChild(titre);       
        main.appendChild(section);
        section.appendChild(division1);
        section.appendChild(article);
        division1.appendChild(image);
        article.appendChild(division2);
        division2.appendChild(natio);
        division2.appendChild(nom);
        article.appendChild(division3);
        article.appendChild(division4);
        article.appendChild(division5);
        article.appendChild(division6);
        article.appendChild(paragraph);

    }

    const Button = document.getElementById('Button_Alpha');

    Button.addEventListener('click', triename);
});
   





