from django.shortcuts import render
from django.http import HttpResponse
from .article_api import get_articles
import json

# Create your views here.

def article_view(request):
    data = get_articles("politics", period=15)
    json_data = json.dumps(data)
    return HttpResponse(json_data, content_type="application/json")
