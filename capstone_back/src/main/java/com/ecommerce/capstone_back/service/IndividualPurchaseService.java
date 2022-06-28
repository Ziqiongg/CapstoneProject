package com.ecommerce.capstone_back.service;

import com.ecommerce.capstone_back.model.AppUser;
import com.ecommerce.capstone_back.model.IndividualPurchase;
import com.ecommerce.capstone_back.repository.IndividualPurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class IndividualPurchaseService {

    @Autowired
    IndividualPurchaseRepository individualPurchaseRepository;

    public IndividualPurchaseService() {}

    public IndividualPurchaseService(IndividualPurchaseRepository individualPurchaseRepository) {
        this.individualPurchaseRepository = individualPurchaseRepository;
    }

    public  List<IndividualPurchase> getCustomerBasket(Long AppUserId) {}




}
