# Use the official Python image as the base image
FROM python:3.11

# Set the working directory in the container
WORKDIR /api

# Copy the application files into the working directory
COPY . /api

# Install the application dependencies
RUN pip install -r requirements.txt

# Define the entry point for the container
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]