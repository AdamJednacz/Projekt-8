import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const MainSearchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        // Tutaj możesz obsłużyć logikę wyszukiwania, na przykład wysyłając zapytanie do API, itp.
        console.log('Searching for:', searchTerm);
    };

    return (

        <div className="main_searchbar">
            <FontAwesomeIcon className="main_searchbar_icon" icon={faMagnifyingGlass} />
            <input
                className="main_searchbar_input"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
        </div>

    )
};

export default MainSearchbar;