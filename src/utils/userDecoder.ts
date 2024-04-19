import { jwtDecode } from "jwt-decode";
export const decodeToken = (token : string)=>{
    const decoded = jwtDecode(token);
    return decoded;
} 