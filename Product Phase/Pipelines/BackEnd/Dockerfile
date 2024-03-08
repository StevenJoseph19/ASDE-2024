# Use a base image with OpenJDK suitable for your Spring Boot application
FROM openjdk:17

# Set the working directory in the container
WORKDIR /app

# Copy the packaged Spring Boot JAR file into the container
COPY target/friends_ms.jar /app/friends-service.jar

# Expose the port that your Spring Boot application runs on (optional, adjust as needed)
EXPOSE 8083

# # Your backend pipeline might pass the registry and image name as build arguments
# ARG CONTAINER_REGISTRY
# ARG IMAGE_NAME

# # Build and push the Docker image to the specified container registry
# RUN docker build -t $CONTAINER_REGISTRY/$IMAGE_NAME .
# RUN docker push $CONTAINER_REGISTRY/$IMAGE_NAME
CMD ["java", "-jar", "friends-service.jar"]
