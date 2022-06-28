package com.ecommerce.capstone_back.model;

import java.util.List;

public class Product {


    private Long id;
    private String name;
    private Enum category;
    private Double price;
    private List<IndividualPurchase> basket;

    public Product() {}

    public Product(Long id, String name, Enum category, Double price, List<IndividualPurchase> basket) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.basket = basket;
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

    public Enum getCategory() {
        return category;
    }

    public void setCategory(Enum category) {
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

    public void setBasket(List<IndividualPurchase> basket) {
        this.basket = basket;
    }
}
