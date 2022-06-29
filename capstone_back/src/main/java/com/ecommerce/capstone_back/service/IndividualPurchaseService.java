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

    public List<IndividualPurchase> addToUserBasket(Long AppUserId, Long ProductId){

        return individualPurchaseRepository.addItemToBasket(AppUserId, ProductId);
    }


// delete customer basket
    public void deleteById (Long AppUserId, Long ProductId){
     individualPurchaseRepository.deleteBasketById(AppUserId, ProductId);
        }


//        update basket quantity

// needs to check wallet, check stock, check price and adjust


    public void updateToUserBasket(Long AppUserId, Long ProductId, int Quantity) {
        individualPurchaseRepository.updateChangeToBasket(AppUserId, ProductId, Quantity);
    }

    }






