package com.ecommerce.capstone_back.repository;

import com.ecommerce.capstone_back.model.AppUser;
import com.ecommerce.capstone_back.model.IndividualPurchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IndividualPurchaseRepository extends  JpaRepository<IndividualPurchase,Long> {


//Get basket query

    @Query(

            value="SELECT * FROM IndividualPurchase WHERE AppUser_id = ?1 AND purchased = FALSE",
            nativeQuery = true
    )
     List<IndividualPurchase> getBasketById(AppUser user);

    //    Add to basket query
//    USER, PRODUCT, QUANTITY, PURCHASED
//    @Query(
//            value = "INSERT INTO" + "IndividualPurchase" + "" ,
//
//            nativeQuery = true)
//
//    List<IndividualPurchase> addToBasket();

    //    Delete from basket query
    @Query(
            value = "DELETE FROM IndividualPurchase WHERE AppUser_id = ?1 AND product_id = ?2",
            nativeQuery = true)
    Integer deleteBasketById();

    //    View purchased basket query
    @Query(
            value = "SELECT * FROM IndividualPurchase WHERE customer_id = ?1 AND purchased = TRUE",
            nativeQuery = true)
    List<IndividualPurchase> viewPurchaseById(Long AppUser_Id, Long product_Id);

    // view basket query

    @Query(
            value = "SELECT * FROM IndividualPurchase WHERE customer_id = ?1 AND purchased = FALSE",
            nativeQuery = true)
    List<IndividualPurchase> viewBasketById(Long AppUser_Id, Long product_Id);

    ;

    // update basket quantity query
    @Query(
            value = "UPDATE IndividualPurchase " + " SET quantity = quantity + ?1 " + " WHERE id = ?2",
            nativeQuery = true)
    Integer BasketUpdate();
// need to add arguments being passed through ^^

    @Query( value = "SELECT * FROM individual_purchase WHERE AppUser_id = ?1 AND purchased = FALSE",
                nativeQuery = true
        )
     List<IndividualPurchase> getCustomerBasket(Long appUserId);

    }


