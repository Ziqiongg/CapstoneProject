package com.ecommerce.capstone_back.service;


import com.ecommerce.capstone_back.model.IndividualPurchase;

import com.ecommerce.capstone_back.repository.IndividualPurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class IndividualPurchaseService {

    public final IndividualPurchaseRepository individualPurchaseRepository;

    @Autowired
    public IndividualPurchaseService(IndividualPurchaseRepository individualPurchaseRepository) {
        this.individualPurchaseRepository = individualPurchaseRepository;
    }
//
//    public List<IndividualPurchase> getBasket(Long AppUserId) {
//
//        return IndividualPurchaseRepository.getBasket(AppUserId);
//    }


    // get customer basket

    public List<IndividualPurchase> getBasket(Long AppUserId) {
        return individualPurchaseRepository.getBasketById(AppUserId);
    }


//    get customer purchase
    public  List<IndividualPurchase> getPurchase(Long AppUserId) {
        return individualPurchaseRepository.viewPurchaseById(AppUserId);
    }

//    add to user basket,
    // needs to check wallet, check price, check stock and adjust

    public void addToUserBasket(Long users_id, Long ProductId, Integer quantity){
        individualPurchaseRepository.addItemToBasket(users_id, ProductId, quantity);

    }


// delete customer basket
    public void deleteById (Long users_id, Long ProductId){
     individualPurchaseRepository.deleteBasketById(users_id, ProductId);
        }


//        update basket quantity

// needs to check wallet, check stock, check price and adjust


    public void updateToUserBasket(Integer Quantity, Long AppUserId, Long ProductId) {
        individualPurchaseRepository.updateChangeToBasket(Quantity, AppUserId, ProductId);
    }

    }






