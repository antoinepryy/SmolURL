from django.urls import path, include
from rest_framework import routers, mixins
from api import views

router = routers.DefaultRouter()
router.register(r'tinyurls', views.TinyURLListCreate)

urlpatterns = [
    path('', include(router.urls)),
    path('tinyurls/<int:pk>/', views.TinyURLDetail.as_view()),
]