from django.http import HttpResponse
from django.template import loader

def clinic(request):
    template = loader.get_template('smartclinic.html')
    return HttpResponse(template.render())