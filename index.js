const compteur = document.querySelector("h3");
console.log(compteur);

let counter = 0;

const bulleMaker = () => {
  // La on crée une balise
  const bulle = document.createElement("yo");

  bulle.classList.add("bulle");
  //   Cette balise qu'on a crée avant on l'injecte au body
  document.body.appendChild(bulle);

  // Math.random() permet d'avoir un chiffre aléatoire entre 0 et 1 si on voulait par exemple entre 0 et 100 on aurait ajouter *100 après
  console.log(Math.random());

  // le +100 veux dire qu'on commence à minimum 100 donc sa sera de 100 à 300
  const taille = Math.random() * 200 + 100 + "px";
  console.log(taille);

  // La on donne comme style que la bulle qu'on à crée juste au dessus avant prenne la taille en hauteur et largeur de notre valeur aléatoire
  bulle.style.height = taille;
  bulle.style.width = taille;
  // Pour faire un positionnement aléatoire le top c'est au niveau pour haut bas
  // On doit bien mettre le % pour que sa face un pourcentage
  // On met aussi qu'elle doit commencer au minimum à 50% donc elle doit être a 50 % ves le bas au minimum vu que la on va faire venir les bulles de en bas
  bulle.style.top = Math.random() * 100 + 50 + "%";
  // Pour faire un positionnement aléatoire le left c'est au niveau pour gauche droite
  bulle.style.left = Math.random() * 100 + "%";

  //   Cette variable va permettre que les bulles ne partent pas seulement sur la droite mais également sur la gauche une fois sur 2 a droite ou sois a gauche
  const plusmoins = Math.random();
  if (Math.random > 0.5) {
    1;
  } else {
    -1;
  }
  //   On multiplie par la variable qu'on à créer
  //   On va faire que la aléatoire une fois sur 2 fasse sois *1 sois *-1
  bulle.style.setProperty("--left", Math.random() * 100 * plusmoins + "%");

  bulle.addEventListener("click", () => {
    // A chaque fois qu'on va cliquer sur une bulle ça va lui ajouter un au compteur qui est initaliser à 0
    counter++;
    // Permet d'afficher sur notre h3 le compteur
    compteur.textContent = counter;
    //   Quand on va cliquer sur une bulle ça va l'effacer
    bulle.remove();
  });
  // La on dit que au bout de 8 secondes on supprime la bulle crée
  setTimeout(() => {
    bulle.remove();
  }, 8000);
};
// Ca va nous permettre de créer une bulle toutes les 3 secondes
setInterval(bulleMaker, 300);

setTimeout(()=>{
  alert("Partie terminer !")
},100000)