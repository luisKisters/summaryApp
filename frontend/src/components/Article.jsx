import React, { useState } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:8000/api/article"

export const Article = () => {
    const [topic, setTopic] = useState('');
    const [period, setPeriod] = useState('');
    const [articleData, setArticleData] = useState(null);

    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    };

    const handlePeriodChange = (event) => {
        setPeriod(event.target.value);
    };

    const handleGetArticleClick = async (event) => {
        event.preventDefault();


        axios.post(`${API_URL}/${topic}/${period}/`, {}, {})
            .then(response => {
                console.log(response)
                setArticleData(response.data);
            })
            .catch(error => console.error(error));


    }

    function handleArticleSubmit() {
        axios({
            method: 'post',
            url: `${API_URL}/current_article/`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(articleData)
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>
            <h1>Article</h1>
            <div>
                <label htmlFor="topic">Topic: </label>
                <input type="text" id="topic" value={topic} onChange={handleTopicChange} />
            </div>
            <div>
                <label htmlFor="period">Period: </label>
                <input type="text" id="period" value={period} onChange={handlePeriodChange} />
            </div>
            <button onClick={handleGetArticleClick}>Get Article</button>
            {articleData && (
                <div className="article-fields">
                    <h1>Heading: {JSON.stringify(articleData.heading)}</h1>
                    <p>Source: {JSON.stringify(articleData.author)}</p>
                    <a href={articleData.article_url}>Link</a>
                    <br />
                    <button type="submit" onClick={handleArticleSubmit}>Use article</button>
                </div>
            )}
            {/* {articleData !== '' ? <h1>{articleData}</h1> : null} */}
        </div>

    );
}

// export default Article;