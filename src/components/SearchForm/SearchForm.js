import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store';

const SearchForm = props => {

  const [searchValue, setValue] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
   // dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchValue });
    dispatch(updateSearchString({ searchValue}));
    setValue('');
  };

  return (
      <form className={styles.searchForm} onSubmit={handleSubmit}>
          <TextInput placeholder="Search..." value={searchValue} onChange={(e) => setValue(e.target.value)}/>
          <Button>
              <span className="fa fa-search" />
          </Button>
      </form>
  );
};
export default SearchForm;