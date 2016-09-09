package com.amex.itag.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.amex.itag.model.ITagUser;
import com.amex.itag.repository.ITagRepository;

@Service
public class ITagUserServiceImpl implements ITagUserService{
	@Resource
	private ITagRepository iTagRepository;

	@Override
	@Transactional
	public ITagUser create(ITagUser iTagUser) {
		ITagUser iTagCreateUser = iTagUser;
		return iTagRepository.save(iTagCreateUser);
	}
	
	@Override
	@Transactional
	public ITagUser findById(int id) {
		return iTagRepository.findOne(id);
	}

	@Override
	@Transactional//(rollbackFor=ShopNotFound.class)
	public ITagUser delete(int id){
		ITagUser deletedUser= iTagRepository.findOne(id);
		
		/*if (deletedUser == null)
			throw new ShopNotFound();*/
		
		iTagRepository.delete(deletedUser);
		return deletedUser;
	}

	@Override
	@Transactional
	public List<ITagUser> findAll() {
		return iTagRepository.findAll();
	}

	@Override
	@Transactional//(rollbackFor=ShopNotFound.class)
	public ITagUser update(ITagUser iTagUser){// throws ShopNotFound {
		ITagUser updatedUser = iTagRepository.findOne(iTagUser.getId());
		
		/*if (updatedUser == null)
			throw new ShopNotFound();*/
		
		/*updatedUser.setCreatedBy(iTagUser.getCreatedBy());
		updatedUser.setUserInfoJson(iTagUser.getUserInfoJson());*/
		updatedUser.setDataLayer(iTagUser.getDataLayer());
		updatedUser.setReqParamKey1(iTagUser.getReqParamKey1());
		return updatedUser;
	}
}
