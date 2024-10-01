from django.db import models

class Component(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_repair = models.BooleanField(default=False)  # True if it's a repair option

    def __str__(self):
        return self.name

class Vehicle(models.Model):
    number_plate = models.CharField(max_length=255)
    owner_name = models.CharField(max_length=255)

    def __str__(self):
        return self.number_plate

class Issue(models.Model):
    vehicle = models.ForeignKey(Vehicle, related_name='issues', on_delete=models.CASCADE)
    description = models.TextField()
    component = models.ForeignKey(Component, related_name='issues', on_delete=models.CASCADE)
    repair_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.description
