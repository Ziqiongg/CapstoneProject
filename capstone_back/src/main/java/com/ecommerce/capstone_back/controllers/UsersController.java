package com.ecommerce.capstone_back.controllers;


import com.ecommerce.capstone_back.dto.UsersFirstNamePasswordDTO;
import com.ecommerce.capstone_back.model.Users;
import com.ecommerce.capstone_back.service.UsersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
//@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UsersController {
    public final UsersService usersService;


    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }


    @GetMapping({"/users/id/{id}"})
    public ResponseEntity<Users> getUsersById(@PathVariable Long id) throws Exception {
        Users users = usersService.getUsersById(id);
        return ResponseEntity.ok().body(users);
   }


    // Why not just get user by ID then take wallet at frontend? Why dies this have a double in that it never uses?
   @GetMapping({"/users/wallet/{id}"})
   public ResponseEntity<Double> getUsersWallet(@PathVariable Long id) throws Exception {
        Users users = usersService.getUsersById(id);
       return ResponseEntity.ok().body(users.getWallet());
   }

//   not needed
//
//   @PutMapping(
//           value = {"/users/wallet/{id}"},
//           produces = {"application/json"}
//   )
//    public ResponseEntity<Double> updateWallet(@RequestBody double wallet, @PathVariable Long id) throws Exception {
//        Users users = usersService.getUsersById(id);
//        users.setWallet(wallet);
//        usersService.updateUsers(users);
//        return ResponseEntity.ok().body(users.getWallet());
//   }

   // Super update all things as needed --- Does not work, keeping as extension later on
//    @PatchMapping("/users/{id}")
//    public ResponseEntity<Users> updateUsers(@PathVariable Long id,
//                                                 @RequestParam Optional<Double> wallet,
//                                                 @RequestParam Optional<String> firstName,
//                                                 @RequestParam Optional<String> lastName,
//                                                 @RequestParam Optional<String> address) throws Exception {
//        Users users = usersService.getUsersById(id);
//        wallet.ifPresent(users::setWallet);
//        firstName.ifPresent(users::setUsersFirstName);
//        lastName.ifPresent(users::setUsersLastName);
//        address.ifPresent(users::setUsersAddress);
//        return ResponseEntity.ok().body(users);
//    }

    @PatchMapping("/users/patch/firstName/{id}")
    public ResponseEntity<Users> updateUsersFirstName(@PathVariable Long id, @RequestBody String firstName) throws Exception{
        Users users = usersService.getUsersById(id);
        users.setUserFirstName(firstName);
        usersService.updateUsers(users);
        return ResponseEntity.ok().body(users);
    }

    @PatchMapping("/users/patch/lastName/{id}")
    public ResponseEntity<Users> updateUsersLastName(@PathVariable Long id, @RequestBody String lastName) throws Exception{
        Users users = usersService.getUsersById(id);
        users.setUserLastName(lastName);
        usersService.updateUsers(users);
        return ResponseEntity.ok().body(users);
    }

    @PatchMapping("/users/patch/address/{id}")
    public ResponseEntity<Users> updateUsersAddress(@PathVariable Long id, @RequestBody String address) throws Exception{
        Users users = usersService.getUsersById(id);
        users.setUserAddress(address);
        usersService.updateUsers(users);
        return ResponseEntity.ok().body(users);
    }

    @PatchMapping("/users/patch/password/{id}")
    public ResponseEntity<Users> updateUsersPassword(@PathVariable Long id, @RequestBody String password) throws Exception{
        Users users = usersService.getUsersById(id);
        users.setUserPassword(password);
        usersService.updateUsers(users);
        return ResponseEntity.ok().body(users);
    }

    @PatchMapping("/users/patch/wallet/{id}")
    public ResponseEntity<Users> updateUsersWallet(@PathVariable Long id, @RequestBody double wallet) throws Exception{
        Users users = usersService.getUsersById(id);
        users.setWallet(wallet);
        usersService.updateUsers(users);
        return ResponseEntity.ok().body(users);
    }



    @DeleteMapping("/users/{id}")
   public void deleteUsers(@PathVariable Long id) throws Exception {
       Users users = usersService.getUsersById(id);
       usersService.deleteUsers(users);
}

//    @PostMapping("users/login")
//    public ResponseEntity findByNameAndPassword(@RequestBody UsersFirstNamePasswordDTO users){
//        Optional<Users> knownUsers = usersService.findByNameAndPassword(
//                users.getUserFirstName(), users.getPassword());
//        if(knownUsers.isPresent()){
//            return ResponseEntity.ok().body(knownUsers);
//        } else {
//            return new ResponseEntity<>("Users does not exist", HttpStatus.BAD_REQUEST);
//        }
//    }

//    Get all users (just in case we decide to add admin responsibilities)
    @GetMapping("/users")
    public ResponseEntity<List<Users>> findAllUsers(){
        List<Users> users = usersService.getAllUsers();
        return ResponseEntity.ok().body(users);
    }

    @PostMapping("/register")
    public ResponseEntity<Users> createUser(@RequestBody Users newUser){
        usersService.addUser(newUser);
        return ResponseEntity.ok().body(newUser);
    }





}
