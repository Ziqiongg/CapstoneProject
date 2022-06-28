package com.ecommerce.capstone_back.model;

import com.ecommerce.capstone_back.Category;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Product {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Enumerated(EnumType.STRING)
    private Category category;
    private double price;

    private int stock;

    @OneToMany(mappedBy = "product")
    @JsonManagedReference(value = "product")
    private List<IndividualPurchase> basket;


    public Product () {
    }

    public Product(Long id, String name, Category category, Double price, List<IndividualPurchase> basket, int stock) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.basket = basket;
        this.stock = stock;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public List<IndividualPurchase> getBasket() {
        return basket;
    }

    public void setBasket(ArrayList<IndividualPurchase> basket) {
        this.basket = basket;
    }

    //reduce stock

    public int reduceStock(int purchaseAmount) {
        stock -= purchaseAmount;
        return stock;
    }

    //increase stock
    public int increaseStock(int deleteFromBasket){
        stock += deleteFromBasket;
        return stock;
    }


}




