import { useState } from "react";

export const useLogin = () => {
    const dataStorage = JSON.parse(localStorage.getItem('saveUsersRegister'));
    const [loadingSigin, setLoading] = useState(false);

    const [messageError, setMessageError] = useState('');

    const isUserSystem = (email, password) => {
        const allEmails = dataStorage.map(checkedEmail => checkedEmail.email);
        const allPasswords = dataStorage.map(checkedPasswords => checkedPasswords.password);

        if (password < 6) {
            setMessageError('A senha precisa ter 6 ou mais caracteres.'); 
            return
        }

        if (allEmails.includes(email) && allPasswords.includes(password)) {
            setLoading(true); 

            setTimeout(() => {
                setLoading(false);     
                location.href = '/';
            }, 1000);

            localStorage.setItem('isLoggedUser',
                JSON.stringify({
                    email,
                    password
                }));

        } else {
            setMessageError('Usuário não existe. Por favor, confira.'); 
            return 
        }
    }

    return [
        isUserSystem, 
        loadingSigin, 
        messageError,
        setMessageError
    ]
}