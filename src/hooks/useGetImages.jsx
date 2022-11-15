import { useEffect, useState } from "react"
import axios from "axios";

export const getImages = () => {
    const [images, setImages] = useState([]);

    const url = 'https://pixabay.com/api/?key=31329096-f9074df237484714028849600&image_type=photo&pretty=true';

    const request = axios.create({
        baseURL: url
    });

    useEffect(() => {
        const getDataImages = async () => {
            await request.get()
                .then(response => response.data)
                .then((data) => {
                    setImages(data.hits);
                })
        }
        getDataImages();
    }, []);

    return [images]
}