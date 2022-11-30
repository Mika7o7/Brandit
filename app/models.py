from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

# Create your models here.


class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        """
        Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_staffuser(self, email, password):
        """
        Creates and saves a staff user with the given email and password.
        """
        user = self.create_user(
            email,
            password=password,
        )
        user.staff = True
        user.save(using=self._db)
        return user

    def create_superuser(self, first_name, last_name, email, password):
        """
        Creates and saves a superuser with the given email and password.
        """
        user = self.create_user(
            email,
            password=password,
        )
        user.first_name = first_name
        user.last_name = last_name
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


# hook in the New Manager to our Model
class User(AbstractUser):  # from step 2
    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True,
    )
    username = None

    USERNAME_FIELD = "email"

    objects = UserManager()

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = "Customer"
        verbose_name_plural = "Customers"


PROJECTS_TYPES = [('L', 'Large'), ('M', 'Medium'), ('S', 'Small')]


class Project(models.Model):
    company_name = models.CharField(max_length=80)
    price = models.BooleanField(default=False)
    Schedule_a_call = models.BooleanField(default=False)
    project_type = models.CharField(
        max_length=1,
        choices=PROJECTS_TYPES,
        blank=True, null=True,
        )
    description_project = models.TextField()
    file = models.FileField(upload_to='uploads/% Y/% m/% d/')
    first_name = models.CharField(max_length=50)
    sure_name = models.CharField(max_length=50)
    email = models.CharField(max_length=70)
    phone = models.CharField(max_length=40)
    is_create = models.DateField(auto_now=True, blank=True, null=True)
