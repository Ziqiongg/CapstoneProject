package com.ecommerce.capstone_back.controllers;

import com.ecommerce.capstone_back.model.IndividualPurchase;
import com.ecommerce.capstone_back.service.IndividualPurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class InvidualPurchaseController {

    @Autowired
    IndividualPurchaseService individualPurchaseService

//            constructors
    public InvidualPurchaseController() {}

    public InvidualPurchaseController(IndividualPurchaseService individualPurchaseService) {
        this.individualPurchaseService = individualPurchaseService;
    }

//  Get basket

    @GetMapping("/AppUser/get_basket/{customer_id}")
    public ResponseEntity customerGetBasket(@PathVariable Long AppUser_id) {
        try {
            List<IndividualPurchase> basket = IndividualPurchaseService.getCustomerBasket(AppUser_id);
            return ResponseEntity.status(HttpStatus.OK).body(basket;
        }
        catch (RuntimeException re) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(re.getMessage());
        }

// Add to basket



// Update basket

// Remove item from basket



}
