package com.ecommerce.capstone_back.dto;

public class UsersFirstNamePasswordDTO {

    private String username;
    private String password;


    public UsersFirstNamePasswordDTO(String userFirstName, String password){
        this.username = userFirstName;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String firstName) {
        this.username = firstName;
    }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
