package com.ecommerce.capstone_back.controllers;

import com.ecommerce.capstone_back.Category;
import com.ecommerce.capstone_back.model.Product;
import com.ecommerce.capstone_back.repository.ProductRepository;
import com.ecommerce.capstone_back.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class ProductController {

    @Autowired
    private final ProductService productService;

    @Autowired
    private final ProductRepository productRepository;

    public ProductController(ProductService productService, ProductRepository productRepository) {
        this.productService = productService;
        this.productRepository = productRepository;
    }



    //get all products
    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAll();
        return ResponseEntity
                .ok()
                .body(products);


    }

    //get products by id
    @GetMapping("/products/id/{id}")
    public ResponseEntity<Optional<Product>> getProductsById(@PathVariable Long id){
        Optional<Product> productsById = Optional.ofNullable(productRepository.findProductById(id));
        return ResponseEntity
                .ok()
                .body(productsById);
    }

    //get products by name
    @GetMapping("/products/name/{name}")
    public ResponseEntity<List<Product>> getProductsByName(@PathVariable String name) {
        List<Product> productsByName = productService.getByName(name);
        return ResponseEntity
                .ok()
                .body(productsByName);


    }


    ////get products by category
    @GetMapping("/products/category/{category}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable String category) {
        List<Product> productsByCategory = productService.getByCategory(category);
        return ResponseEntity
                .ok()
                .body(productsByCategory);
    }





    }
