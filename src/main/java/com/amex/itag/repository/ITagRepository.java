package com.amex.itag.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.amex.itag.model.ITagUser;

public interface ITagRepository extends JpaRepository<ITagUser, Integer> {

	// public ITagUser findOne(int id);
	public List<ITagUser> findByReqParamKey1(String reqParamKey1);

	public ITagUser findByReqParamKey1AndReqParamVal1(String reqParamKey1, String reqParamVal1);

	public ITagUser findByReqParamKey2AndReqParamVal2(String reqParamKey1, String reqParamVal1);

	public ITagUser findByReqParamKey3AndReqParamVal3(String reqParamKey1, String reqParamVal1);

	@Query("select i.dataLayer from ITagUser i where i.reqParamKey1 = ?1 AND i.reqParamVal1 = ?2 AND i.reqParamKey2=?3 AND i.reqParamVal2=?4 AND i.reqParamKey3 = null AND i.reqParamVal3 = null")
	public String find(String reqParamKey1, String reqParamVal1, String reqParamKey2, String reqParamVal2);

	@Query("select i.dataLayer from ITagUser i where i.reqParamKey1 = ?1 AND i.reqParamVal1 = ?2 AND i.reqParamKey2=?3 AND i.reqParamVal2=?4 AND i.reqParamKey3=?5 AND i.reqParamVal3=?6")
	public String find(String reqParamKey1, String reqParamVal1, String reqParamKey2, String reqParamVal2,
			String reqParamKey3, String reqParamVal3);
	
	@Query("select i.dataLayer from ITagUser i where i.reqParamKey1 = ?1 AND i.reqParamVal1 = ?2 AND i.reqParamKey2 = null AND i.reqParamVal2 = null AND i.reqParamKey3 = null AND i.reqParamVal3 = null")
	public String find(String reqParamKey1, String reqParamVal1);

	}