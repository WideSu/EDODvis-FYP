# Generated by Django 4.0 on 2022-04-27 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('edodvis', '0007_remove_participant_age_remove_participant_area_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='participant',
            name='medication_required',
            field=models.IntegerField(default=0, null=True),
        ),
    ]