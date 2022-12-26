package com.rockycifu.server.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rockycifu.server.models.Test;

@Repository
public interface TestRepository extends CrudRepository<Test, Long> {

}
