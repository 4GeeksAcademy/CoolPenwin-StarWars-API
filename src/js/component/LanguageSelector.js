import React, { useState, useContext } from 'react';
import { Context } from './AppContext'; // Asegúrate de que el contexto importado sea el correcto

export const LanguageSelector = () => {
    const { store, actions } = useContext(Context); // Asegúrate de que el contexto tenga store y actions
    const [selectedLanguage, setSelectedLanguage] = useState('Terran');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const languages = ['Terran', 'Aurebesh', 'Mandalorian'];

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        actions.changeLanguage(language); // Llama a la acción para cambiar el idioma
    };

    return (
        <div 
            onMouseEnter={() => setIsDropdownVisible(true)} 
            onMouseLeave={() => setIsDropdownVisible(false)}
        >
            <div>{selectedLanguage}</div>
            {isDropdownVisible && (
                <ul>
                    {languages.map((language) => (
                        <li key={language} onClick={() => handleLanguageChange(language)}>
                            {language}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};