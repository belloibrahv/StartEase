import os
import django

from django.core.asgi import get_asgi_application

#----------------------------
# Initialization
#----------------------------

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

django.setup()

#----------------------------
# Import Required Modules
#----------------------------
from django.urls import re_path
from bus import bus_channels, get_bus_application
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter


bus_application = get_bus_application()

asgi_application = get_asgi_application()

#------------------------------------------
# Application Definition
#------------------------------------------

application = ProtocolTypeRouter({
  'http':URLRouter([
    re_path(r'^bus/?$', bus_application, {
      'channels': bus_channels
    }),
    re_path('', asgi_application),
  ])
})
