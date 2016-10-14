package com.amex.itag.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.amex.itag.model.Projects;


public interface ITagProjectsRepository extends JpaRepository<Projects, Integer> {

	@Query("select i.projectTitle from Projects i where i.projectTitle = ?1")
	public String find(String projectTitle);
	
    public List<Projects> findByProjectTitle(String projectTitle);

    public Projects findByProjectId(Integer findByProjectId);
    
    @Modifying
    @Transactional
    @Query("delete from Projects p where p.projectId = ?1")
    public void deleteProjectByProjectId(Integer projectId);

}
