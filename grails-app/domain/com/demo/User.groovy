package com.demo

class User {

    String userName
    String password

    static constraints = {
        userName blank: false
        password size: 5..15, blank: false
    }

    static mapping = {
        table 'USERS'
    }
}
