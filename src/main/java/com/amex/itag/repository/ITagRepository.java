package com.amex.itag.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

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
	
    @Modifying(clearAutomatically = true)
    @Query("UPDATE ITagUser i SET i.dataLayer=?1, i.dataLayerName=?2, i.reqParamKeyVal=?3 WHERE lower(i.id) = ?4")
    public void update(String dataLayer,String dataLayerName, String reqParamKeyVal,int id);
    
    @Query("select i from ITagUser i where projectId = ?1 AND i.id = ?2 "  )
    public List<ITagUser> findDLBySpecficRequestParam(int projectId,int id);
    
    @Modifying
    @Transactional
    @Query("delete from ITagUser i where i.projectId = ?1")
    public void deleteDLByProjectId(Integer projectId);
    
}