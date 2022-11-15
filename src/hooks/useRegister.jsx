import { useState } from "react"

export const useRegister = () => {
    const [data, setData] = useState(null);
    const [systemMessage, setMessage] = useState('');
    const [saveLoading, setLoadingSave] = useState(false);


    const saveUserStorage = async (dataUserRegister) => {
        setLoadingSave(true);

        let saveUsersRegister = new Array()
        
        if (localStorage.hasOwnProperty("saveUsersRegister")) {
            saveUsersRegister = JSON.parse(localStorage.getItem("saveUsersRegister"))
        }
        
        saveUsersRegister.push(dataUserRegister);
        
        await localStorage.setItem("saveUsersRegister", JSON.stringify(saveUsersRegister))
        
        setData(saveUsersRegister);
        
        setTimeout(() => {
            setLoadingSave(false);     
        }, 1000);
        
        setMessage('Dados salvos com sucesso.');
    }

    return [
        saveUserStorage,
        systemMessage,
        saveLoading,
        setMessage, 
        data, 
        setData
    ]
}