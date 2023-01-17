import React from 'react';
import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button'
import TextInput from "../TextInput/TextInput"
import { useDispatch } from 'react-redux';
import {addList} from '../../redux/listsRedux';

const ListForm =() => {
const [title, setTitle] = useState('');
const [description, setDesciption] = useState('');
const dispatch = useDispatch();

const handleSubmit = e => {
  e.preventDefault();
  dispatch(addList({ title, description }));
  setTitle('');
  setDesciption('');
};

	return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
    Title:
    <div className={styles.style}>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} /></div>
    Icon: <div className={styles.style}>
      <TextInput value={description} onChange={(e) => setDesciption(e.target.value)} /></div>
    <div className={styles.style}>
      <Button>Add List</Button></div>
</form>
	);
};

export default ListForm;