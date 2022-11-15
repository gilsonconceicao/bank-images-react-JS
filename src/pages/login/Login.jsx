import React from 'react';
import FormLogin from '../../components/FormLogin';
import imgRocket from '../../assets/img/rocket_start.png'; 
import wavesvg from '../../assets/svg/waves.svg';

import styles from './Login.module.css';
 
const Login = () => {

    return (
        <section className={styles.container_login}>
            <div className={styles.layout_form}>
                <FormLogin />
                <img className={styles.image_rocket} src={imgRocket} alt="rocket_image" />
            </div>
        
            <img className={styles.waves} src={wavesvg} alt="waves_svg" />
     
        </section> 
    )
}

export default Login