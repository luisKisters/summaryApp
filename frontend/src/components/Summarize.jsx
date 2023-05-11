import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/summary/EN';

export const Summary = () => {
    const [wordCount, setWordCount] = useState(100);
    const [summary, setSummary] = useState("");

    const handleWordCountChange = (event) => {
        setWordCount(Number(event.target.value));
    }

    const clearSummary = (event) => {
        setSummary('')
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        axios.post(`${API_URL}/${wordCount}/`, {
        })
            .then(response => {
                console.log(response)
                setSummary(response.data)
            })
            .catch(error => {
                console.error(error);
                if (error.response && error.response.data && error.response.data.error === "No article") {
                    setSummary({ error: "No article found. Please save an article first." });
                }
            });

    }


    return (
        <div className='Summary-view'>
            <h1>Summarize</h1>
            {
                summary.hasOwnProperty("error") ?
                    <div className="error-fields">
                        <p>Status: Error</p>
                        <p>Error Message: {summary.error}</p>
                        <form onSubmit={clearSummary}>
                            <button type="submit">New Summary</button>
                        </form>
                    </div>
                    :
                    summary !== "" ?
                        <div className="idk">
                            <div className="summary-fields">
                                <p>Status: Successful</p>
                                <p>Summary: {summary.choices[0].message.content}</p>
                                <p>Model: {summary.model}</p>
                                <p>Time: {summary.created}</p>
                                <p>Total Tokens: {summary.usage.total_tokens}</p>
                                <p>Finish Reason: {summary.choices[0].finish_reason}</p>
                                <p>Complete API Response: {typeof summary === 'string' ? summary : JSON.stringify(summary)}</p>
                            </div>
                            <form onSubmit={clearSummary}>
                                <button type="submit">New Summary</button>
                            </form>
                        </div>
                        :
                        <form onSubmit={handleFormSubmit}>
                            <h2>Words</h2>
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
            }
        </div>
    );
};