import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'

export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes);
    const file = useRef(null);
    const handleSave = () => {
        dispatch(startSaveNote(active));
    }

    const handlePictureUpload = () => {
        file.current.click();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            dispatch(startUploading(file));
        }
    }

    return (
        <div className="notes__appbar">
            <span>28 de Agosto 2020</span>
            <input id="fileSelector" hidden type="file" name="file" ref={file} onChange={handleFileChange} />
            <div>
                <button className="btn" onClick={handlePictureUpload}>
                    Picture
                </button>
                <button className="btn" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
