import React from 'react';
import FormRegister from '../../components/FormRegister';
import imgRocket from '../../assets/img/rocket_img.png'; 
import wavesvg from '../../assets/svg/wavesRegister.svg';

import styles from './Register.module.css';

const Register = () => {
    return (
        <section className={styles.container_register}>
            <div className={styles.layout_form_register}>
                <FormRegister /> 
                <img className={styles.image_rocketre_gister} src={imgRocket} alt="rocket_image" />
            </div>
       
            <img className={styles.wavesre_gister} src={wavesvg} alt="waves_svg" />
     
        </section>
    )
}

export default Register;