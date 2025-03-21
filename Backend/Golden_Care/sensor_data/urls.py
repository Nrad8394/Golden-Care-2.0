from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SensorDataViewSet, AppointmentViewSet ,AlertViewSet ,DiabetesPredictionView,HypertensionPredictionView

# Create a router and register the viewsets
router = DefaultRouter()
router.register(r'sensordata', SensorDataViewSet, basename='sensordata')
router.register(r'appointments', AppointmentViewSet, basename='appointments')
router.register(r'alerts', AlertViewSet, basename='alerts')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
    path('predict-diabetes/', DiabetesPredictionView.as_view(), name='predict-diabetes'),
    path('predict-hypertension/', HypertensionPredictionView.as_view(), name='predict-hypertension'),

]
