package com.amex.itag.service;

import java.util.List;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.amex.itag.model.ITagUser;
import com.amex.itag.model.Projects;
import com.amex.itag.repository.ITagProjectsRepository;
import com.amex.itag.repository.ITagRepository;

@Service
public class ITagUserServiceImpl implements ITagUserService{
	
	final static Logger logger = Logger.getLogger(ITagUserServiceImpl.class);
	
	@Resource
	private ITagRepository iTagRepository;
	
	@Resource
	ITagProjectsRepository iTagProjectRepository;
	
	String dataLayer;

	@Override
	@Transactional
	public ITagUser create(ITagUser iTagUser) {
		if(logger.isDebugEnabled()){
			logger.debug("create is executed!");
		}
		ITagUser iTagCreateUser = iTagUser;
		return iTagRepository.save(iTagCreateUser);
	}
	
	@Override
	@Transactional
	public ITagUser findById(int id) {
		return iTagRepository.findOne(id);
	}

	@Override
	@Transactional
	public ITagUser delete(int id){
		ITagUser deletedUser= iTagRepository.findOne(id);
		
		iTagRepository.delete(deletedUser);
		return deletedUser;
	}

	@Override
	@Transactional
	public List<ITagUser> findAll() {
		return iTagRepository.findAll();
	}

	@Override
	@Transactional
	public void update(String dataLayer, String reqParamKeyVal){
		ITagUser updatedUser = iTagRepository.findOne(reqParamKeyVal);
		updatedUser.setDataLayer(dataLayer);
	}

	/*@Override
	public List<ITagUser> findByReqParamKey1(String reqParamKey1) {
		List<ITagUser> iTagUser = iTagRepository.findByReqParamKey1(reqParamKey1);
		return iTagUser;
	}

	@Override
	public ITagUser findByReqParamKey1AndReqParamVal1(String reqParamKey1, String reqParamVal1) {
		ITagUser iTagUser = iTagRepository.findByReqParamKey1AndReqParamVal1(reqParamKey1, reqParamVal1);
		return iTagUser;
	}

	@Override
	public ITagUser findByReqParamKey2AndReqParamVal2(String reqParamKey2, String reqParamVal2) {
		ITagUser iTagUser = iTagRepository.findByReqParamKey2AndReqParamVal2(reqParamKey2, reqParamVal2);
		return iTagUser;
	}

	@Override
	public ITagUser findByReqParamKey3AndReqParamVal3(String reqParamKey3, String reqParamVal3) {
		ITagUser iTagUser = iTagRepository.findByReqParamKey3AndReqParamVal3(reqParamKey3, reqParamVal3);
		return iTagUser;
	}

	@Override
	public String find(String reqParamKey1, String reqParamVal1, String reqParamKey2, String reqParamVal2) {
		dataLayer = iTagRepository.find(reqParamKey1, reqParamVal1, reqParamKey2, reqParamVal2);
		return dataLayer;
	}

	@Override
	public String find(String reqParamKey1, String reqParamVal1, String reqParamKey2, String reqParamVal2,
			String reqParamKey3, String reqParamVal3) {
		dataLayer = iTagRepository.find(reqParamKey1, reqParamVal1, reqParamKey2, reqParamVal2, reqParamKey3, reqParamVal3);
		return dataLayer;
	}*/
	
	/*@Override
	public String find(String reqParamKey1, String reqParamVal1) {
		dataLayer = iTagRepository.find(reqParamKey1, reqParamVal1);
		return dataLayer;
	}*/

	@Override
	public String find(String reqParamKeyVal) {
		dataLayer = iTagRepository.find(reqParamKeyVal);
		return dataLayer;
	}

	@Override
	public String findProject(String projectTitle) {
		String projectName = iTagProjectRepository.find(projectTitle);
		return projectName;
	}

	@Override
	@Transactional
	public Projects saveProject(Projects projects) {
		if(logger.isDebugEnabled()){
			logger.debug("create is executed!");
		}
		Projects project = projects;
		return iTagProjectRepository.save(projects);
	}
	
	@Override
	@Transactional
	public List<Projects> findAllProjects() {
		return iTagProjectRepository.findAll();
	}

	@Override
	public List<ITagUser> findAllDataLayer(String projectName) {
		return iTagRepository.findAllDataLayer(projectName);
	}

}
