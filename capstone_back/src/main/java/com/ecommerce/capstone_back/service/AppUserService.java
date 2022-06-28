package com.ecommerce.capstone_back.service;

import com.ecommerce.capstone_back.model.AppUser;
import com.ecommerce.capstone_back.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppUserService {

    public final AppUserRepository appUserRepository;

    @Autowired
    public AppUserService(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    public AppUser getAppUserById(Long id) throws Exception {
        return appUserRepository.findById(id).orElseThrow(
                () -> new Exception(
                        "User with id " + id + " not found. Please try again."));
    }

    public void updateAppUser(AppUser appUser) {
        appUserRepository.save(appUser);
    }

    public void deleteAppUser(AppUser appUser) {
        appUserRepository.delete(appUser);
    }
}
