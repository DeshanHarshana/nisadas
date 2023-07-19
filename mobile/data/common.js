export class CommonMethod{
    constructor(){

    }

static validEmail(email){
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}