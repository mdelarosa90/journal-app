import React from 'react'
import dayjs from 'dayjs';
import advancedFormat from "dayjs/plugin/advancedFormat";
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
dayjs.extend(advancedFormat);

export const JournalEntry = ({id, date, title, body, url}) => {
    const dispatch = useDispatch();

    const handleEntryClick = () => {
        dispatch(activeNote(id, {
            date, title, body, url
        }));
    }

    return (
        <div className="journal__entry" onClick={handleEntryClick}>
           {url && <div className="journal__entry-picture" style={{backgroundSize: 'cover', backgroundImage: `url(${url})`}} />}
            <div className="journal__entry-body"> 
                <p className="journal__entry-title">{title}</p>
                <p className="journal__entry-content">{body}</p>
            </div>
            <div className="journal__entry-date-box">
                <span>{dayjs(date).format('dddd')}</span>
                <h4>{dayjs(date).format("Do")}</h4>
            </div>
        </div>
    )
}
