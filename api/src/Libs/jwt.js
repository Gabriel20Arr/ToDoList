import jsonwebtoken from "jsonwebtoken"
import { TOKEN_SECRET } from "../config.js"

export function createAccessToken(payload){
    return new Promise((resolve, reject) => {
        jsonwebtoken.sign(
            payload,     
            TOKEN_SECRET, 
            {
                expiresIn: "1d"
            }, (error, token) => {
                if(error) reject(error)
                resolve(token)
        })
    })
}