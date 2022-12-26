package com.rockycifu.server.services;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.rockycifu.server.models.LoginUser;
import com.rockycifu.server.models.User;
import com.rockycifu.server.repositories.UserRepository;

@Service
public class UserService {

	private final UserRepository repository;

	public UserService(UserRepository repository) {
		this.repository = repository;
	}

	public User findOne(Long id) {
		return repository.findById(id).orElse(null);
	}
	
	public User findOneByEmail(String email) {
		return repository.findByEmail(email).orElse(null);
	}

	public User register(User user, BindingResult result) {
		if (result.hasErrors()) {
			return null;
		}

		if (repository.findByEmail(user.getEmail()).isPresent()) {
			result.rejectValue("email", "Matches", "Email already exists!");
			return null;
		}

		if (!user.getPassword().equals(user.getConfirm())) {
			result.rejectValue("password", "Matches", "Passwords do not match!");
			return null;
		}

		user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
		return repository.save(user);
	}

	public User login(LoginUser user, BindingResult result) {
		if (result.hasErrors()) {
			return null;
		}

		User existingUser = repository.findByEmail(user.getEmail()).orElse(null);

		if (existingUser == null) {
			result.rejectValue("email", "Matches", "Invalid Email!");
			return null;
		}

		if (!BCrypt.checkpw(user.getPassword(), existingUser.getPassword())) {
			result.rejectValue("password", "Matches", "Invalid Password!");
			return null;
		}

		return existingUser;
	}

}
