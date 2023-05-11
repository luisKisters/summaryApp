from django.contrib import admin
from django.urls import path
from article.views import article_view
from article.views import current_article_view
from summarize.views import summary_view
from pages.views import index_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/article', article_view, name="article"),
    path('api/article/<str:topic>/<int:period>/', article_view, name='article'),
    path('api/article/current_article/',
         current_article_view, name='current_article'),
    path('api/summary/', summary_view, name='summary'),
    path('api/summary/<str:lang>/<int:words>/', summary_view, name='summary'),
    path('', index_view, name="index"),
    path('index/', index_view, name="index"),
]
