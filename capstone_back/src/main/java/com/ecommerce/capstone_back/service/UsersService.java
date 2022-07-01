package com.ecommerce.capstone_back.service;

import com.ecommerce.capstone_back.model.Users;
import com.ecommerce.capstone_back.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersService {

    private BCryptPasswordEncoder passwordEncoder;
    public final UsersRepository usersRepository;

    @Autowired
    public UsersService(UsersRepository usersRepository, BCryptPasswordEncoder passwordEncoder) {
        this.usersRepository = usersRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Users getUsersById(Long id) throws Exception {
        return usersRepository.findById(id).orElseThrow(
                () -> new Exception(
                        "User with id " + id + " not found. Please try again."));
    }

    public void updateUsers(Users users) {
        usersRepository.save(users);
    }

    public void deleteUsers(Users users) {
        usersRepository.delete(users);
    }

    public Optional<Users> findByNameAndPassword(String userFirstName, String password){
        return usersRepository.findByNameAndPassword(userFirstName, password);
    }
    public List<Users> getAllUsers(){
        return usersRepository.findAll();
    }

    public void addUser(Users newUser) throws DataIntegrityViolationException {
//        Encode the password the new user has input
        String encodedPassword = passwordEncoder.encode(newUser.getUserPassword());
//        Set the password in the database to be this encoded password
        newUser.setUserPassword(encodedPassword);
        boolean exists = this.getAllUsers().contains(newUser);
        if(exists) {
            throw new DataIntegrityViolationException("User already exists");
        }
        usersRepository.save(newUser);
    }
}
