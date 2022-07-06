package com.ecommerce.capstone_back.UsersControllerTests;

import com.ecommerce.capstone_back.model.Users;
import com.ecommerce.capstone_back.model.Product;
import com.ecommerce.capstone_back.repository.UsersRepository;
import com.ecommerce.capstone_back.controllers.UsersController;
import com.ecommerce.capstone_back.service.UsersService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class UsersControllerTests {

    @Autowired
    UsersRepository appUserRepository;

    @Test
    public void canGetUserById() {
        Optional<Users> userId = appUserRepository.findById(1L);
        assertEquals("Alex", userId.get().getUserFirstName());
    }

    @Test
    public void canGetUserWalletById(){
        Optional<Users> userWalletById = appUserRepository.findById(1L);
        assertEquals(1000, userWalletById.get().getWallet());
    }


}
