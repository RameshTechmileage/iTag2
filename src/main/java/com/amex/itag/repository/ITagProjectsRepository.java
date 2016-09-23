package com.amex.itag.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.amex.itag.model.Projects;


public interface ITagProjectsRepository extends JpaRepository<Projects, Integer> {

	@Query("select i.projectTitle from Projects i where i.projectTitle = ?1")
	public String find(String projectTitle);
}
