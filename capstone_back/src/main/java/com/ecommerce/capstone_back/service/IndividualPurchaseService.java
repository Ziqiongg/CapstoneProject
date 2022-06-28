package com.ecommerce.capstone_back.service;

import com.ecommerce.capstone_back.repository.IndividualPurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IndividualPurchaseService {

    public final IndividualPurchaseRepository individualPurchaseRepository;

    @Autowired
    public IndividualPurchaseService(IndividualPurchaseRepository individualPurchaseRepository) {
        this.individualPurchaseRepository = individualPurchaseRepository;
    }
}
