# k-web-backend/portfolio/views.py
from rest_framework import generics
from .models import Project, BlogPost
from .serializers import ProjectSerializer, BlogPostSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .models import Project, BlogPost, ContactForm
from .serializers import ProjectSerializer, BlogPostSerializer, ContactFormSerializer

class ProjectList(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class BlogPostList(generics.ListCreateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

# Nouvelle vue pour un article de blog unique
class BlogPostDetail(generics.RetrieveAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    lookup_field = 'slug' # <--- Indique à DRF d'utiliser le slug pour la recherche

from rest_framework import generics
# ...
class ContactFormCreate(generics.CreateAPIView):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # Logique d'envoi d'email
        name = serializer.validated_data['name']
        email = serializer.validated_data['email']
        message = serializer.validated_data['message']

        subject = f'Nouveau message de contact de la part de {name}'
        message_body = f'De: {name}\nEmail: {email}\n\nMessage:\n{message}'
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = [settings.CONTACT_FORM_RECIPIENT]

        try:
            send_mail(subject, message_body, from_email, recipient_list)
            print(f"Email envoyé à {recipient_list} avec succès.")
        except Exception as e:
            print(f"Erreur lors de l'envoi de l'email: {e}")

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)