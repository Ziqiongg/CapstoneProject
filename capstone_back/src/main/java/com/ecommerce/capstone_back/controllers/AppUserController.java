package com.ecommerce.capstone_back.controllers;


import com.ecommerce.capstone_back.dto.AppUserFirstNamePasswordDTO;
import com.ecommerce.capstone_back.model.AppUser;
import com.ecommerce.capstone_back.repository.AppUserRepository;
import com.ecommerce.capstone_back.service.AppUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.ApplicationScope;

import java.util.Optional;

@RestController
public class AppUserController {

    public final AppUserService appUserService;


    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }


    @GetMapping({"/users/id/{id}"})
    public ResponseEntity<AppUser> getUserById(@PathVariable Long id) throws Exception {
        AppUser appUser = appUserService.getAppUserById(id);
        return ResponseEntity.ok().body(appUser);
   }


    // Why not just get user by ID then take wallet at frontend? Why dies this have a double in that it never uses?
   @GetMapping({"/users/wallet/{id}"})
   public ResponseEntity<Double> getUserWallet(@PathVariable Long id) throws Exception {
        AppUser appUser = appUserService.getAppUserById(id);
       return ResponseEntity.ok().body(appUser.getWallet());
   }

//   get Wallet

   @PutMapping(
           value = {"/users/wallet/{wallet}"},
           produces = {"application/json"}
   )
    public ResponseEntity<Double> updateWallet(@RequestBody AppUser appUser, @PathVariable double wallet){
        appUser.setWallet(wallet);
        appUserService.updateAppUser(appUser);
        return ResponseEntity.ok().body(appUser.getWallet());
   }

   // Super update all things as needed --- Does not work, keeping as extension later on
//    @PatchMapping("/users/{id}")
//    public ResponseEntity<AppUser> updateAppUser(@PathVariable Long id,
//                                                 @RequestParam Optional<Double> wallet,
//                                                 @RequestParam Optional<String> firstName,
//                                                 @RequestParam Optional<String> lastName,
//                                                 @RequestParam Optional<String> address) throws Exception {
//        AppUser appUser = appUserService.getAppUserById(id);
//        wallet.ifPresent(appUser::setWallet);
//        firstName.ifPresent(appUser::setUserFirstName);
//        lastName.ifPresent(appUser::setUserLastName);
//        address.ifPresent(appUser::setUserAddress);
//        return ResponseEntity.ok().body(appUser);
//    }

    @PatchMapping("/users/patch/firstName/{id}")
    public ResponseEntity<AppUser> updateAppUserFirstName(@PathVariable Long id, @RequestBody String firstName) throws Exception{
        AppUser appUser = appUserService.getAppUserById(id);
        appUser.setUserFirstName(firstName);
        appUserService.updateAppUser(appUser);
        return ResponseEntity.ok().body(appUser);
    }

    @PatchMapping("/users/patch/lastName/{id}")
    public ResponseEntity<AppUser> updateAppUserLastName(@PathVariable Long id, @RequestBody String lastName) throws Exception{
        AppUser appUser = appUserService.getAppUserById(id);
        appUser.setUserLastName(lastName);
        appUserService.updateAppUser(appUser);
        return ResponseEntity.ok().body(appUser);
    }

    @PatchMapping("/users/patch/address/{id}")
    public ResponseEntity<AppUser> updateAppUserAddress(@PathVariable Long id, @RequestBody String address) throws Exception{
        AppUser appUser = appUserService.getAppUserById(id);
        appUser.setUserAddress(address);
        appUserService.updateAppUser(appUser);
        return ResponseEntity.ok().body(appUser);
    }

    @PatchMapping("/users/patch/password/{id}")
    public ResponseEntity<AppUser> updateAppUserPassword(@PathVariable Long id, @RequestBody String password) throws Exception{
        AppUser appUser = appUserService.getAppUserById(id);
        appUser.setUserPassword(password);
        appUserService.updateAppUser(appUser);
        return ResponseEntity.ok().body(appUser);
    }

    @PatchMapping("/users/patch/wallet/{id}")
    public ResponseEntity<AppUser> updateAppUserWallet(@PathVariable Long id, @RequestBody double wallet) throws Exception{
        AppUser appUser = appUserService.getAppUserById(id);
        appUser.setWallet(wallet);
        appUserService.updateAppUser(appUser);
        return ResponseEntity.ok().body(appUser);
    }



    @DeleteMapping("/users/{id}")
   public void deleteAppUser(@PathVariable Long id) throws Exception {
       AppUser appUser = appUserService.getAppUserById(id);
       appUserService.deleteAppUser(appUser);
}

    @PostMapping("users/login")
    public ResponseEntity findByNameAndPassword(@RequestBody AppUserFirstNamePasswordDTO appUser){
        Optional<AppUser> knownUser = appUserService.findByNameAndPassword(
                appUser.getUserFirstName(), appUser.getPassword());
        if(knownUser.isPresent()){
            return ResponseEntity.ok().body(knownUser);
        } else {
            return new ResponseEntity<>("User does not exist", HttpStatus.BAD_REQUEST);
        }
    }



}
