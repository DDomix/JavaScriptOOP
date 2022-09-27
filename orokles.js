class Allat{
    #labakszama;
    #nev;
    constructor (nev,labakszama){
        this.#nev=nev;
        this.#labakszama=labakszama;
    }
    hangotAd(){
        throw Error("bazmeg továbbra is")
    }
}
class Aranyhal extends Allat{
    constructor (nev){
        super(nev,0);
    }
    hangotAd()
}
class Kutya extends Allat{
    constructor (nev){
        super(nev,4);
    }
    hangotAd(){
        console.log("waou");
    }
}
let kutya=new Kutya("Faszfej");
let hal=new Aranyhal("Nemogeci");
kutya.hangotAd();
hal.hangotAd();