package com.ecommerce.capstone_back.controllers;

import com.ecommerce.capstone_back.model.AppUser;
import com.ecommerce.capstone_back.model.IndividualPurchase;
import com.ecommerce.capstone_back.service.IndividualPurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class IndividualPurchaseController {

    @Autowired
    IndividualPurchaseService individualPurchaseService;

//            constructors
    public IndividualPurchaseController() {}

    public IndividualPurchaseController(IndividualPurchaseService individualPurchaseService) {
        this.individualPurchaseService = individualPurchaseService;
    }

//  Get basket

    @GetMapping("/AppUser/get_basket/{appuser_id}")
    public ResponseEntity getCustomerBasket(@PathVariable Long AppUserId) {
        try {
            List<IndividualPurchase> basket = individualPurchaseService.getBasket(AppUserId);
            return ResponseEntity.status(HttpStatus.OK).body(basket);
        } catch (RuntimeException re) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(re.getMessage());
        }

    }
// Get purchases
    @GetMapping("/AppUser/get_purchases/{appuser_id}")
    public ResponseEntity getCustomerPurchase(@PathVariable Long AppUserId) {
        try {
            List<IndividualPurchase> basket = individualPurchaseService.getPurchase(AppUserId);
            return ResponseEntity.status(HttpStatus.OK).body(basket);
        } catch (RuntimeException re) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(re.getMessage());
        }
    }
// Add to basket
//need to get user id, product id
//// will need to be modified to check wallet against product price
    @PostMapping("/AppUser_basket/additem")
    public ResponseEntity addToBasket(@PathVariable Long AppUserId, Long ProductId){
        try {
            List<IndividualPurchase> basket = individualPurchaseService.addToUserBasket(AppUserId, ProductId);
            return ResponseEntity.status(HttpStatus.OK).body(basket);
        } catch (RuntimeException re) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(re.getMessage());
        }
    }


// Remove item from basket
// need to get user id, product id

    @DeleteMapping("/AppUser_basket/{user_id}")
    public void deleteCustomerBasket(@PathVariable Long AppUserId, Long ProductId) {
        individualPurchaseService.deleteById(AppUserId, ProductId);

    }

// Update basket
//    need user id, product id, quantity


// will need to be modified to check wallet against product price
    @PutMapping("/AppUser_basket/updateitem")
    public void updateBasket(@PathVariable Long AppUserId, Long ProductId, int Quantity){
        individualPurchaseService.updateToUserBasket(AppUserId, ProductId, Quantity);
    }

    }

