from django.urls import path
from .views import BookAPIView

urkpatterns = [
    path("", BookAPIView.as_view(), name="book_list"),
]