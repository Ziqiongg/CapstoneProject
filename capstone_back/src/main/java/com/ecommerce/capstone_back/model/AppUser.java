package com.ecommerce.capstone_back.model;

import java.util.ArrayList;
import java.util.List;

public class AppUser {

    private Long id;
    private double wallet;
    private String userFirstName;
    private String userLastName;
    private String userAddress;
    private String userPassword;
    private ArrayList<IndividualPurchase> basket;


    public AppUser() {
    }

    public AppUser(Long id, double wallet, String userFirstName,
                   String userLastName, String userAddress, String userPassword) {
        this.id = id;
        this.wallet = wallet;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userAddress = userAddress;
        this.userPassword = userPassword;
        this.basket = new ArrayList<>();

    }

    public String getUserFirstName() {
        return userFirstName;
    }

    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    public String getUserLastName() {
        return userLastName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getWallet() {
        return wallet;
    }

    public void setWallet(double wallet) {
        this.wallet = wallet;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public List<IndividualPurchase> getBasket() {
        return basket;
    }

<<<<<<< HEAD
}
=======
    //  if the total (the total amount in basket) is less than or equal to the amount in wallet, return true
    public boolean checkWallet(int total){

        if (total <= wallet) {
            wallet -= total;
            return true;
        } else {
            return false;
        }
    }

}
>>>>>>> main
