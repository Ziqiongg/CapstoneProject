package com.ecommerce.capstone_back.service;

import com.ecommerce.capstone_back.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ProductServiceTest {

    @Autowired
    private ProductService productService;

    //test get all products
    void testAll(){
        List<Product> timetables= productService.getAll();
        assertEquals(100, timetables.size());
    }



//    // get all products
//    public List<Product> getAll() {
//        return productRepository.findAll();
//    }
//
//    //get product by id
//    public Optional<Product> getById(Long id) {
//        return productRepository.findById(id);
//    }
//
//    //get product by name
//
//    public List<Product> getByName(String name){
//        return productRepository.findAllByNameLikeIgnoreCase(name);
//    }
//
//
//    //get product by category
//    public List<Product> getByCategory(String categoryName){
//        return productRepository.findAllByCategoryContainingIgnoreCase(categoryName);
//    }






}