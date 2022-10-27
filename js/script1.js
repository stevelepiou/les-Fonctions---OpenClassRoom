//!======================TRAVAILLER SUR LES FONCTIONS===============================//

//=================Comprendre les fonction==================//

  //!premier exemple

//   Lorsque l’on a un ensemble de valeurs, le calcul de la moyenne se fait en 3 étapes :

//   on fait la somme de toutes les valeurs (qu’on nommera   sommeValeurs  ) ;
  
//   on compte le nombre de valeurs que l’on a (qu’on nommera   nombreValeurs  ) ;
  
//   on calcule la moyenne en faisant moyenne = sommeValeurs / nombreValeurs  .
  
//   Parcourir un tableau
//   Lorsque l’on a un tableau (par exemple  monTableau  ) on utilise la boucle for of.
  
//   Par exemple :

// for (let elementDeTableau of monTableau) {
//     console.log(elementDeTableau); //Affiche chaque élément individuellement
// }

// Vous pouvez manipuler   elementDeTableau  comme bon vous semble (par exemple, l’ajouter dans un autre tableau, l'additionner avec une variable globale, etc.).

// Votre application de streaming permet aux utilisateurs de noter les séries sur 5 étoiles. Votre collègue a construit le composant pour afficher la note moyenne pour chaque série, mais elle a besoin que vous écriviez la fonction qui va calculer cette moyenne.

// Elle vous explique que la fonction doit prendre un tableau de nombres comme argument, et retourner un nombre qui correspond à la note moyenne calculée.

// Suivez les étapes suivantes :

// Au bon endroit dans la déclaration de fonction, choisissez un nom pour le paramètre de votre fonction. N'oubliez pas, ce sera un tableau de nombres.
// Pour calculer une moyenne, on ajoute toutes les valeurs ensemble, puis on divise par le nombre de valeurs.

// Créez une variable qui stockera la somme de tous les nombres du tableau. Initialisez-la avec la valeur zéro.

// Sachant que le paramètre reçu est un tableau de nombres, utilisez une boucle for pour ajouter chaque nombre du tableau à votre variable   somme  .

//  Créez une constante qui contient le résultat de la somme finale divisée par le nombre de valeurs dans le tableau reçu en argument.

// Faites en sorte que la fonction retourne le résultat final.

// BONUS : La troisième série, Les Insectes de L'Isla Clara, n'a pas l'air de fonctionner correctement. En fait, elle n'a pas encore reçu de note, donc le tableau passé ne contient aucune valeur.














// Modify the code here
// ======================

const calculateAverageRating = (valeurs) => {   // je donne un nom à la fonction ici je choisi valeur pour les valeurs dans les tableaux
    if (valeurs.length === 0 ){  // je ramène la valeur à 0 si strictement égale à
        return 0;
    }

    let somme =0; //j'initialise ma variable somme à 0

    for(let valeur of valeurs){ //avec la boucle for, je vais chercher une nouvelle variable "valeur" dans les "valeurs"
        somme+=valeur;  //j'ajoute à somme chaque "valeur" dans chaque tableau
    }

    return somme / valeurs.length; // et je lui fais un retour pour afficher ma "somme" / "la longueur des tableau"(nombre d'évaluation) pour obtenir la moyenne
  

}

// ======================

const tauRatings = [5, 4, 5, 5, 1, 2]; //les tableaux avec les éval
const colinRatings = [5, 5, 5, 4, 5];
const claraScore = [5, 2, 3, 4, 5]

const tauAverage = calculateAverageRating(tauRatings); //incrémenter la fonction au variable
const colinAverage = calculateAverageRating(colinRatings);

if (tauAverage && colinAverage) {
  document.querySelector('#tau-score').innerText = tauAverage.toFixed(1) + ' stars';
  document.querySelector('#colin-score').innerText = colinAverage.toFixed(1) + ' stars';
  document.querySelector('#clara-score').innerText = `${calculateAverageRating([claraScore]) === 0 ? 'No ratings' : calculateAverageRating([5, 2, 3, 4, 5]) + ' stars'}`
}