package com.amex.itag.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.amex.itag.model.ITagUser;

public interface ITagRepository extends JpaRepository<ITagUser, Integer> {

	@Query("select i.dataLayer from ITagUser i where lower(i.reqParamKeyVal) = ?1")
	public String find(String reqParamKeyVal);
	
	@Query("select i from ITagUser i where lower(i.reqParamKeyVal) = ?1")
	public ITagUser findOne(String reqParamKeyVal);
	
	@Modifying
	@Query("UPDATE ITagUser i SET i.dataLayer=?1 WHERE lower(i.reqParamKeyVal) = ?2")
	public void update(String dataLayer, String reqParamKeyVal);
	
	@Query("select i from ITagUser i where projectTitle = ?1")
	public List<ITagUser> findAllDataLayer(String projectTitle);
	
	@Query("select i.dataLayer from ITagUser i where i.id = ?1")
	public String findDLById(int id);
	
	@Query("select i from ITagUser i where projectId = ?1")
	public List<ITagUser> findDataLayers(Integer projectId);
	
	}