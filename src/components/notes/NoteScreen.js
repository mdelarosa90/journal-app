import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title } = formValues;
    const activeId = useRef(note.id);

    useEffect(() => {
        if (activeId.current !== note.id) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch])

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input type="text" value={title} name="title" onChange={handleInputChange} autoComplete="off" placeholder="Some awesome title" className="notes__title-input" />
                <textarea placeholder="What happened today?" name="body" onChange={handleInputChange} value={body} className="notes__text-area"></textarea>
                {!!note.url && <div className="notes__image">
                    <img src={note.url} alt="imagen" />
                </div>}
            </div>
        </div>
    )
}
