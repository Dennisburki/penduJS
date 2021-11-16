let play = true;

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const myKeyboard = document.getElementById("myKeyboard");

const petList = ["crevette","pingouin","ecureuil","babouin","galinette","sanglier","poule","autruche","pieuvre","ours","loup","rat","mouette","ragondin","phoque","loutre","hippopotame","moule"];

let pet = petList[aleaNb(0,petList.length)]; // de 0 jusqua la longueur max du tableau car dans la fonction c'est définit comme ca
console.log(pet);


function aleaNb(min, max) { // fonction random
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };


//****************pour afficher les cases vides en fonction du mot aleatoire*******
  const arrayPet = pet.split("");

  arrayPet.forEach((element, index)=> { // premier argument=valeur 2eme=index
    let myIndex = index
    let myCase = `<div class="myLetter col-lg-1 col-1 border border-dark text-center rounded" id="indexLetter${myIndex}">-</div>`;
    petName.innerHTML += myCase;
  });

// let myLetter = "d";
// myLetter = myLetter.toUpperCase();
// let myKey = `<button id="myKey${myLetter}">${myLetter}</button>`; // on va creer un element Button et pour appeler une variable a l'interieur de magic quote on utilise la syntaxe ${}
// console.log(myKey)
// const myKeyboard = document.getElementById("myKeyboard");
// myKeyboard.innerHTML += (myKey); // on fait += pour rajouter a l'interieur sans ecraser ce qui est deja a l'interieur

// Dans un premier temps on ecrit comme ci-dessus, puis quand ca marche, on fait la boucle ci-dessous et on peut supprimer au-dessus



// **************************Pour inserer les boutons clavier********************************

alphabet.forEach(element => { // tableau.foreach - element est la valeur qu'on veut repeter, la valeur a l'interieur du tableau
    let myKey = element;
    myKey = myKey.toUpperCase();
    let myKeyButton = `<button class="btn btn-outline-primary col-2 m-2" id="myKey${myKey}">${myKey}</button>`; // on va creer un element Button et pour appeler une variable a l'interieur de magic quote on utilise la syntaxe ${}
    // console.log(myKey)
    myKeyboard.innerHTML += (myKeyButton); // on fait += pour rajouter a l'interieur sans ecraser ce qui est deja a l'interieur
});


let nbLetter = 0
let life = 15



//**********************************Pour recuperer le type/propriété***********************

myKeyboard.addEventListener("click", e => { // au click on recupere l'evenement
    // console.log(e); // le target permet de savoir s'il a cliqué sur un button
    if (e.target.nodeName == "BUTTON" && play === true){ // play egal a true permet de jouer, si cest false ca bloque
      //nodename renvoit le nom de l'element,s proprieté - .target pour aller a la ligne target puis dans target .nodename pour aller a nodename 
       
       e.target.className = "btn-primary col-2 m-2" // pour bleuter une fois cliqué
       e.target.disabled = true // pour ne plus pouvoir cliquer dessus apres selection
      console.log(e.target.innerText);

        arrayPet.forEach((element, index) => { // pour afficher les lettres(element)
          if (e.target.innerText.toLowerCase() == element) {
            document.getElementById(`indexLetter${index}`).innerText = element
            nbLetter++;


          }
          })

        }
        if (nbLetter == arrayPet.length){ // si la length du mot est egal au nb de lettre
          if(confirm("Gagné! Voulez-vous rejouer?")) {
            location.reload();

          }
          play = false;
        }
        let myScore = nbLetter
        if (myScore == nbLetter) {
            life--          
        }

        switch (life) {

          case 0: if(confirm("Perdu! Voulez-vous rejouer?")){
            location.reload() // fonction JS pour recharger la page
          }
          play = false // on ne peut plus jouer apres car false
          break;

          case 15 :
            document.getElementById("myLife").innerHTML = "| | | | | | | | | | | | | | |"
             break;

            case 14 :
                document.getElementById("myLife").innerHTML = "| | | | | | | | | | | | | |"
                break;
             case 13 :
                document.getElementById("myLife").innerHTML = "| | | | | | | | | | | | |"
                break;
             case 12 :
                document.getElementById("myLife").innerHTML = "| | | | | | | | | | | |"
                break;
             case 11 :
                document.getElementById("myLife").innerHTML = "| | | | | | | | | | |"
                break;
             case 10 :
                document.getElementById("myLife").innerHTML = "| | | | | | | | | |"
                break;
             case 9 :
                document.getElementById("myLife").innerHTML = "| | | | | | | | |"
                break;
             case 8 :
                document.getElementById("myLife").innerHTML = "| | | | | | | |"
                break;       

              case 7 :
                document.getElementById("myLife").innerHTML = "| | | | | | |"
                break;

             case 6 :
                document.getElementById("myLife").innerHTML = "| | | | | |"
                break;

              case 5 :
                document.getElementById("myLife").innerHTML = "| | | | |"
                break;

              case 4 :
                document.getElementById("myLife").innerHTML = "| | | |"
                break;

              case 3 :
                document.getElementById("myLife").innerHTML = "| | |"
                break;

              case 2 :
                document.getElementById("myLife").innerHTML = "| |"
                break;

              case 1 :
                document.getElementById("myLife").innerHTML = "|"
                break;

          default:
            break;

        }
        





    })


