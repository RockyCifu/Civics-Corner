package com.rockycifu.server.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rockycifu.server.models.Question;

@Repository
public interface QuestionRepository extends CrudRepository<Question, Long> {

}
