let valami={
    anev:"Username",
    azeletkor:23
}

class User{
    constructor(nev,eletkor){
        this.nev=nev;
        this._eletkor=eletkor;
    }
    get eletkor(){
        return this._eletkor;
    }
    set eletkor(eletkor){
        if(typeof eletkor=='number'&& eletkor>=0){
            this._eletkor=eletkor;
        }
    }
    kiir(){
        console.log(user.nev, users.eletkor)
    }
    login(usernev,pass){
        return false;
    }
}
let user=new User("User2",19)
console.log(valami instanceof User)
console.log(user instanceof User)
user.kiir();