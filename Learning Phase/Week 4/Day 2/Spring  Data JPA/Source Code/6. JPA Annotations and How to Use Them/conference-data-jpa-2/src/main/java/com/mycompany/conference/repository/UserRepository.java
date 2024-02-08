package com.mycompany.conference.repository;

import com.mycompany.conference.model.User;

public interface UserRepository {
    User save(User user);
}
