let valami={
    anev:"Username",
    azeletkor:23
}

class User{
    #eletkor=0;
    
    constructor(nev,eletkor){
        this.nev=nev;
        this.eletkor=eletkor;
    }
    get eletkor(){
        return this.#eletkor;
    }
    set eletkor(eletkor){
        if(typeof eletkor=='number'&& eletkor>=0){
            this.#eletkor=eletkor;
        } else{
            throw new Error("bazmeg hülyegyerek");
        }
    }
    kiir(){
        console.log(user.nev, user.eletkor)
    }
    login(usernev,pass){
        return false;
    }
}
let user=new User("User2",19)

console.log(valami instanceof User)
console.log(user instanceof User)
//user.eletkor("kutya");
user.kiir();
let k=user.kiir;
k();