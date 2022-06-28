package com.ecommerce.capstone_back.repository;

import com.ecommerce.capstone_back.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<AppUser,Long> {
}
