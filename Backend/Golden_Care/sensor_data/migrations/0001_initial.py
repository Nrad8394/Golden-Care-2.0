# Generated by Django 5.1.2 on 2024-10-18 22:42

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('userManager', '0004_remove_patient_last_vitals_update_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('appointment_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('appointment_date', models.DateTimeField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('scheduled', 'Scheduled'), ('completed', 'Completed'), ('canceled', 'Canceled'), ('no_show', 'No Show')], default='scheduled', max_length=20)),
                ('reason_for_appointment', models.TextField(blank=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appointments', to='userManager.patient')),
                ('provider', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appointments', to='userManager.provider')),
            ],
            options={
                'verbose_name': 'Appointment',
                'verbose_name_plural': 'Appointments',
                'ordering': ['-appointment_date'],
            },
        ),
        migrations.CreateModel(
            name='SensorData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('temperature', models.FloatField(blank=True, null=True)),
                ('heart_rate', models.FloatField(blank=True, null=True)),
                ('spo2', models.FloatField(blank=True, null=True)),
                ('accel_x', models.FloatField(blank=True, null=True)),
                ('accel_y', models.FloatField(blank=True, null=True)),
                ('accel_z', models.FloatField(blank=True, null=True)),
                ('gyro_x', models.FloatField(blank=True, null=True)),
                ('gyro_y', models.FloatField(blank=True, null=True)),
                ('gyro_z', models.FloatField(blank=True, null=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sensor_data', to='userManager.patient')),
            ],
        ),
    ]
