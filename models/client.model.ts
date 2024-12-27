export interface Option {
    url: string;
    method : string;
    data?: any;
    params? : any;
    header?: any;
    responeType?: string;

}

// interfacr คือโครงส้าง

export interface Params {
    page? : number;
    size? : number;
    search? : string;
}