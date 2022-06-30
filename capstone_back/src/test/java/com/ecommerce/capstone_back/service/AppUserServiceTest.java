package com.ecommerce.capstone_back.service;

import com.ecommerce.capstone_back.model.AppUser;
import com.ecommerce.capstone_back.repository.AppUserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class AppUserServiceTest {

    @Autowired
    AppUserService appUserService;
    @Autowired
    AppUserRepository appUserRepository;

    @Test
    public void canGetAppUserByID() throws Exception {
//        given appUserService

//        when
        AppUser user2 = appUserService.getAppUserById(2L);
//        then
        assertEquals(user2.getUserFirstName(), "Peace");
    }


    @Test
    public void canUpdateAppUser() {
//        given
        AppUser testUser = new AppUser(6L, 1000, "Testing", "McTesty",
                "Address", "12345", null);
//        when
        appUserService.updateAppUser(testUser);
//        then
        assertEquals(appUserRepository.findAll().size(), 6);

    }

//    Sometimes these two tests will fail because of the update line in application properties

    @Test
    public void canFindByNameAndPassword(){
//        given
        String name = "Alex";
        String password = "123";
//        when
        Optional<AppUser> user = appUserService.findByNameAndPassword(name, password);
//        then
        assertEquals(user.get().getUserFirstName(),"Alex");

    }

    @Test
    public void canGetAllUsers(){
//        given
//        when
//        then
        assertEquals(appUserService.getAllUsers().size(), 5);
    }

}
