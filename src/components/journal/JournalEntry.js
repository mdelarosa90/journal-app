import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div className="journal__entry-picture" style={{backgroundSize: 'cover', backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/A_moon.jpg/1280px-A_moon.jpg)'}} />
            <div className="journal__entry-body"> 
                <p className="journal__entry-title">Un nuevo día</p>
                <p className="journal__entry-content">Reprehendit id in duis consecteur deserunt veniam fugitat</p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
