from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
import json
import openai
import requests
import os

# get the current directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# append the path to api_keys.txt
api_key_file = os.path.join(BASE_DIR, 'api_key.txt')
# open the file
with open(api_key_file, 'r') as file:
    api_key = file.read().strip()

openai.api_key = api_key


def summarize_article(words, language):
    # Get JSON data from localhost:8000/api/article
    response = requests.get('http://localhost:8000/api/article')
    article_data = json.loads(response.text)

    # Get the article content and summarize it using OpenAI's GPT-3 API
    article_content = article_data['article_content']
    content = f'summarize this article, make it so that it sounds as if it was a article on its own, in language {language}, {words} words long, this is the article {article_content})'
    content = str(content)
    res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "assistant",
             "content": content},

        ]
    )

    # Add the summary to the JSON data
    article_data['summary'] = res

    # Render the JSON data in the browser
    return JsonResponse(article_data)
    return response


def summary_view(request, lang='EN', words=100):
    response = summarize_article(words=words, language=lang)
    return HttpResponse(response.content, content_type="application/json")
