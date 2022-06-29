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

            value="SELECT * FROM individual_purchase WHERE app_user_id = ?1 AND purchased = FALSE",
            nativeQuery = true
    )
     List<IndividualPurchase> getBasketById(Long AppUserId);


// Get purchases
    @Query(
            value = "SELECT * FROM individual_purchase WHERE app_user_id = ?1 AND purchased = TRUE",
            nativeQuery = true)
    List<IndividualPurchase> viewPurchaseById(Long AppUser_Id);


    //    Add to basket query
//    USER, PRODUCT, QUANTITY, PURCHASED
    @Query(
            value = "INSERT INTO" + "individual_purchase"
                    + "app_user_id"
                    + "Product_id"
                    + "quantity"
                    + "purchased"
                    + " values (?1, ?2, ?3, FALSE) ",

            nativeQuery = true)

    List<IndividualPurchase> addItemToBasket(Long AppUserId, Long ProductId);

    //    Delete from basket query
    @Query(
            value = "DELETE FROM individual_purchase WHERE app_user_id = ?1 AND product_id = ?2",
            nativeQuery = true)
    Integer deleteBasketById(Long AppUserId, Long ProductId);


    // update basket quantity query
    @Query(
            value = "UPDATE individual_purchase " + " SET quantity = quantity + ?1 " + " WHERE app_user_id = ?2 AND product_id = ?3",
            nativeQuery = true)
    Integer updateChangeToBasket(Long AppUserId, Long ProductId, int Quantity);
// need to add arguments being passed through ^^



    }


