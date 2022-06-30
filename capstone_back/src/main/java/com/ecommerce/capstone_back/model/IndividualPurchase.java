package com.ecommerce.capstone_back.model;


import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class IndividualPurchase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "app_user_id")
    @JsonBackReference(value = "users")
    private Users users;

    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonBackReference(value = "product")
    private Product product;
    private int quantity;
    private boolean purchased;


    public IndividualPurchase(){
    }

    public IndividualPurchase(Long id, Users users, Product product, int quantity, boolean purchased) {
        this.id = id;
        this.users = users;
        this.product = product;
        this.quantity = quantity;
        this.purchased = purchased;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers (Users users) {
        this.users = users;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public boolean isPurchased() {
        return purchased;
    }

    public void setPurchased(boolean purchased) {
        this.purchased = purchased;
    }

    //  if purchase is successful, return true and change purchased to true, else return false.
    public boolean makePurchase(Product product, Users user, int total){
        if (user.checkWallet(total)){
            purchased = true;
            return true;
        } else {
            return false;
        }
    }




}





