
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