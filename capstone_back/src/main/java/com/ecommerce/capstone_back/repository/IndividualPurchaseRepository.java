package com.ecommerce.capstone_back.repository;

import com.ecommerce.capstone_back.model.Users;
import com.ecommerce.capstone_back.model.IndividualPurchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

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
    @Modifying
    @Transactional
    @Query(
            value = "INSERT into individual_purchase (app_user_id, product_id, quantity, purchased) VALUES (:appuserid, :productid, :quantity, FALSE)",
            nativeQuery = true)

    void addItemToBasket(@Param("appuserid") Long appuserid, @Param("productid") Long productid, @Param("quantity") Integer quantity);

//    value =
//    "insert into Users (name, age, email, status) values (:name, :age, :email, :status)",
//  nativeQuery = true)

//void insertUser(@Param("name") String name, @Param("age") Integer age,
//  @Param("status") Integer status, @Param("email") String email);



//    List<IndividualPurchase> addItemToBasket(Long AppUserId, Long ProductId, Integer quantity);

    //    Delete from basket query
    @Modifying
    @Transactional
    @Query(
            value = "DELETE FROM individual_purchase WHERE app_user_id = ?1 AND product_id = ?2",
            nativeQuery = true)
    Integer deleteBasketById(Long AppUserId, Long ProductId);


    // update basket quantity query
    @Modifying
    @Transactional
    @Query(
            value = "UPDATE individual_purchase " + " SET quantity = quantity + ?1 " + " WHERE app_user_id = ?2 AND product_id = ?3",
            nativeQuery = true)
    Integer updateChangeToBasket(Integer Quantity, Long AppUserId, Long ProductId);
// need to add arguments being passed through ^^



    }


