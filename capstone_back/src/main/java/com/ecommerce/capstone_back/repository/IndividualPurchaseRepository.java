package com.ecommerce.capstone_back.repository;

import com.ecommerce.capstone_back.model.IndividualPurchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IndividualPurchaseRepository extends  JpaRepository<IndividualPurchase,Long> {

//    static List<IndividualPurchase> getCustomerBasket(Long appUserId) {


    @Query(
                 value = "SELECT * FROM indivdual_purchase WHERE AppUser_id = ?1 AND purchased = FALSE",
                nativeQuery = true
        )
     List<IndividualPurchase> getCustomerBasket(Long appUserId);

    }
}
