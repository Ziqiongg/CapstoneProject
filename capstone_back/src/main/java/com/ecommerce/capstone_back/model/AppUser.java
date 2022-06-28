package com.ecommerce.capstone_back.model;

import java.util.ArrayList;
import java.util.List;

public class AppUser {

    private Long id;
    private double wallet;
    private String name;
    private String userName;
    private String userAddress;
    private String userPassword;
    private ArrayList<IndividualPurchase> basket;


    public AppUser() {
    }

    public AppUser(Long id, double wallet, String name, String userName, String userAddress, String userPassword) {
        this.id = id;
        this.wallet = wallet;
        this.name = name;
        this.userName = userName;       
        this.userAddress = userAddress;
        this.userPassword = userPassword;
       
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
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

}
