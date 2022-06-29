package com.ecommerce.capstone_back.controllers;


import com.ecommerce.capstone_back.model.AppUser;
import com.ecommerce.capstone_back.service.AppUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

//   @GetMapping({"/users/wallet/{wallet}"})
//   public Optional<AppUser> getUserWallet(@PathVariable double wallet){
//        return this.appUserRepository.findBy(wallet);
//   }

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

   // Super update all things as needed
    @PatchMapping("/users/{id}")
    public ResponseEntity<AppUser> updateAppUser(@PathVariable Long id,
                                                 @RequestParam Optional<Double> wallet,
                                                 @RequestParam Optional<String> firstName,
                                                 @RequestParam Optional<String> lastName,
                                                 @RequestParam Optional<String> address) throws Exception {
        AppUser appUser = appUserService.getAppUserById(id);
        wallet.ifPresent(appUser::setWallet);
        firstName.ifPresent(appUser::setUserFirstName);
        lastName.ifPresent(appUser::setUserLastName);
        address.ifPresent(appUser::setUserAddress);
        return ResponseEntity.ok().body(appUser);
    }

//    @PatchMapping("/users/{id}/{firstName}")
//    public ResponseEntity<AppUser> updateUserFirstName(@PathVariable Long id, @PathVariable String firstName) throws Exception {
//        AppUser appUser =  appUserService.getAppUserById(id);
//        appUser.setUserFirstName(firstName);
//        appUserService.updateAppUser(appUser);
//        return ResponseEntity.ok().body(appUser);
//   }
//
//   @PatchMapping("/users/{id}/{lastName}")
//    public ResponseEntity<AppUser> updateUserLastName(@PathVariable Long id, @PathVariable String lastName){
//        try{
//            AppUser user = appUserRepository.findById(id).get();
//            user.setUserLastName(lastName);
//            return new ResponseEntity<AppUser>(appUserRepository.save(user), HttpStatus.OK);
//        } catch(Exception e) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//   }
//
//   @PatchMapping("/users/{id}/{address}")
//    public ResponseEntity<AppUser> updateUserAddress(@PathVariable Long id, @PathVariable String address){
//        try{
//            AppUser user = appUserRepository.findById(id).get();
//            user.setUserAddress(address);
//            return new ResponseEntity<AppUser>(appUserRepository.save(user), HttpStatus.OK);
//        } catch(Exception e){
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//   }
//
//   @PatchMapping("/users/{id}/{address}")
//    public ResponseEntity<AppUser> updateUserPassword(@PathVariable Long id, @PathVariable String password){
//        try{
//            AppUser user = appUserRepository.findById(id).get();
//            user.setUserPassword(password);
//            return new ResponseEntity<AppUser>(appUserRepository.save(user), HttpStatus.OK);
//        } catch(Exception e){
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//   }
//

   @DeleteMapping("/users/{id}")
   public void deleteAppUser(@PathVariable Long id) throws Exception {
       AppUser appUser = appUserService.getAppUserById(id);
       appUserService.deleteAppUser(appUser);
}


}
