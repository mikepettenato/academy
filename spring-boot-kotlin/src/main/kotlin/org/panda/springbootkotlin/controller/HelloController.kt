package org.panda.springbootkotlin.controller

import org.panda.springbootkotlin.utils.WelcomeMessage
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HelloController {

    @Autowired
    lateinit var welcomeMessage: WelcomeMessage

    @GetMapping("/hello")
    fun hello():GreetingReply {

        return GreetingReply(welcomeMessage.message())
    }
}
