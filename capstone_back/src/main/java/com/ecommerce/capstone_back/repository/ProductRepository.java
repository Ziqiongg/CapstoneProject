package com.ecommerce.capstone_back.repository;

import com.ecommerce.capstone_back.Category;
import com.ecommerce.capstone_back.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {

    //@Query(value = "SELECT * FROM product WHERE product.id = ?1 ", nativeQuery = true)
    Product findProductById(Long id);

    //get by name or name like
    @Query(value = "SELECT * FROM PRODUCT WHERE LOWER(NAME) LIKE %:name%", nativeQuery = true)
    List<Product> findByName(@Param("name") String name);


    //get by category
    List<Product> findAllByCategory(String category);

}
