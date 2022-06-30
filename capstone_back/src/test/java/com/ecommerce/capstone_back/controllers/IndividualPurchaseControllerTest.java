package com.ecommerce.capstone_back.controllers;
import com.ecommerce.capstone_back.model.AppUser;
import com.ecommerce.capstone_back.model.IndividualPurchase;
import com.ecommerce.capstone_back.model.Product;
import com.ecommerce.capstone_back.repository.AppUserRepository;
import com.ecommerce.capstone_back.repository.IndividualPurchaseRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.*;



    @SpringBootTest
    class IndividualPurchaseControllerTest {

        @Autowired
        IndividualPurchaseRepository individualPurchaseRepository;
        @Test
        void getUserBasket() {
            List<IndividualPurchase> basket = individualPurchaseRepository.getBasketById(2L);
            assertEquals(2, basket.size());
        }

        @Test

        void getUserPurchases(){
            List<IndividualPurchase> purchase = individualPurchaseRepository.viewPurchaseById(1L);
            assertEquals(2, purchase.size());
        }

        @Test
        void deleteUserBasket(){
//
            individualPurchaseRepository.deleteBasketById(1L, 2L);
            List<IndividualPurchase> deleteMe = individualPurchaseRepository.getBasketById(1L);
            assertEquals(0,deleteMe.size() );

        }

        @Test
        void addToMyBasket(){
            individualPurchaseRepository.addItemToBasket(3L, 1L, 5);
            List<IndividualPurchase> newItems = individualPurchaseRepository.getBasketById(3L);
            assertEquals(1,newItems.size() );
        }

        @Test
        void updateUserBasket(){
            individualPurchaseRepository.updateChangeToBasket(5, 2L, 3L);
            List<IndividualPurchase> updateMe = individualPurchaseRepository.getBasketById(2L);
            assertEquals(2, updateMe.size());


        }








}