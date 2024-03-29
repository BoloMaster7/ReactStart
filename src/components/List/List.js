import React from 'react';
import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById} from '../../redux/listsRedux';
import { getColumnsByList} from '../../redux/columnsRedux';
import { useParams, Navigate } from 'react-router';
import SearchForm from '../SearchForm/SearchForm'

const List = () => {
  // const columns = useSelector(getAllColumns);
  const { listId } = useParams();
  const listData = useSelector(state => getListById(state, listId))
  const columns = useSelector(state => getColumnsByList(state, listId));

  if(!listData) return <Navigate to="/" />
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {listData.title}
          </h2>
      </header>
      <p className={styles.description}>
      {listData.description}
        </p>      
      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column}  />
        )}
      </section>
      <SearchForm />
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;