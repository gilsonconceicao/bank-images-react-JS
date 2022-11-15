import React, { useEffect, useState } from 'react';
import { getImages } from '../../hooks/useGetImages';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { BsSearch } from 'react-icons/bs'

import styles from './Images.module.css';

import axios from 'axios';


const Images = () => {
  const [resultSearch, setResultsSearch] = useState([]);
  const [serach, setSearch] = useState('');

  const [images] = getImages();

  const requestSearch = axios.create({
    baseURL: `https://pixabay.com/api/?key=31329096-f9074df237484714028849600&q=${serach}&image_type=photo&pretty=true`
  });



  const handleGetDataSearch = async (e) => {
    e.preventDefault();

    await requestSearch.get()
      .then(response => response.data)
      .then((data) => {
        setResultsSearch(data.hits);
      })
  }

  return (
    <section className={styles['container_images']}>
      <h1>Banco de imagens API pixabay</h1>
      <form onSubmit={handleGetDataSearch}  className={styles.searchImages}>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
        >
          <TextField
            id="standard-basic"
            onChange={(e) => setSearch(e.target.value)}
            label="Buscar por imagem específica"
            variant="standard"
          />
        </Box>
        
        <button type='submit' className={styles.button_search} title='Buscar'><BsSearch /></button>
      </form>

      {/* list images */}

      {!serach.length >= 1 ?
        <ImageList >
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Imagens</ListSubheader>
          </ImageListItem>
          {images.map((item) => (
            <ImageListItem key={item.webformatURL}>
              <img
                src={`${item.webformatURL}?w=248&fit=crop&auto=format`}
                srcSet={`${item.webformatURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.tags}
                loading="lazy"
              />
              <a href={item.pageURL} target='_blank'>
                <ImageListItemBar
                  title={String(item.tags)}
                  subtitle={'@' + item.user}
                />
              </a>
            </ImageListItem>
          ))}
        </ImageList>
        :
        <ImageList>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Imagens</ListSubheader>
          </ImageListItem>
          {resultSearch.map((item) => (
            <ImageListItem key={item.webformatURL}>
              <img
                src={`${item.webformatURL}?w=248&fit=crop&auto=format`}
                srcSet={`${item.webformatURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.tags}
                loading="lazy"
              />
              <a href={item.pageURL} target='_blank'>
                <ImageListItemBar
                  title={String(item.tags)}
                  subtitle={'@' + item.user}
                />
              </a>
            </ImageListItem>
          ))}
        </ImageList>
      }

    </section>
  )
}

export default Images; 