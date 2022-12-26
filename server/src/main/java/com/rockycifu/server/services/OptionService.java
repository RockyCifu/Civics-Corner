package com.rockycifu.server.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.rockycifu.server.models.Option;
import com.rockycifu.server.repositories.OptionRepository;

@Service
public class OptionService {

	private final OptionRepository repository;

	public OptionService(OptionRepository repository) {
		this.repository = repository;
	}
	
	public List<Option> findAll() {
		return (List<Option>) repository.findAll();
	}

	public Option findOne(Long id) {
		Optional<Option> Option = repository.findById(id);
		return Option.orElse(null);
	}

	public Option persistOne(Option Option) {
		return repository.save(Option);
	}

	public Option updateOne(Option Option) {
		return repository.save(Option);
	}

	public void deleteOne(Long id) {
		repository.deleteById(id);
	}
	
}
