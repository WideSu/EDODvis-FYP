# Generated by Django 4.0 on 2022-02-15 09:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('edodvis', '0002_biomarker_data_creation'),
    ]

    operations = [
        migrations.RenameField(
            model_name='participant',
            old_name='id',
            new_name='participant_id',
        ),
    ]
