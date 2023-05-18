import React, { useState } from 'react';

function Content({ feedback, setFeedback }) {
    const [newFeedback, setNewFeedback] = useState('');
    const [charactersLeft, setCharactersLeft] = useState(200);
    const [error, setError] = useState()

    let today = new Date(),
        date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newFeedback === '') {
            setError('Enter Type Please')
            return
        }
        const addFeedback = {
            content: newFeedback,
            day: date,
        };
        setFeedback([...feedback, addFeedback]);
        setNewFeedback('');
        setCharactersLeft(200);
        setError('')
    };

    const handleDelete = (i) => {
        const deleteFeedback = [...feedback];
        deleteFeedback.splice(i, 1);
        setFeedback(deleteFeedback);
    };

    const handleInputChange = (e) => {
        const input = e.target.value;
        setNewFeedback(input);
        setCharactersLeft(200 - input.length);
    };

    return (
        <div className="container_content">
            {feedback.map((e, i) => (
                <div className="content" key={i}>
                    <div className="text">
                        <p>{e.content}</p>
                    </div>
                    <div className="day-date">
                        <b>{e.day}</b>
                        <i onClick={() => handleDelete(i)} class="fa-solid fa-trash"></i>
                    </div>
                </div>
            ))}

            <div className="content add">
                <div className="text">
                    <textarea
                        cols={24}
                        rows={2}
                        value={newFeedback}
                        onChange={handleInputChange}
                        type="text"
                        placeholder={error ? 'Enter Type Please!!' : 'Type Review Here...'}

                    />
                </div>
                <div className="day-date">
                    <b>{charactersLeft} left</b>
                    <i onClick={handleSubmit} class="fa-solid fa-arrow-up">
                        PUBLISH
                    </i>
                </div>
            </div>
        </div>
    );
}

export default Content;
