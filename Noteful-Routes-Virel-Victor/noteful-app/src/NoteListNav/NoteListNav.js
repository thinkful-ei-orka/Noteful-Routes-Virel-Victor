import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavButton from '../Buttons/Button';

import './NoteListNav.css';

// filter function to get note count
const noteCounter = (notes= [], folderId) =>
notes.filter(note => note.folderId === folderId).length;


export default function NoteListNav(props) {
     return (
          <div className='NoteListNav'>
               <ul className='NoteListNav-list'>
                    {props.folders.map(folder => 
                    <li key={folder.id}>
                         <NavLink
                         to={`/folder/${folder.id}`}
                         className='NoteListNav-folder-link'
                         >

                         <span className='NoteListNav-number-notes'>
                              {noteCounter(props.notes, folder.id)}
                         </span>
                         {folder.name}                         
                         </NavLink>
                    </li>
                    )}
               </ul>
               {/* button to go to add-folder (remember correct route) */}
               <div>
               <NavButton 
               tag={ Link }
               to='/add-folder'
               type='button'
               className='NoteListNav-Add-Folder-Button'
               >
               <FontAwesomeIcon icon='plus' />
                    Folder
               </NavButton>
               </div>
          </div>
     )
}

NoteListNav.defaultProps = {
     folders: []
}