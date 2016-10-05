package com.amex.itag.service;

import java.util.List;

import com.amex.itag.model.ITagUser;
import com.amex.itag.model.Projects;

public interface ITagUserService {

	public ITagUser create(ITagUser iTagUser);

	public ITagUser delete(int id);

	public List<ITagUser> findAll();

	public ITagUser findById(int id);

	public String getDLById(int id);

	public String find(String reqParamKeyVal);

	public void update(String dataLayer, String reqParamKeyVal);

	public String findProject(String projectTitle);

	public Projects saveProject(Projects project);

	public List<Projects> findAllProjects();

	public List<ITagUser> findAllDataLayer(String projectName);

	public List<Projects> findProjectByTitle(String projectName);

	public List<ITagUser> findDataLayers(Integer projectId);

	public Projects findProjectById(Integer findProjectById);

    public void update(String dataLayer,String dataLayerName, String reqParamKeyVal,int id);
    
    public List<ITagUser> findDLBySpecficRequestParam(Integer projectId, Integer id); 
}
