import jsonwebtoken from "jsonwebtoken"
import {config} from "dotenv"
config()
const { TOKEN_SECRET } = process.env;

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