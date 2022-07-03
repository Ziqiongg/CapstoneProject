package com.ecommerce.capstone_back.repository;

import com.ecommerce.capstone_back.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users,Long> {

    @Query(value = "SELECT * FROM app_user WHERE user_first_name = ?1 AND user_password = ?2", nativeQuery = true)
    Optional<Users> findByNameAndPassword(String userFirstName, String password);

    Optional<Users> findByUsername(String username);



}
