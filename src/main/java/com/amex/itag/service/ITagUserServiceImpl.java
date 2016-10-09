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
public class ITagUserServiceImpl implements ITagUserService {

	final static Logger logger = Logger.getLogger(ITagUserServiceImpl.class);

	@Resource
	private ITagRepository iTagRepository;

	@Resource
	ITagProjectsRepository iTagProjectRepository;

	String dataLayer;

	@Override
	@Transactional
	public ITagUser create(ITagUser iTagUser) {
		if (logger.isDebugEnabled()) {
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
	public ITagUser delete(int id) {
		ITagUser dataLayer = iTagRepository.findOne(id);

		iTagRepository.delete(dataLayer);
		return dataLayer;
	}

	@Override
	@Transactional
	public List<ITagUser> findAll() {
		return iTagRepository.findAll();
	}

	@Override
	@Transactional
	public void update(String dataLayer, String reqParamKeyVal) {
		ITagUser updatedUser = iTagRepository.findOne(reqParamKeyVal);
		updatedUser.setDataLayer(dataLayer);
	}

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
		if (logger.isDebugEnabled()) {
			logger.debug("create is executed!");
		}
		Projects savedProj = iTagProjectRepository.save(projects);
		logger.debug(savedProj.toString());
		return savedProj;
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

	@Override
	public List<Projects> findProjectByTitle(String projectName) {
		return iTagProjectRepository.findByProjectTitle(projectName);
	}

	@Override
	public String getDLById(int id) {
		return iTagRepository.findDLById(id);
	}

	@Override
	public List<ITagUser> findDataLayers(Integer projectId) {
		return iTagRepository.findDataLayers(projectId);
	}

	@Override
	public Projects findProjectById(Integer projectId) {
		return iTagProjectRepository.findByProjectId(projectId);
	}
	
	@Override
    @Transactional
    public void update(String dataLayer,String dataLayerName, String reqParamKeyVal,int id){
          ITagUser updatedUser = iTagRepository.findOne(id);
          updatedUser.setDataLayer(dataLayer);
          updatedUser.setReqParamKeyVal(reqParamKeyVal);
          updatedUser.setDataLayerName(dataLayerName);
    }

	 @Override
     public List<ITagUser> findDLBySpecficRequestParam(Integer projectId, Integer id) {
           return iTagRepository.findDLBySpecficRequestParam(projectId,id);
	 }

	@Override
	public void deleteAll() {
		iTagRepository.deleteAll();
		iTagProjectRepository.deleteAll();
	}

}
