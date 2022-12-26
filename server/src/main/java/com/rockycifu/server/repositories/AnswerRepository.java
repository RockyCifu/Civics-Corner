package com.rockycifu.server.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rockycifu.server.models.Answer;

@Repository
public interface AnswerRepository extends CrudRepository<Answer, Long> {

}
