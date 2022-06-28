package com.ecommerce.capstone_back.model;

public class IndividualPurchase {

    private Long id;
    private Long userId;
    private Long productId;
    private int quantity;
    private boolean purchased;
    public IndividualPurchase(){
    }

    public IndividualPurchase(Long id, Long userId, Long productId, int quantity, boolean purchased){
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.purchased = purchased;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
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
    public boolean makePurchase(Product product, AppUser user, int total){
        if (user.checkWallet(total)){
            purchased = true;
            return true;
        } else {
            return false;
        }
    }



}