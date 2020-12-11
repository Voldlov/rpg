//#region imports
//bug, fonctionne sans
//import Entity from "entity.js";
//#endregion

//#region INTERFACE
//rendre invisible ce qu'on veut
function hide(name)
{
    $(name).hide(250);
}
//rendre visible ce qu'on veut
function show(name)
{
    $(name).show(250);
}
//cacher dès le début
$(document).ready(function(){$('#interface').hide()})
$(document).ready(function(){$('#center').hide()})
//LOG

//Changer les images
function Background()
{
    $("body").css("background-image: url(" + Monster.Img() + ")")
}
//je ne comprend pas pourquoi ça ne fonctionne pas.
$(".name").append('kana');
//#endregion

//#region JEU
//Nouvelle partie
function newGame()
{
    //retirer le choix
    hide('#home')
    //ajouter la demande de paramètre
    show('#interface')
    //petit problème, mon bouton refresh ma page
    //et je ne veux qu'une seule, je cherche une solution
    creatPlayer();
}
function creatPlayer()
{
    Player.Appeler();
    //récupérer le nom
    $("#inter").click(function(){
        let nom = $("#entername").val();
        let Player = new Entity(nom);
    })
    //récupérer les cases cochés

    //faire l'objet

    //lancer l'introduction
    document.location.href="game.html"; 
}
//lancement d'ancienne partie
function oldgame()
{
    alert("pas encore fait")
}

//Qui commence
function FirstAtk()
{
    if(Monster.Speed() <= Player.Speed())
    {
        //Le joueur commence
        return 0;
    }
    else
    {
        return 1;
        //le monstre commence
    }
}
//Si le combat est fini ou non.
function life()
{   
    //vérifier la vie du monstre et du joueur, si à 0 arrêter le combat
    if(Player.Heals == 0)
    {
        return 2;
    }

    else if(Monster.Heals == 0)
    {
        return 1;
    }
}
//fonction du combat en lui-même
function Fight()
{
    //créer le montre
    let Monster = new Entity(truc);
    //changer le fond suivant le monstre
    Background();
    let state = 0;
    while(state == 0)
    {
        
        if(state=life() == 1)
        {
            //monstre mort, le combat est gagné
        }
        else if(state=life() == 2)
        {
            //le joueur est mort, le combat est perdu
            GameOver(0);
        }
        //les deux protagonistes sont vivant, le combat continue
        atk(FirstAtk())
    }
    
}
function atk(a)
{
    //rudimentaire, la vitesse ne change rien en réalité mais 
    //j'ai pour objectif de faire changer par la suite
    if(a==0)
    {
        //retirer de la vie au monstre avant
        Monster.RMHeals(Player.Strength());
        Player.RMHeals(Monster.Strength());
    }
    else
    {
        //retirer de la vie au joueur avant
        Player.RMHeals(Monster.Strength());
        Monster.RMHeals(Player.Strength());
    }
}

//fin de partie
function GameOver(type)
{
    switch(type)
    {
        case 0:
            //le héro meurt
            break;
        case 1:
            //Ambre meurt
            break;
        case 2:
            //le héro est corrompu
            break;
    }
    //afficher le game over
}
//#endregion
