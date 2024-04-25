from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

from rest_framework.routers import DefaultRouter

from contactlist.views import ContatosApiView

urlpatterns = [
    path('admin/', admin.site.urls),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

router = DefaultRouter(trailing_slash=False)
router.register(r'api/listaContatos',ContatosApiView, basename='ContatosApi')

urlpatterns += router.urls