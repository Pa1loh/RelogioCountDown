export default class Countown{
    constructor(futureDate){
        this.futureDate = futureDate;
    }
    get actualDate(){
        return new Date();
    }
    get _futureDate(){
        return new Date(this.futureDate);
    }
}