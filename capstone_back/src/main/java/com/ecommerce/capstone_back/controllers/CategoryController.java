package com.ecommerce.capstone_back.controllers;

import com.ecommerce.capstone_back.Category;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

public class CategoryController {
    @GetMapping("categories")
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = List.of(Category.values());
        return ResponseEntity.ok().body(categories);
    }

}
