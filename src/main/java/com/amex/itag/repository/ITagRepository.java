package com.amex.itag.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amex.itag.model.ITagUser;

public interface ITagRepository extends JpaRepository<ITagUser, Integer> {

}