package com.ecommerce.capstone_back.controllers;


import com.ecommerce.capstone_back.model.AppUser;
import com.ecommerce.capstone_back.repository.UserRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class AppUserController {



    @Autowired
    private final AppUserRepository appUserRepository;

    public AppUserController(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    @GetMapping({"/users/id/{id}"})
    public Optional<AppUser> getUserById(@PathVariable Long id){
        return this.appUserRepository.findById(id);
   }

   @PutMapping(
           value = {"/users/wallet/{wallet}"},
           produces = {"application/json"}
   )
    public AppUser updateWallet(@RequestBody AppUser user1, @PathVariable double wallet){
        return (AppUser) this.appUserRepository.save(user1);
   }

   @PatchMapping("/users/{id}/{firstName}")
    public ResponseEntity<AppUser> updateUserFirstName(@PathVariable Long id, @PathVariable String firstName){
        try{
            AppUser user =  appUserRepository.findById(id).get();
            user.setFirstName(firstName);
            return new ResponseEntity<UserApp>(appUserRepository.save(user), HttpStatus.OK);
        } catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
   }






}
