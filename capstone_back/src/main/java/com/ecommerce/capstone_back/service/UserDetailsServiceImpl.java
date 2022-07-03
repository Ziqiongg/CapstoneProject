package com.ecommerce.capstone_back.service;

import com.ecommerce.capstone_back.model.Users;
import com.ecommerce.capstone_back.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UsersRepository usersRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Users> user = usersRepository.findByUsername(username);
//Build a user (Spring security's User class) using the details of our user (Users class) by, first, finding the user
//        by username, then setting the user (Security's User) username and password to the user (our Users) username
//        and password. If the user with said username is not in the database, throw a UsernameNotFoundException.
        UserBuilder builder = null;
        if (user.isPresent()) {
            Users currentUser = user.get();
            builder = User.withUsername(username);
            builder.password(currentUser.getUserPassword());
        } else {
            throw new UsernameNotFoundException("User with username: " + username + " not found");
        }

        return builder.build();
    }
}
