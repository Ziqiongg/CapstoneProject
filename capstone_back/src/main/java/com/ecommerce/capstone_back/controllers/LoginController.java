package com.ecommerce.capstone_back.controllers;

import com.ecommerce.capstone_back.dto.UsersFirstNamePasswordDTO;
import com.ecommerce.capstone_back.service.JWTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @Autowired
    private JWTService jwtService;

    @Autowired
    AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> getToken(@RequestBody UsersFirstNamePasswordDTO credentials){
        UsernamePasswordAuthenticationToken creds = new UsernamePasswordAuthenticationToken(
                credentials.getUsername(),
                credentials.getPassword());
        Authentication auth = authenticationManager.authenticate(creds);
//      Generates the token
        String jwt = jwtService.getToken(auth.getName());
//      Build response with token in header
        return ResponseEntity.ok()
//                to use this method in postman: login in the browser then go into Postman --> Post request with no Auth
//                in header set Authorization value to the token in the header found in the browser (Bearer ...)
                .header(HttpHeaders.AUTHORIZATION, "Bearer" + jwt)
                .header(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, "Authorization")
                .build();

    }
}
