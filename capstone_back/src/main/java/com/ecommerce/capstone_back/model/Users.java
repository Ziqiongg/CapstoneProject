package com.ecommerce.capstone_back.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double wallet;
    private String userFirstName;
    private String userLastName;
    private String username;
    private String userAddress;
    @JsonIgnore
    private String userPassword;

    @OneToMany(mappedBy = "appUser")
    @JsonManagedReference(value = "appuser")
    private List<IndividualPurchase> basket;


    public Users() {
    }

    public Users(Long id, double wallet, String userFirstName, String userLastName, String username,
                 String userAddress, String userPassword, List<IndividualPurchase> basket) {
        this.id = id;
        this.wallet = wallet;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.username = username;
        this.userAddress = userAddress;
        this.userPassword = userPassword;
        this.basket = basket;


    }

    public String getUserFirstName() {
        return userFirstName;
    }

    public void setUsersFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    public String getUsersLastName() {
        return userLastName;
    }

    public void setUsersLastName(String userLastName) {
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

    public String getUsersAddress() {
        return userAddress;
    }

    public void setUsersAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    public String getUsersPassword() {
        return userPassword;
    }

    public void setUsersPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public List<IndividualPurchase> getBasket() {
        return basket;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

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

