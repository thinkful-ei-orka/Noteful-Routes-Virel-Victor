import React from 'react';
import './AddForm.css';

export default function AddForm(props) {
     const { className, ...otherProps } = props
     return (
          <form 
               className={['Add-Form', className].join(' ')}
               action='#'
               { ...otherProps }
          />
     )
}