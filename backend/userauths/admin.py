from django.contrib import admin
from userauths.models import User, Profile

class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'full_name', 'date']  # Ensure the fields match your model definition

admin.site.register(User)
admin.site.register(Profile, ProfileAdmin)