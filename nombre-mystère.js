// Créer un jeu simple de devinette de nombre. Le jeu choisit aléatoirement un nombre 
// entre 1 et 100, puis il met le joueur au défi de le deviner en 10 tentatives maxi.À chaque tour, le 
// joueur doit être informé s'il a deviné ou non le bon nombre — si ce n'est pas le cas, le jeu lui 
// indique si son estimation est trop basse ou trop élevée.Le jeu se termine quand le joueur a deviné le nombre 
//  mystère, ou s'il a épuisé ses 10 chances. À la fin du jeu, le joueur a la possibilité de débuter une nouvelle
// partie.
//Bonus : Le jeu doit également rappeler au joueur les 
// nombres déjà proposés
//TODO
// 1 demander au user d'entrer un nombre
// 2 le jeu choisi un nombre aléatoire entre 1 et 100
// 3 le useur et informer si son nombre est = au nombre mystère
// 4.1 si ils sont egualent on affiche succés fin du jeu
// 4.2 si ils sont different on affiche le nore mystère et plus grand ou plus petit
// 4.2.1 le jeu doit s'arreter à la 10eme tentative
// 5 fair un commende pour recommencer une nouvelle partie

let Math.floor(Math.random() * Math.floor(100));




console.log(getrandomArbitrary(min, max));
let nombreMystère;
let numberUseur;
let n = prompt(nombreMystère);
console.log(n);
let m = prompt(numberUseur);
console.log(m);
