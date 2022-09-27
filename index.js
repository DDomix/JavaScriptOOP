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
    static atlageletkor(users){
        let sum=0;
        for(let u of users){
            sum+=u.#eletkor;
        }
        return sum/ users.lenght;
    }
}
let user=new User("User2",19)
let users=[
    user,
    new User("User5",70),
    new User("User6",36),
];
let atlag=User.atlageletkor(userek);
console.log(atlag);
console.log(valami instanceof User)
console.log(user instanceof User)
//user.eletkor("kutya");
user.kiir();
let k=user.kiir;
k();
