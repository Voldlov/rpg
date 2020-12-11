//class dédié aux entités.
//le héro, son assistante, les PNJ et les ennemis sont tous de la même classe car ils partagent les mêmes caractéristiques
class Entity{
    name;
    classe;
    heals; //vie actuelle
    healsmax; //vie max
    mana;
    manaMax;
    corruption;
    resistance;
    strength;
    speed;
    strength;
    money; //argent
    power; //pouvoir
    img1;
    img2;
    img3;
    constructor(name)
    {
        this.name = name;
        /*
        this.classe=classeSetting;
        //a personaliser les classes
        //les ennemis ont des classes aléatoires et peuvent avoir des boosts
        //équilibrage à faire et monté de niveau pour les monstres
        switch(classeSetting) {
            case "colère":
                healsmax=5;
                manaMax=0;
                speed=5; 
                strength=5; 
                intelligence=2; 
                resistance=5; 
                money=0; 
                power=0; 
                img1 = "colere.jpg";
                img2 = "colere2.jpg";
                break;
            case "Avarice":
                healsmax=10;
                manaMax=10;
                speed=10; 
                strength=1; 
                intelligence=5; 
                resistance=1; 
                money=5; 
                power=1; 
                img1 = "avarice.jpg";
                break;
            case "Envie":
                healsmax=5;
                manaMax=0;
                speed=5; 
                strength=5; 
                intelligence=2; 
                resistance=5; 
                money=0; 
                power=0; 
                img1 = "envie.jpg";
                break;
            case "Orgueil":
                healsmax=5;
                manaMax=2;
                speed=1; 
                strength=2; 
                intelligence=2; 
                resistance=10; 
                money=5; 
                power=10; 
                img1 = "orgueil";
                img2 = "orgueil2";
                break;
            case "Gourmandise":
                healsmax=20;
                manaMax=0;
                speed=5; 
                strength=5; 
                intelligence=2; 
                resistance=5; 
                money=0; 
                power=0; 
                img1 = "gourmandise";
                break;
            case "Paresse":
                healsmax=20;
                manaMax=0;
                speed=0; 
                strength=5; 
                intelligence=2; 
                resistance=5; 
                money=0; 
                power=0; 
                img1 = "paresse";
                break;
            case "Luxure":
                healsmax=5;
                manaMax=0;
                speed=5; 
                strength=5; 
                intelligence=2; 
                resistance=5; 
                money=0; 
                power=0; 
                img1 = "luxure";
                img2 = "luxure1";
                img3 = "luxure2";
                break;
        }
        */
    }
    CareHeals(){
        //se soigner
    }
    CareMana(){
        //récupérer son pouvoir
    }
    Save(){
        //enregistrer la progression avec AJAX
    }

//#region VOIR
    Name(){
        return this.name;
        //sortir le nom
    }
    Class(){
        return this.classe;
        //sortir la classe
    }
    Heals(){
        return this.heals;
        //sortir les points de vie actuelle
    }
    HealsMax(){
        return this.healsmax;
        //sortir les points de vie max
    }
    Speed(){
        return this.speed;
        //sortir la vitesse
    }
    Strength(){
        return this.strength;
        //sortir la force
    }
    Intelligence(){
        return this.intelligence;
        //sortir l'intelligence
    }
    Resistance(){
        return this.resistance;
        //sortir la résistance
    }
    Money(){
        return this.money;
        //sortir l'argent
    }
    Item(){
        //boucle
        //sortir tout l'inventaire
    }
    Img(){
        return this.img1
    }
//#endregion

//#region RETRAIT METHODE
    RMHeals(degat){
        heals=heals-degat;
        //retirer
    }
    RMMana(degat){
        mana=mana-degat;
    }
    RMMoney(degat){
        this.money=this.money-degat;
        //retirer
    }
    RMItem(){

    }
//#endregion

//#region AJOUT METHODE
    //ajout
    ADHeals(){
        heals=this.healsmax;
    }
    ADMana(){
        mana=this.manaMax;
    }
    ADSpeed(){
        this.speed++;
        //ajout
    }
    ADStrength(){
        this.strength++;
        //ajout
    }
    ADIntelligence(){
        this.intelligence++;
        //ajout
    }
    ADResistance(){
        this.resistance++;
        //ajout
    }
    ADMoney(gains){
        this.money=this.money+gains;
        //ajout
    }
    ADItem(){

    }
//#endregion
}

//#region EXPORT
//comme vous pouvez le tester, export et import ne fonctionne pas
//je cherche un solution, en attendant la classe se retrouve dans le main.
//fonctionne sans

//export {Entity};
//module.exports = Entity;
//#endregion