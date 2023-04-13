from django.shortcuts import render
import openai

# Create your views here.

with open('api_key.txt', 'r') as file:
    api_key = file.read()

openai.api_key = api_key

res = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "summarize the input, only output the summary, not more, the output should sound like a news article", 
        "content": ""},

    ]
)

print(res)