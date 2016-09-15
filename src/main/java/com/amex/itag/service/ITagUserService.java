package com.amex.itag.service;

import java.util.List;

import com.amex.itag.model.ITagUser;

public interface ITagUserService {

	public ITagUser create(ITagUser iTagUser);

	public ITagUser delete(int id);

	public List<ITagUser> findAll();

	public ITagUser update(ITagUser iTagUser);

	public ITagUser findById(int id);

	public List<ITagUser> findByReqParamKey1(String reqParamKey1);

	public ITagUser findByReqParamKey1AndReqParamVal1(String reqParamKey1, String reqParamVal1);

	public ITagUser findByReqParamKey2AndReqParamVal2(String reqParamKey2, String reqParamVal2);

	public ITagUser findByReqParamKey3AndReqParamVal3(String reqParamKey3, String reqParamVal3);

	public ITagUser find(String reqParamKey1, String reqParamVal1, String reqParamKey2, String reqParamVal2);

	public ITagUser find(String reqParamKey1, String reqParamVal1, String reqParamKey2, String reqParamVal2,
			String reqParamKey3, String reqParamVal3);
	
	public ITagUser find(String reqParamKey1, String reqParamVal1);

}
