"""summaryApp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from article.views import article_view
from summarize.views import summary_view
from pages.views import index_view
from csrfToken.views import csrf_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/article', article_view, name="article"),
    path('api/article/<str:topic>/<int:period>/', article_view, name='article'),
    path('api/summary/', summary_view, name='summary'),
    path('api/summary/<str:lang>/<int:words>/', summary_view, name='summary'),
    path('', index_view, name="index"),
    path('index/', index_view, name="index"),
    path('csrf-token/', csrf_token, name="csrf_token")
]
