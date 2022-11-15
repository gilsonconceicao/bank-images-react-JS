import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useRegister } from '../hooks/useRegister';
import './FormStyle.css';
import { Link } from 'react-router-dom';

const FormRegister = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [messageError, setMessageError] = useState('');

  //hook save info 
  const [saveUserStorage, systemMessage, saveLoading, setMessage] = useRegister();

  const handleSubmitData = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setMessageError('A senha precisa ter 6 ou mais caracteres.'); 
      return
    }

    if (name != '' && lastName != '' && email != '' && password != '') {

      const objectUserGerator = {
        id: Math.random(),
        name,
        lastName,
        email,
        password
      }

      saveUserStorage(objectUserGerator);
      setName('');
      setLastName('');
      setPassword('');
      setEmail('');

      location.href = '/login';
      setMessageError('');
    } else {
      setMessageError('Preencha os dados corretamente.')
    }

    setMessage('');
  } 

  return (
    <form onSubmit={handleSubmitData}>
      <h1 className='title_login'>Crie a sua conta conosco</h1>
      <p className='paragraph'>Dê o primeiro passo para mudar o mundo.</p>

      <label>
        Nome
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Inisira o seu nome'
        />
      </label>

      <label>
        Sobrenome
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Inisira o seu sobrenome'
        />
      </label>

      <label>
        Email
        <input
          type="email"
          value={email}
          required
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

      {systemMessage &&
        <p className='message_success'>
          <Alert severity="success"> Dados salvos com sucesso. <Link to='/login'>Entrar</Link></Alert>
        </p>
      }

      <p className='info'>Já stenho uma conta. <Link className='hyperLink' to='/login'>Entrar</Link></p>

      {messageError &&  <Alert severity="error">{messageError}</Alert>}

      {
        saveLoading ?
          <button type='submit' disabled className='submitData loading'>
            Cadastrando...
          </button> :
          <button type='submit' className='submitData'>
            Cadastrar
          </button>
      }
    </form>
  )
}

export default FormRegister;  