import { Alert } from '@mui/material';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

import './FormStyle.css';

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const [isUserSystem, loadingSigin, messageError, setMessageError] = useLogin();

    const handleSiginUser = (e) => {
        e.preventDefault();
        
        if (email == '' || password == '') {
            setMessageError('Os dados obrigatoriamente precisam ser preenchidos.'); 
            return
        }

        if (!email.includes('@')) {
            setMessageError('@ é obrigatório no e-mail.')
        } 

        isUserSystem(email, password);

    }

    return (
        <Form onSubmit={handleSiginUser}>
            <h1 className='title_login'>Entrar com a sua conta</h1>
            <p className='paragraph'>A tecnologia muda o mundo.</p>
            
            <label>
                Email
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Inisira o seu e-mail' 
                />
            </label>

            <label>
                Senha
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Inisira a sua senha' 
                />
            </label>

            <p className='info'>Não sou cadastrado. <Link className='hyperLink' to='/'>Cadastrar</Link></p>

            {messageError &&  <Alert severity="error">{messageError}</Alert>}

            {
                loadingSigin ? 
                <button type='submit' disabled className='submitData loading'>
                    Carregando...
                </button> : 
                 <button type='submit' className='submitData'>
                 Entrar
             </button>
            }

        </Form>
    )
}

export default FormLogin