import { onlyLetter, onlyNumbers } from "../validator"
export const cleanNumbers = (limit:string) =>{
    const cad  = limit.trim()
    return cad.replace(onlyNumbers,'')
}

export const cleanCategory = (category:string) =>{
    const cad = category.trim()
    return cad.replace(onlyLetter,'')
}