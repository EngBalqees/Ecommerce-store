import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
export const UserContext = createContext();

const UserContextProvider = ({children})=>{
    const [userToken, setUserToken] = useState(localStorage.getItem('userToken'));
const [userName, setUserName] = useState(null);
const getUserData = () =>{
   if (userToken!=null){
    const decoded = jwtDecode(userToken);
    setUserName(decoded.userName);
   }
};
useEffect( () =>{
    getUserData();
},[userToken])

return <UserContextProvider value={{setUserToken,userName,setUserName}}>
    {children}
</UserContextProvider>
}
export default UserContextProvider