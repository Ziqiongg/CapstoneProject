package com.ecommerce.capstone_back.dto;

public class AppUserFirstNamePasswordDTO {

    private String userFirstName;
    private String password;

    public AppUserFirstNamePasswordDTO(){
    }

    public AppUserFirstNamePasswordDTO(String userFirstName, String password){
        this.userFirstName = userFirstName;
        this.password = password;
    }

    public String getUserFirstName() {
        return userFirstName;
    }

    public void setUserFirstName(String firstName) {
        this.userFirstName = firstName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
