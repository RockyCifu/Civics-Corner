package com.rockycifu.server.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rockycifu.server.models.Address;

@Repository
public interface AddressRepository extends CrudRepository<Address, Long> {

}
