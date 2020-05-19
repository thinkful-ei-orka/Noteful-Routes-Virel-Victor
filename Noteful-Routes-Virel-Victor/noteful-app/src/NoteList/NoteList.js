import React from 'react';
import Note from '../Note/Note';
import { Link } from 'react-router-dom';
import NavButton from '../Buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NoteList.css';

export default function NoteList(props) {
     return (
          <section className='NoteList'>
               <ul> {props.notes.map(note =>
                    <li key={note.id}>
                         <Note
                         id={note.id}
                         name={note.name}
                         modified={note.modified}
                         />
                    </li>
                    )}
               </ul>
               {/* button with link to go to add-note (remember correct route is '/add-note'*/}
               <div className='NoteList-button-container'>
               <NavButton 
               tag={ Link }
               className='NoteList-Add-Note-Button' 
               type='button'
               to='/add-note'
               >
               <FontAwesomeIcon icon='plus' />
               <br />
                    Note
               </NavButton>
               </div>
          </section>
     )
}

NoteList.defaultProps = {
     notes: []
}