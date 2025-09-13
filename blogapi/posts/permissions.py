from rest_framework import permissions


class IsAuthorOrReadOnly(permissions.BasePermission):
    # only author can edit or delete their posts
    def has_object_permission(self, request, view, obj):
        # read permissions are allowed for any requests
        if request.method in permissions.SAFE_METHODS:
            return True
        
        # write permissions are only allowed for the author of a post
        return obj.author == request.user