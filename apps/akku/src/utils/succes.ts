export class CustomSuccess {
    message:string
    status: number;
    data: Record<string, any>;
    

    constructor(message:string,data: Record<string, any>, status: number) {
        this.message = message
        this.data = data;
        this.status = status;
    }
}
