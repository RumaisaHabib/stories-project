# Generated by Django 3.2.6 on 2021-08-16 09:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0003_alter_story_story'),
    ]

    operations = [
        migrations.AlterField(
            model_name='story',
            name='story',
            field=models.TextField(),
        ),
    ]
