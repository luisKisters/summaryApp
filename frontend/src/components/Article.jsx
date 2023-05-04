import React, { useContext, useState } from 'react';
import axios from 'axios';
import { ArticleContext } from './ArticleContext';

const API_URL = "http://localhost:8000/api/article";

export const Article = () => {
    const { setArticleData } = useContext(ArticleContext);
    const [topic, setTopic] = useState('');
    const [period, setPeriod] = useState('');

    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    };

    const handlePeriodChange = (event) => {
        setPeriod(event.target.value);
    };

    const handleGetArticleClick = async (event) => {
        try {
            const response = await axios.get(API_URL, {
                params: {
                    topic,
                    period,
                },
            });
            setArticleData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <label>
                Topic:
                <input type="text" value={topic} onChange={handleTopicChange} />
            </label>
            <br />
            <label>
                Period:
                <input type="text" value={period} onChange={handlePeriodChange} />
            </label>
            <br />
            <button onClick={handleGetArticleClick}>Get Article</button>
        </div>
    );
};
