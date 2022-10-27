//!===========================Pratiquez les méthodes instance======================

// Voyons maintenant comment utiliser des méthodes d'instance pour enregistrer l'application de diffusion vidéo.

// Rendez-vous sur cet éditeur CodePen.

// Plutôt que d'utiliser une fonction pour calculer la note moyenne pour une série, on a décidé que la classe Show (ou "Série") devrait gérer les nouvelles notes automatiquement.

// Comme vous pouvez le constater, la classe   Show  contient un  Array  ratings  , pour les notes, qui est initialisé vide, et une propriété   averageRating  (note moyenne) de zéro.

// Déclarez une méthode instance dans la classe   Show  appelée addRating()  . Elle prendra une   rating  (la note), qui sera un nombre entre 1 et 5, comme paramètre.

// La méthode   addRating()  doit :

// ajouter la note reçue au tableau  ratings  de l'instance ;

// recalculer la valeur averageRating  de l'instance.

// Cliquez sur le bouton "Check ratings" pour vérifier si les séries se mettent à jour correctement. Vous pouvez cliquer plusieurs fois sur le bouton pour voir l'évolution des notes moyennes.







// Modify the code here
// ======================

class Show {
    constructor(title, numberOfSeasons) { //on met les propriétés/attributs à la classe "show"
      this.title = title;
      this.numberOfSeasons = numberOfSeasons;
      this.ratings = [];
      this.averageRating = 0;
    }

    addRating(rating){ //fonction ajout d'une éval
        this.ratings.push(rating); //on rajoute une valeur au tableau à chaque "valeur" 
        let somme = 0; //initialiser une variable "somme" à 0
        for(let rating of this.ratings){  
            somme += rating; //ajouter à somme chaque"valeur"
        }
        this.averageRating = somme / this.ratings.length; //calculer la moyenne
    }

    
    
  }
  
  // ======================
  
  const tau = new Show('The Story of Tau', 5);
  const colin = new Show('The Hero of Old Meldrum', 3);
  const clara = new Show('The Bugs of Isla Clara', 6);
  
  const shows = [tau, colin, clara];
  
  const body = document.querySelector('body');
  const refresh = document.querySelector('#refresh');
  
  refresh.addEventListener('click', () => {
    removeShows();
    addRandomRatings();
    updateShows();
  })
  
  const updateShows = () => {
    for (let show of shows) {
      const showPane = document.createElement('div');
      showPane.classList.add('series-frame');
      const showHeading = document.createElement('h2');
      showHeading.innerText = show.title;
      const showDetails = document.createElement('p');
      const seasons = document.createElement('p');
      seasons.innerText = show.numberOfSeasons + ' seasons';
      const ratings = document.createElement('p');
      ratings.innerText = show.averageRating > 0 ? show.ratings.length + ' ratings\n' + show.averageRating.toFixed(1) + ' stars' : 'No ratings yet';
      showDetails.append(seasons);
      showDetails.append(ratings);
      showPane.append(showHeading);
      showPane.append(showDetails);
      body.append(showPane);
    }
  };
  
  const removeShows = () => {
    const children = [];
    for (let childNode of body.childNodes) {
      children.push(childNode);
    }
    for (let child of children) {
      if (child.tagName == 'DIV') {
        body.removeChild(child);
      }
    }
  }
  
  const addRandomRatings = () => {
    for (let show of shows) {
      if (Math.random() >= 0.2) {
        const numberOfRatings = Math.floor(Math.random() * 4 + 1);
        for (let i = 0; i < numberOfRatings; i++) {
          const rating = Math.floor(Math.random() * 5 + 1);
          show.addRating(rating);
        }
      }
    }
  }
  
  updateShows();