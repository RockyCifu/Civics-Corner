package com.rockycifu.server.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rockycifu.server.models.Option;

@Repository
public interface OptionRepository extends CrudRepository<Option, Long> {

}
