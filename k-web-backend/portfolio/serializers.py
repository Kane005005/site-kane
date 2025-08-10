from rest_framework import serializers
from .models import Project, BlogPost, ContactForm

class ProjectSerializer(serializers.ModelSerializer):
    stack = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'title', 'type', 'description', 'image', 'link', 'stack']

    def get_stack(self, obj):
        return [s.strip() for s in obj.stack.split(',')]

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'slug', 'image', 'summary', 'content', 'created_at']

# ...
class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = ['name', 'email', 'message']