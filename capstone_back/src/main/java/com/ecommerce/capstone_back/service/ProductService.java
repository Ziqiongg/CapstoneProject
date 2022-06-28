package com.ecommerce.capstone_back.service;

import com.ecommerce.capstone_back.Category;
import com.ecommerce.capstone_back.model.IndividualPurchase;
import com.ecommerce.capstone_back.model.Product;
import com.ecommerce.capstone_back.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    public final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    // get all products
    public List<Product> getAll() {
        return productRepository.findAll();
    }

    //get product by id
    public Optional<Product> getById(Long id) {
        return productRepository.findById(id);
    }

    //get product by name

    public List<Product> getByName(String name){
        return productRepository.findAllByNameLikeIgnoreCase(name);
    }


    //get product by category
    public List<Product> getByCategory(Category categoryName){
        return productRepository.findAllByCategoryContainingIgnoreCase(categoryName);
    }

}
