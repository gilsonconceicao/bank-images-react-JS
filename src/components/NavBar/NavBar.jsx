import React from 'react'
import {  NavLink } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin';

import styles from './NavBar.module.css';

export const NavBar = () => {


  return (
    <header className={styles.headerPage}>
      <h2>Logo</h2>
      <ul className={styles.listPage}>
        <li>
          <NavLink 
            className={({ isActive }) => (isActive ? styles.active_all  : "")}
            to='/home'>
              Home
          </NavLink>

          <NavLink 
            className={({ isActive }) => (isActive ? styles.active_all  : "")} 
            to='/Images'>
              Imagens
          </NavLink>
         
          <NavLink
            className={({ isActive }) => (isActive ? styles.active_all  : "")}
            to='/profile'>
              Perfil
          </NavLink>
        </li>
      </ul>
    </header>
  )
}
