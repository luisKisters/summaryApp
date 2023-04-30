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

        axios.get('/csrf-token/')
            .then(response => {
                const csrftoken = response.data.csrfToken;
                axios.post(`${API_URL}/${wordCount}/`, {}, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrftoken
                    }
                })
                    .then(response => {
                        const summary = response;
                        setSummary(summary);
                    })
                    .catch(error => console.error(error));
            })
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
            <p>GPT Model: {typeof summary === 'string' ? summary : JSON.stringify(summary.summary.model)}</p>
            <p>Total Tokens: {typeof summary === 'string' ? summary : JSON.stringify(summary.summary.usage.total_tokens)}</p>
            <p>Summary: {typeof summary === 'string' ? summary : JSON.stringify(summary.summary.choices[0].message.content)}</p>
            <p>Created at: {typeof summary === 'string' ? summary : JSON.stringify(summary.summary.created)}</p>
            <p>Created at: {typeof summary === 'string' ? summary : new Date(summary.summary.created * 1000).toLocaleString()} UTC</p>
            <p>Complete API Response: {typeof summary === 'string' ? summary : JSON.stringify(summary)}</p>
        </div>
    );
};
