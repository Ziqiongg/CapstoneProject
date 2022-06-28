package com.ecommerce.capstone_back.service;

import com.ecommerce.capstone_back.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Autowired
public class ProductService {

    public final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
}
