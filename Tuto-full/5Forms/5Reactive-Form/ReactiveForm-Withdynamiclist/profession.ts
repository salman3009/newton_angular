export class Profession {

    public keyword:string='';
    public value:string='';

    constructor(public keywordData:string,public valueData:string){
        this.keyword=keywordData,
        this.value=valueData;
    }
}
