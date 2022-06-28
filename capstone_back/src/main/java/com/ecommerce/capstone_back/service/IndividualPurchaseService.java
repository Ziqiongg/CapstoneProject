package com.ecommerce.capstone_back.service;


import com.ecommerce.capstone_back.model.AppUser;
import com.ecommerce.capstone_back.model.IndividualPurchase;

import com.ecommerce.capstone_back.model.Product;

import com.ecommerce.capstone_back.repository.IndividualPurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;

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
    public static List<IndividualPurchase> getBasket(AppUser user) {

    
    public List<IndividualPurchase> getBasket(Long AppUserId) {


        return IndividualPurchaseRepository.getBasketById(user.getId());
    }
    
    

//    get customer purchase
//public static List<IndividualPurchase> getPurchase(AppUser user) {
//
//    return IndividualPurchaseRepository.viewPurchaseById(user.getId());
//}
//// delete customer basket
//    public void deleteById (AppUser user, Product product){
//     return IndividualPurchaseRepository.deleteBasketById(user.getId(), product.getId());
//        }
//
////        view purchased
//    public List<IndividualPurchase> viewPurchased(){
//        return IndividualPurchase.viewPurchaseById();
//    }
//
////        view basket(purchased = false)
//    public List<IndividualPurchase> viewBasket(){
//        return IndividualPurchase.viewBasketById();
//    }

//update basket (quantity change)



    // add to basket
    }




}

