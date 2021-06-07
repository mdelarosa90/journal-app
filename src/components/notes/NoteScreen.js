import React from 'react'
import {NotesAppBar} from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input type="text" autoComplete="off" placeholder="Some awesome title" className="notes__title-input" />
                <textarea placeholder="What happened today?" className="notes__text-area"></textarea>
                <div className="notes__image">
                    <img src="https://www.ninoversace.com/wp-content/uploads/landscape-mountains-sky-4843193.jpg" alt="imagen" />
                </div>
            </div>
        </div>
    )
}
