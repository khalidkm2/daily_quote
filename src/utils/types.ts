
export interface signUpData {
    name: string,
    email: string,
    password: string
}

export interface signInData {
    email: string,
    password: string
}

export interface userData {
    id: number,
    name: string,
    email: string,
    password: string,
    createdAt: Date
}

export interface Quote {
    id: number,
    text:string,
    author: string,
    
}