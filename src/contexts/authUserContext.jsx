import React, { useEffect, useState } from "react";

export const authUserContext = React.createContext(); 

export const AuthUserProvider = ({children}) => {
  const [data, setData] = useState(null);  

  const storageAllUser = JSON.parse(localStorage.getItem('saveUsersRegister'));         
  const storageUser = JSON.parse(localStorage.getItem('isLoggedUser'));     
 
  useEffect(() => {
    function isDataStorage () {
        if (storageUser && storageAllUser) {
            setData(storageUser);
        } 
    }
    isDataStorage();
  }, [])  

  return (
    <authUserContext.Provider value={{isLogged: !!data, storageAllUser}}>
      {children}
    </authUserContext.Provider>
  )
}

export const UseAuthContext = () => React.useContext(authUserContext);