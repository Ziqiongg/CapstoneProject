package com.ecommerce.capstone_back.repository;

import com.ecommerce.capstone_back.model.IndividualPurchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IndividualPurchaseRepository extends  JpaRepository<IndividualPurchase,Long> {
}
