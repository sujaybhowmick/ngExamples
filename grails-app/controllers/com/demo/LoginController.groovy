package com.demo

import grails.converters.*

class LoginController {

    def index() { }

    def login(){
        def user = new User(userName: params.username, password: params.password)
        log.info(params)
        if(!user.validate()){
            if(user.hasErrors()){
                render user.errors as JSON
            }
        }
        render user as JSON
    }
}