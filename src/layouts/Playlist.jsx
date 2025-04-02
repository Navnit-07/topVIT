import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import style from './Playlist.module.css'
import { Link } from 'react-router-dom'
import Subjects from '../components/Subjects'
import SearchBar from '../components/SearchBar'

function Playlist() {
  const [subjects, setSubjects] = useState(Subjects);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search === '') {
      setSubjects(Subjects);
      return;
    }
    const filteredSub = Subjects.filter((sub) => {
      return ((sub.heading.toLowerCase().includes(search) || (sub.text.toLowerCase().includes(search))));
    });

    setSubjects(filteredSub);

  }, [search])

  return (
    <div className={style['container']}>
      <div className={style['search-bar']} ><SearchBar setSearch={setSearch} search={search} /></div>
      <div className={style['card-container']}>
        {subjects.map((subject) => {
          return (<Link key={subject.id} to={subject.to} target='_blank'><Card color={subject.color} image={subject.image} heading={subject.heading} text={subject.text} width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer' /></Link>)
        })}
      </div>
      {!subjects.length && <h1 className={style['not-found']}>No subject found..</h1>}
    </div>
  )
}

export default Playlist