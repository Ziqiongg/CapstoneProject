package com.ecommerce.capstone_back.AppUserControllerTests;

import com.ecommerce.capstone_back.model.AppUser;
import com.ecommerce.capstone_back.model.Product;
import com.ecommerce.capstone_back.repository.AppUserRepository;
import com.ecommerce.capstone_back.controllers.AppUserController;
import com.ecommerce.capstone_back.service.AppUserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class AppUserControllerTests {

    @Autowired
    AppUserRepository appUserRepository;

    @Test
    public void canGetUserById() {
        Optional<AppUser> userId = appUserRepository.findById(1L);
        assertEquals("Alex", userId.get().getUserFirstName());
    }

    @Test
    public void canGetUserWalletById(){
        Optional<AppUser> userWalletById = appUserRepository.findById(1L);
        assertEquals(1000, userWalletById.get().getWallet());
    }


}
