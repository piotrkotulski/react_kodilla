import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button"

const SearchForm = () => {
    const [searchText, setSearchText] = useState(''); // Stan lokalny dla wpisywanej frazy
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchText.toLowerCase() });
        setSearchText('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput
                placeholder="Search.."
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;