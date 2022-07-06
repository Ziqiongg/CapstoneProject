package com.ecommerce.capstone_back.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.security.Key;
import java.util.Date;

@Component
public class JWTService {

    static final long EXPIRATIONTIME = 86400000;

    static final String PREFIX = "Bearer";

    static  final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

//    creates the JWT token
    public String getToken(String username) {
        String token = Jwts.builder()
                .setSubject(username)
//                token expires 24 hours after it's generated (login)
                .setExpiration(new Date(System.currentTimeMillis() +  EXPIRATIONTIME))
                .signWith(key)
                .compact();
        return token;
    }

//    Takes token received in the request Header and gets the associated user
    public String getAuthUser(HttpServletRequest request){
        String token = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (token != null) {
            String user = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token.replace(PREFIX, ""))
//                    .parseClaimsJws("Authorization: " + PREFIX + token)
                    .getBody()
                    .getSubject();
            if (user != null)
                return user;
        }
        return null;
    }
}
