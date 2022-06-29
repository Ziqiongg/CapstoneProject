package com.ecommerce.capstone_back.service;

import com.ecommerce.capstone_back.model.Product;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ProductServiceTest {

    @Autowired
    private ProductService productService;

    //test getting all products
    @Test
    void testAll(){
        List<Product> allProducts= productService.getAll();
        assertEquals(5, allProducts.size());
    }


    //test getting product by id
    @Test
    void testGettingProductByid() {
        Optional<Product> productId = productService.getById(1L);
        assertEquals("Big Boi Hat", productId.get().getName());

    }


    //get product by name
    @Test
    void testGettingProductByName() {
        List<Product> productsByName = productService.getByName("hat");
        assertEquals(1,productsByName.size());
    }


    //get product by category
    @Test
    void testGettingProductByCategory() {
        List<Product> productsByCategory = productService.getByCategory("hat");
        assertEquals(1,productsByCategory.size());
    }

}