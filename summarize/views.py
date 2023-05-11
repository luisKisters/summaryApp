from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
import re
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


def summarize_article(words, language, article_data_json):
    article_content = article_data_json
    # prompt = article_content
    prompt = f'summarize this article, make it so that it sounds as if it was a article on its own, ignore json or html stuff, in language {language}, {words} words long, this is the article {article_content}'
    with open('article_content.txt', 'w') as file:
        file.write(str(prompt))

    prompt = str(prompt)

    res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": prompt},
        ]
    )
    return res


def summary_view(request, lang='EN', words=100):
    response = requests.get(
        'http://localhost:8000/api/article/current_article/')
    article = response.json()
    article = article["article_content"]
    print(article)
    if response.status_code == 200:
        summary_response = summarize_article(
            words=words, language=lang, article_data_json=article)
        return JsonResponse(summary_response, safe=False, content_type="application/json")
    else:
        return HttpResponse(status=response.status_code)
