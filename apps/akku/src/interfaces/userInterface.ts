export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    mobile: string;
    alter_mobile?: string | null;
    created_on: Date;
    updated_on?: string | null;
    address: string;
    status: number;
    role:string
}
