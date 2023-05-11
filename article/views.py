from django.http import JsonResponse
from .article_api import get_articles
import json
from django.core.cache import cache


def article_view(request, topic='bitcoin', period=7):
    """
    This function returns a JSON response of articles related to a specified topic and time period.

    :param request: The request object represents the HTTP request that the user made to access the view
    :param topic: The topic parameter is a string that specifies the topic of the articles to be
    retrieved. In this case, the default value is 'bitcoin', but it can be changed to any other topic,
    defaults to bitcoin (optional)
    :param period: The period parameter is an integer that represents the number of days for which the
    articles should be retrieved. For example, if period=7, the function will retrieve articles
    published in the last 7 days, defaults to 7 (optional)
    :return: a JSON response containing articles related to a specific topic and period. The topic and
    period are passed as parameters to the function and used to retrieve the relevant articles using the
    `get_articles` function. The retrieved data is then converted to a JSON format using the
    `json.dumps` method and returned as an HTTP response with the content type set to
    "application/json".
    """
    data = get_articles(topic=topic, period=period)
    return JsonResponse(data, safe=False)


def current_article_view(request):
    if request.method == 'POST':
        article_data = request.body.decode('utf-8')
        cache.set('article_data', article_data,
                  timeout=3600)  # Cache for 1 hour
        return JsonResponse({'message': 'Article data saved successfully'})
    elif request.method == 'GET':
        article_data = cache.get('article_data')
        if article_data is not None:
            article_data = json.loads(article_data)
            return JsonResponse(article_data)
        else:
            return JsonResponse({'error': 'No article'})
