from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework import response, views, permissions

class SignupView(views.APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data

        name = data['name']
        email = data['email']
        password = data['password']
        password2 = data['password2']

        if password == password2:
            if User.objects.filter(email=email).exists():
                return response.Response({'error': 'Email already exists'})
            elif len(password) < 6:
                return response.Response({'error': 'password must be at least 6 characters'})
            else:
                user = User.objects.create_user(email=email, password=password, name=name)

                user.save()
                return response.Response({'success': 'User created successfully'})
        else:
            return response.Response({'error': 'passwords do not match each other'})
