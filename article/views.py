from django.shortcuts import render
from .article_api import get_articles

# Create your views here.

def index(request):
    data = get_articles("bitcoin", period=7)
    context = {"data": data}
    return render(request, "index.html", context)
