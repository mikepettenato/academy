package org.panda.springbootkotlin

import org.panda.springbootkotlin.utils.WelcomeMessage
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean


@SpringBootApplication
class SpringBootKotlinApplication {

    @Bean
    fun welcomeMessage(): WelcomeMessage {
        return WelcomeMessage()
    }
}

fun main(args: Array<String>) {
    runApplication<SpringBootKotlinApplication>(*args)
}
