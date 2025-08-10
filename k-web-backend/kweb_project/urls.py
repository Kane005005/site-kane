from django.contrib import admin
from django.urls import path, include, re_path # Import re_path
from django.views.generic import TemplateView # Import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('portfolio.urls')),

    # Add the following URL patterns for serving static and media files in development
    # You might not need these on PythonAnywhere if you've configured them in the 'Web' tab
    # urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    # This catch-all URL pattern must be the LAST one in the list.
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
