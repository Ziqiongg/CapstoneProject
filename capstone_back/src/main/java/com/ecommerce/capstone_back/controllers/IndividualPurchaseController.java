package com.ecommerce.capstone_back.controllers;

import com.ecommerce.capstone_back.model.Users;
import com.ecommerce.capstone_back.model.IndividualPurchase;
import com.ecommerce.capstone_back.service.IndividualPurchaseService;
import com.ecommerce.capstone_back.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class IndividualPurchaseController {
//
    @Autowired
    IndividualPurchaseService individualPurchaseService;

    @Autowired
    UsersService usersService;

//            constructors
    public IndividualPurchaseController() {}

    public IndividualPurchaseController(IndividualPurchaseService individualPurchaseService, UsersService
                                        usersService) {
        this.individualPurchaseService = individualPurchaseService;
        this.usersService = usersService;
    }

//  Get basket

    @GetMapping("/AppUser/get_basket")
    public ResponseEntity getCustomerBasket() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        Users users = usersService.getUsersByUsername(username);
        try {
            List<IndividualPurchase> basket = individualPurchaseService.getBasket(users.getId());
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
@PostMapping("/AppUser_basket/additem/{users_id}")
public ResponseEntity addToBasket(@PathVariable Long users_id, @RequestParam Integer quantity, @RequestParam Long ProductId){
    try {
        individualPurchaseService.addToUserBasket(users_id, ProductId, quantity);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    } catch (RuntimeException re) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(re.getMessage());
    }
}


// Remove item from basket
// need to get user id, product id

    @DeleteMapping("/AppUser_basket/{product_id}")
//    error if the path variable does not match line 73
    public void deleteCustomerBasket(@PathVariable (name = "product_id") Long ProductId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        Users users = usersService.getUsersByUsername(username);
        individualPurchaseService.deleteById(users.getId(), ProductId);

    }

// Update basket
//    need user id, product id, quantity


// will need to be modified to check wallet against product price
    @PutMapping("/AppUser_basket/updateitem")
    public void updateBasket(@PathVariable  Integer Quantity, Long AppUserId, Long ProductId){
        individualPurchaseService.updateToUserBasket( Quantity, AppUserId, ProductId);
    }

    }

