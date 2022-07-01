package com.ecommerce.capstone_back.security;

import java.io.Serializable;

public interface UserDetails extends Serializable {

    String getUsername();

    String getPassword();
}
