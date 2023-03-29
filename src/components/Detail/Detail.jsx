import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from'axios';
import style from './Detail.module.css';

const Detail = () =>{
    const {detailId} = useParams();

    //creamos un estado con el distractory
    const [character, setCharacter] = useState({}); 
    // useEffect lo voy a usar para trabajar el id, siempre es una CB y un array
    useEffect(() => {
        const URL_BASE = 'https://be-a-rym.up.railway.app/api';
        const KEY = 'fc8485faa954.32266e8830932b728fd1';
    axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)
     .then((response) =>setCharacter(response.data)
    );
    }, [detailId]);


    return (
        <div className={style.fondo}>
            {character.name ? (
                <>
                    <h2>{character.name}</h2>
                    <h3>Status: {character.status}</h3>
                    <h3>Specie: {character.species}</h3>
                    <h3>Gender: {character.gender}</h3>
                    <h3>Origin: {character.origin?.name}</h3>
                    <img src={character.image} className={style.pic} alt="imagen" />
                </>
            ) : (
                <h3>Loading...</h3>
            )}
            
        </div>
    )
};

export default Detail;


//! npm install axios  (similar a fecth)
