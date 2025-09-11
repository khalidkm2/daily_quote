
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
    createdAt: Date,
    preferredHour: number,
    preferredMinute: number,
    timezone: string
}

export interface Quote {
    id: number,
    text:string,
    author: string,
    
}