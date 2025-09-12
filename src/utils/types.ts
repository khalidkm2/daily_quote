
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

export interface UserPreferedData {
    email: string,
    preferredMinute: number | null,
    preferredHour: number | null,
    timezone: string | null
}

export interface updateTimeData {
  preferredMinute: number;
  preferredHour: number;
  timezone: string;
}
