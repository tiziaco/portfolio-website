from django.contrib import admin
from .models import Tag, Stack, Project, ProjectImage
from .templatetags.custom_tags import admin_thumbnail


class ProjectImageInLine(admin.TabularInline):
	model = ProjectImage
	extra = 1

class ProjectAdmin(admin.ModelAdmin):
	list_display = ('title', 'admin_thumbnail', 'link')
	inlines = [ProjectImageInLine]
	search_fields = ('title', 'description')
	list_filter = ('tags',)

	def admin_thumbnail(self, obj):
		return admin_thumbnail(obj)
	admin_thumbnail.short_description = 'Thumbnail'
	admin_thumbnail.allow_tags = True

class TagAdmin(admin.ModelAdmin):
	list_display = ('name',)
	search_fields = ('name',)

class StackAdmin(admin.ModelAdmin):
	list_display = ('name',)
	search_fields = ('name',)

admin.site.register(Tag, TagAdmin)
admin.site.register(Stack, StackAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectImage)