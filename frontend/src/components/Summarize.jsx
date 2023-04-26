import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/summary/EN';

export const Summary = () => {
    const [wordCount, setWordCount] = useState(100);
    const [summary, setSummary] = useState("");

    const handleWordCountChange = (event) => {
        setWordCount(Number(event.target.value));
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        axios.post(`${API_URL}/${wordCount}`, { text: 'YOUR TEXT HERE' }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => setSummary(response.data.summary))
            .catch(error => console.error(error));
    }

    return (
        <div className='Summary-view'>
            <h1>Words</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="radio" name="words" id="50" value="50" onChange={handleWordCountChange} />
                <label htmlFor="50">50</label>
                <br />
                <input type="radio" name="words" id="100" value="100" onChange={handleWordCountChange} defaultChecked />
                <label htmlFor="100">100</label>
                <br />
                <input type="radio" name="words" id="150" value="150" onChange={handleWordCountChange} />
                <label htmlFor="150">150</label>
                <br />
                <input type="radio" name="words" id="200" value="200" onChange={handleWordCountChange} />
                <label htmlFor="200">200</label>
                <br />
                <button type="submit">Summarize</button>
            </form>
            {summary && (
                <div>
                    <h2>Summary</h2>
                    <p>{JSON.stringify(summary)}</p>
                </div>
            )}
        </div>
    );
};
