package com.ecommerce.capstone_back.controllers;

import com.ecommerce.capstone_back.model.AppUser;
import com.ecommerce.capstone_back.model.IndividualPurchase;
import com.ecommerce.capstone_back.model.Product;
import com.ecommerce.capstone_back.service.IndividualPurchaseService;
import org.hibernate.mapping.Array;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class InvidualPurchaseController {

    @Autowired
    private IndividualPurchaseService individualPurchaseService;


    public InvidualPurchaseController(IndividualPurchaseService individualPurchaseService) {
        this.individualPurchaseService = individualPurchaseService;
    }

//  Get basket

    @GetMapping("/AppUser/get_basket/{user_id}")
    public ResponseEntity getCustomerBasket(@PathVariable AppUser user) {
        try {
            List<IndividualPurchase> basket = IndividualPurchaseService.getBasket(user.getId());
            return ResponseEntity.status(HttpStatus.OK).body(basket);
        } catch (RuntimeException re) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(re.getMessage());
        }

    }

//    Get purchases

    @GetMapping("/AppUser/get_purchases/{user_id}")
    public ResponseEntity getCustomerPurchase(@PathVariable AppUser user) {
        try {
            List<IndividualPurchase> basket = IndividualPurchaseService.getPurchase(user.getId());
            return ResponseEntity.status(HttpStatus.OK).body(basket);
        } catch (RuntimeException re) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(re.getMessage());
        }
    }

// Remove item from basket
// need to get user id, product id

    @DeleteMapping("/AppUser_basket/{user_id}")
    public void deleteCustomerBasket(@PathVariable AppUser user, Product product) {
        IndividualPurchaseService.deleteById(user.getId());

    }

// Add to basket
//need to get user id, product id
//
    @PostMapping("/AppUser_basket/additem")
    public ResponseEntity addToBasket(){
        try {
            List<IndividualPurchase> basket = IndividualPurchaseService.addToBasket();
            return ResponseEntity.status(HttpStatus.OK).body(basket);
        } catch (RuntimeException re) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(re.getMessage());
        }
    }

//    }

// Update basket
//   need ip id, quantity

//    @PutMapping


}



