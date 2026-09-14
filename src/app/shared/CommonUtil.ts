import { environment } from "../../environments/environment";

export class CommonUtil{

    static getUserName(){
        return "Dev-user"
    }

    static saveUser(username:string){
        console.log("User with username "+ username+ " saved to DB")
    }

    static generateUUID(){
        return crypto.randomUUID();
    }

    static getUserRole(){
        console.log(environment.role)
        return environment.role
         
    }
}