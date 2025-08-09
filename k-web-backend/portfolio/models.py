from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    type = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='portfolio_images/')
    link = models.URLField(max_length=200, blank=True)
    stack = models.CharField(max_length=255, help_text="Séparer les technologies par des virgules")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to='blog_images/')
    summary = models.TextField()
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
# ...
class ContactForm(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message de {self.name}"