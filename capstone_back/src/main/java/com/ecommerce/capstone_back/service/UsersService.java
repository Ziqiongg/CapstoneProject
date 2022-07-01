package com.ecommerce.capstone_back.service;

import com.ecommerce.capstone_back.model.Users;
import com.ecommerce.capstone_back.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersService {

    public final UsersRepository usersRepository;

    @Autowired
    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
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
}
