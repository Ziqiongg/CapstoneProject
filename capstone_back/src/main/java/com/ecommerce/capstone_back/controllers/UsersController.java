package com.ecommerce.capstone_back.controllers;


import com.ecommerce.capstone_back.dto.UsersFirstNamePasswordDTO;
import com.ecommerce.capstone_back.model.Users;
import com.ecommerce.capstone_back.service.UsersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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

//    Super update all things as needed --- Does not work, keeping as extension later on
    @PatchMapping("/users")
    public ResponseEntity<Users> updateUsers(@RequestParam Optional<Double> wallet,
                                             @RequestParam Optional<String> firstName,
                                             @RequestParam Optional<String> lastName,
                                             @RequestParam Optional<String> address) throws Exception {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        Users users = usersService.getUsersByUsername(username);
        wallet.ifPresent(users::setWallet);
        firstName.ifPresent(users::setUserFirstName);
        lastName.ifPresent(users::setUserLastName);
        address.ifPresent(users::setUserAddress);
        return ResponseEntity.ok().body(users);
    }

    @PatchMapping("/users/patch/firstName")
    public ResponseEntity<Users> updateUsersFirstName(@RequestBody String firstName) throws Exception{
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        Users users = usersService.getUsersByUsername(username);
        users.setUserFirstName(firstName);
        usersService.updateUsers(users);
        return ResponseEntity.ok().body(users);
    }

    @PatchMapping("/users/patch/lastName")
    public ResponseEntity<Users> updateUsersLastName(@RequestBody String lastName) throws Exception{
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        Users users = usersService.getUsersByUsername(username);
        users.setUserLastName(lastName);
        usersService.updateUsers(users);
        return ResponseEntity.ok().body(users);
    }

    @PatchMapping("/users/patch/address")
    public ResponseEntity<Users> updateUsersAddress(@RequestBody String address) throws Exception{
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        Users users = usersService.getUsersByUsername(username);
        users.setUserAddress(address);
        usersService.updateUsers(users);
        return ResponseEntity.ok().body(users);
    }

    @PatchMapping("/users/patch/password")
    public ResponseEntity<Users> updateUsersPassword(@RequestBody String password) throws Exception{
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        Users users = usersService.getUsersByUsername(username);
        users.setUserPassword(password);
        usersService.updateUsers(users);
        return ResponseEntity.ok().body(users);
    }

    @PatchMapping("/users/patch/wallet")
    public ResponseEntity<Users> updateUsersWallet(@RequestBody double wallet) throws Exception{
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        Users users = usersService.getUsersByUsername(username);
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

    @GetMapping("/users/username/{username}")
    public ResponseEntity<Optional<Users>> findByUsername(@PathVariable String username){
        Optional<Users> user = usersService.getByUsername(username);
        return ResponseEntity.ok().body(user);
    }





}
