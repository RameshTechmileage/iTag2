package com.amex.itag.service;

import java.util.List;

import com.amex.itag.model.ITagUser;

public interface ITagUserService {

	public ITagUser create(ITagUser iTagUser);
	public ITagUser delete(int id);
	public List<ITagUser> findAll();
	public ITagUser update(ITagUser iTagUser);
	public ITagUser findById(int id);

}
