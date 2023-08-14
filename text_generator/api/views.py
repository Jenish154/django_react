from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def getData(request):
    val = request.GET.get('query')
    return Response({'content': val}, status=200)