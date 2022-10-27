//!================================Pratiquez l’écriture de code propre=================

//?=========AVANT========
// //-----CODE NON DRY------

// //variable de différentes personnes
// let personne1 = "Jean";
// let personne2 = "Paul";
// let person3 = "Marcel";

// //On met la première lettre en majuscule, on salue la première personne et on donne le nombre de lettre dans son prénom
// personne1 = personne1[0].toUpperCase() + personne1.substr(1);
// const longueurPrenom1 = personne1.length;
// console.log(`Bonjour ${personne1}, ton prénom contient ${longueurPrenom1} lettres`);

// //On met la première lettre en majuscule, on salue la deuxième personne et on donne le nombre de lettre dans son prénom
// personne2 = personne2[1].toUpperCase() + personne2.substr(1);
// const longueurPrenom2 = personne2.length;
// console.log(`Bonjour ${personne2}, ton prénom contient ${longueurPrenom2} lettres`);

// //On met la première lettre en majuscule, on salue la troisième personne et on donne le nombre de lettre dans son prénom
// personne3 = personne3[2].toUpperCase() + personne3.substr(1);
// const longueurPrenom3 = personne3.length;
// console.log(`Bonjour ${personne3}, ton prénom contient ${longueurPrenom3} lettres`);


// //-----CODE MAL NOMMÉ------

// //tableau des ages des élèves dans la classe
// const lrf = [14, 14, 15, 14, 16, 14, 14, 13];
// // Nombre d'élèves
// const kf = lrf.length;
// // variable pour calculer la somme des ages
// let mf = 0;
// for(let df of lrf){
//   mf += df;
// }
// //moyenne d'age dans la classe
// const mld = mf / kf;
// console.log('Il y a ' + kf + " élèves dans la classe et la moyenne d'age est " + mld);
    


// //-----CODE MAL MIS EN FORME------

// const temperature = 25;

// if(temperature < 10){  console.log("Il fait très froid"); }
// else if(temperature < 0){
// console.log(
// "Il fait froid"
// );
// }else if(temperature < 10){
//   console.log(            "Il fait frais");
// }else if(temperature < 20){
// console.log("Il fait doux");
// }else if(temperature < 30){
//   console.log("Il fait bon");



// }else{
  
  
  
  
//   console.log("Il fait chaud");
// }



//-----CODE NON DRY------

//variable de différentes personnes
let personne1 = "Jean";

let personne2 = "Paul";

let personne3 = "Marcel";

// on créer un fonction 

function saluer(prenom){
    const monPrenom = prenom[0].toUpperCase() + prenom.substr(1);
    const longueurPrenom = monPrenom.length;
    console.log(`Bonjour ${monPrenom}, ton prénom contient ${longueurPrenom} lettres`);

}

//et on salue les personne avec la fonction

saluer(personne1);
saluer(personne2);
saluer(personne3);









//-----CODE MAL NOMMÉ------

//tableau des ages des élèves dans la classe
const ageDesEleves = [14, 14, 15, 14, 16, 14, 14, 13];
// Nombre d'élèves
const nombreEleves = ageDesEleves.length;
// variable pour calculer la somme des ages
let sommeAges = 0;
for(let sommeAges of ageDesEleves){
  sommeAges += nombreEleves;
}
//moyenne d'age dans la classe
const moyenneAge = sommeAges / nombreEleves;
console.log('Il y a ' + nombreEleves + " élèves dans la classe et la moyenne d'age est " + moyenneAge);
    


//-----CODE MAL MIS EN FORME------

const temperature = 25;

if(temperature < 10){  

    console.log("Il fait très froid"); 

}

else if(temperature < 0){

    console.log("Il fait froid");

}

else if(temperature < 10){

    console.log("Il fait frais");

}

else if(temperature < 20){

    console.log("Il fait doux");

}

else if(temperature < 30){

    console.log("Il fait bon");

}

else{
  
    console.log("Il fait chaud");
    
}
