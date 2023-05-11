import requests
import json
from datetime import datetime, timedelta
from bs4 import BeautifulSoup
import string
from nltk.corpus import stopwords
import os
import re

# get the current directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# append the path to api_keys.txt
api_key_file = os.path.join(BASE_DIR, 'api_key.txt')

# open the file
with open(api_key_file, 'r') as file:
    api_key = file.read().strip()


def get_articles(topic, api_key=api_key, period=7):

    API_KEY = api_key

    # Define the time range for the search (last 7 days)
    now = datetime.utcnow()
    start_time = (now - timedelta(days=period)).strftime('%Y-%m-%dT%H:%M:%S')
    end_time = now.strftime('%Y-%m-%dT%H:%M:%S')

    # Define the API endpoint and request parameters
    url = f"https://newsapi.org/v2/everything?q={topic}&language=en&sortBy=popularity&from={start_time}&to={end_time}&apiKey={API_KEY}"

    # Send the API request
    response = requests.get(url)

    # Parse the JSON response
    data = json.loads(response.text)

    # Extract the most recent article
    if len(data["articles"]) > 0:
        most_recent = data["articles"][0]
        for article in data["articles"]:
            if article["publishedAt"] > most_recent["publishedAt"]:
                most_recent = article

        # Scrape the contents of the article
        article_url = most_recent["url"]
        article_response = requests.get(article_url)
        article_soup = BeautifulSoup(article_response.content, "html.parser")
        article_content = article_soup.get_text()

        # Extract author, heading, date, and article content
        author = most_recent["author"]
        heading = most_recent["title"]
        date = most_recent["publishedAt"]

        # Remove unwanted characters
        article_content = article_content.replace('\n', '')
        article_content = article_content.replace('\t', '')
        article_content = article_content.replace('\r', '')
        article_content = article_content.replace('\\', '')
        article_content = article_content.replace('\n', '')
        # article_content = re.sub(r'\W+', article_content)

        article_content = article_content.translate(
            str.maketrans('', '', string.punctuation))

        # Convert all text to lowercase
        article_content = article_content.lower()

        # Remove stopwords
        stop_words = set(stopwords.words('english'))
        article_words = article_content.split()
        article_content = ' '.join(
            [word for word in article_words if word not in stop_words])

        # Stemming
        from nltk.stem import PorterStemmer
        ps = PorterStemmer()
        article_words = article_content.split()
        article_content = ' '.join([ps.stem(word) for word in article_words])

        # Create a dictionary with extracted data
        extracted_data = {
            "author": author,
            "heading": heading,
            "date": date,
            "article_content": article_content,
            "article_url": article_url,
            "newspaper_name": most_recent["source"]["name"]
        }

        return extracted_data

    else:
        print("No articles found for the given topic and time range.")
