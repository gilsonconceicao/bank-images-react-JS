import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  // date current
  let data = new Date();
  let day = String(data.getDate()).padStart(2, '0');
  let month = data.getMonth()+1;
  let year = data.getFullYear();

  switch (month) {
    case 1:
      month = 'janeiro'
      break;
    case 2:
      month = 'fevereiro'
      break;
    case 3:
      month = 'março'
      break;
    case 4:
      month = 'abril'
      break;
    case 5:
      month = 'maio'
      break;
    case 6:
      month = 'junho'
      break;
    case 7:
      month = 'julho'
      break;
    case 8:
      month = 'agosto'
      break;
    case 9:
      month = 'setembro'
      break;
    case 10:
      month = 'outubro'
      break;
    case 11:
      month = 'novembro'
      break;
    case 12:
      month = 'dezembro'
      break;
    default:
      month = 'Mês indefinido'
      break;
  }


  return (
    <section className={styles['container_home']}>
      <div className={styles['box_article_image']}>
        <article >
          <div className={styles['date']}>
            <p>Dia {day} de {month} de {year}</p>
          </div>
          <h1 className={styles['title']}>Explore imagens de qualidade e navegue conforme a sua criatividade.</h1>
        </article>
        <Link className={styles['linkImage']} to='/images'>Explorar imagens</Link>
      </div>
    </section>
  );
}

export default Home