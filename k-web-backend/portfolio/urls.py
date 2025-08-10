# k-web-backend/portfolio/urls.py
from django.urls import path
from .views import ProjectList, BlogPostList, BlogPostDetail, ContactFormCreate

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('blog-posts/', BlogPostList.as_view(), name='blog-post-list'),
    path('blog-posts/<slug:slug>/', BlogPostDetail.as_view(), name='blog-post-detail'),
     path('contact/', ContactFormCreate.as_view(), name='contact-form'),
]