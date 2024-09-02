import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export const CharacterList = () => {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters);

    useEffect(() => {
        dispatch(loadCharacters());
    }, [dispatch]);

    return (
        <div>
            <h1>Character Names</h1>
            {characters.map(character => (
                <CharacterName key={character.uid} name={character.name} />
            ))}

            <h1>Character Details</h1>
            {characters.map(character => (
                <CharacterDetails key={character.uid} character={character} />
            ))}
        </div>
    );
};

import React from 'react';

export const CharacterDetails = ({ character }) => {
    return (
        <div>
            <h2>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
        </div>
    );
};





export const CharacterName = ({ name }) => {
    return <div>{name}</div>;
};

