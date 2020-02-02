# Spring Boot 2.0 and Kotlin
This repository can serve as a basic shell project for a Spring Boot 2.0 application configured with Kotlin.

It contains the configuration needed to enable this in the build.gradle file.

There is a very basic Spring Boot Application class called:
```kotlin
org.panda.springbootkotlin.SpringBootKotlinApplication
```

and a rest controller called: 

````kotlin
org.panda.springbootkotlin.HelloController
````   

## Dependencies
* jdk8
* gradle 5.0 or above


You can clone this repository and run the below gradle command:
```jshelllanguage
./gradlew bootRun
```


This will start an http server on port 8080.

You can then run the following curl command: 
```jshelllanguage
curl http://localhost:8080/hello
```

This should produce the followig response: 
```json
{"greeting":"Hello!"}
```
