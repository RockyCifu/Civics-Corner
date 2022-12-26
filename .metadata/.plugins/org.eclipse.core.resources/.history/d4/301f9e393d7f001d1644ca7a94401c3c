package com.rockycifu.server.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.rockycifu.server.models.Question;
import com.rockycifu.server.repositories.QuestionRepository;

@Service
public class QuestionService {

	private final QuestionRepository repository;

	public QuestionService(QuestionRepository repository) {
		this.repository = repository;
	}
	
	public List<Question> findAll() {
		return (List<Question>) repository.findAll();
	}

	public Question findOne(Long id) {
		Optional<Question> question = repository.findById(id);
		return question.orElse(null);
	}

	public Question persistOne(Question question) {
		return repository.save(question);
	}

	public Question updateOne(Question question) {
		return repository.save(question);
	}

	public void deleteOne(Long id) {
		repository.deleteById(id);
	}
}
