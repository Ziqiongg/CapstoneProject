package com.ecommerce.capstone_back.repository;

import com.ecommerce.capstone_back.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser,Long> {

    @Query(value = "SELECT * FROM app_user WHERE user_first_name = ?1 AND user_password = ?2", nativeQuery = true)
    Optional<AppUser> findByNameAndPassword(String userFirstName, String password);



}
