package com.amex.itag.controller;

import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import com.amex.itag.model.ITagUser;
import com.amex.itag.model.Projects;
import com.amex.itag.service.ITagUserService;
import com.amex.itag.util.DuplicateParameters;

@RestController
public class ITagController {

	final static Logger logger = Logger.getLogger(ITagController.class);

	public final static String EQUALS = new String("=");

	public final static String AMP = new String("&");

	@Autowired
	private ITagUserService iTagUserService;

	@RequestMapping(value = "/saveITagData", method = RequestMethod.POST)
	public @ResponseBody void saveITagData(@RequestBody ITagUser iTagUser) {
		if (logger.isDebugEnabled()) {
			logger.debug("saveITagData is executed!");
		}
		String keyValParam = sortKeyVal(iTagUser.getReqParamKeyVal()).toLowerCase();
		iTagUser.setReqParamKeyVal(keyValParam);
		if (!(keyValParam.equals(""))) {
			if (!(isDataExist(iTagUser))) {
				iTagUserService.create(iTagUser);
			} else {
				throw new DuplicateParameters();
			}
		} else {
			iTagUserService.create(iTagUser);
		}

	}

	@RequestMapping(value = "/getAllDataLayer", method = RequestMethod.GET, produces = "application/json")
	public List<ITagUser> getITagData() {
		return iTagUserService.findAll();
	}

	@RequestMapping(value = "/getDataLayer", method = RequestMethod.GET, produces = "application/json")
	public String getITagDataLayer(WebRequest wr) {
		if (logger.isDebugEnabled()) {
			logger.debug("getITagFirstKeyValData is started!");
		}
		String dataLayer;
		String reqParamKey1;
		String reqParamVal1;
		String reqParamKey2;
		String reqParamVal2;
		String reqParamKey3;
		String reqParamVal3;
		String reqParamKeyVal;
		LinkedHashMap<String, String[]> params = (LinkedHashMap<String, String[]>) wr.getParameterMap();
		if (params.size() == 1) {
			for (Map.Entry<String, String[]> param : params.entrySet()) {
				reqParamKey1 = param.getKey().toLowerCase();
				reqParamVal1 = param.getValue()[0].toLowerCase();
				reqParamKeyVal = reqParamKey1 + "=" + reqParamVal1;
				dataLayer = iTagUserService.find(reqParamKeyVal);
				return dataLayer;
			}
		} else if (params.size() == 2) {
			reqParamKey1 = ((String) params.keySet().toArray()[0]).toLowerCase();
			reqParamVal1 = ((String[]) params.values().toArray()[0])[0].toLowerCase();
			reqParamKey2 = ((String) params.keySet().toArray()[1]).toLowerCase();
			reqParamVal2 = ((String[]) params.values().toArray()[1])[0].toLowerCase();
			reqParamKeyVal = sortKeyVal(
					reqParamKey1 + EQUALS + reqParamVal1 + AMP + reqParamKey2 + EQUALS + reqParamVal2);
			dataLayer = iTagUserService.find(reqParamKeyVal);
			return dataLayer;
		} else if (params.size() == 3) {
			reqParamKey1 = ((String) params.keySet().toArray()[0]).toLowerCase();
			reqParamVal1 = ((String[]) params.values().toArray()[0])[0].toLowerCase();
			reqParamKey2 = ((String) params.keySet().toArray()[1]).toLowerCase();
			reqParamVal2 = ((String[]) params.values().toArray()[1])[0].toLowerCase();
			reqParamKey3 = ((String) params.keySet().toArray()[2]).toLowerCase();
			reqParamVal3 = ((String[]) params.values().toArray()[2])[0].toLowerCase();
			reqParamKeyVal = sortKeyVal(reqParamKey1 + EQUALS + reqParamVal1 + AMP + reqParamKey2 + EQUALS
					+ reqParamVal2 + AMP + reqParamKey3 + EQUALS + reqParamVal3);
			dataLayer = iTagUserService.find(reqParamKeyVal);
			return dataLayer;
		}
		return null;
	}

	// Update the Data Layer

	/*@RequestMapping(value = "/updateDataLayer", method = RequestMethod.POST)
	public @ResponseBody String updateDataLayer(WebRequest wr, @RequestBody String reqBody) {
		if (logger.isDebugEnabled()) {
			logger.debug("getITagFirstKeyValData is started!");
		}
		String message = null;
		String dataLayer;
		String reqParamKey1;
		String reqParamVal1;
		String reqParamKey2;
		String reqParamVal2;
		String reqParamKey3;
		String reqParamVal3;
		String reqParamKeyVal;
		LinkedHashMap<String, String[]> params = (LinkedHashMap<String, String[]>) wr.getParameterMap();
		if (params.size() == 1) {
			for (Map.Entry<String, String[]> param : params.entrySet()) {
				reqParamKey1 = param.getKey().toLowerCase();
				reqParamVal1 = param.getValue()[0].toLowerCase();
				reqParamKeyVal = reqParamKey1 + EQUALS + reqParamVal1;
				dataLayer = iTagUserService.find(reqParamKeyVal);
				if (null != dataLayer) {
					iTagUserService.update(reqBody.toString(), reqParamKeyVal);
					message = "success";
				} else {
					message = "Data Not found";
				}
			}
		} else if (params.size() == 2) {
			reqParamKey1 = ((String) params.keySet().toArray()[0]).toLowerCase();
			reqParamVal1 = ((String[]) params.values().toArray()[0])[0].toLowerCase();
			reqParamKey2 = ((String) params.keySet().toArray()[1]).toLowerCase();
			reqParamVal2 = ((String[]) params.values().toArray()[1])[0].toLowerCase();
			reqParamKeyVal = sortKeyVal(
					reqParamKey1 + EQUALS + reqParamVal1 + AMP + reqParamKey2 + EQUALS + reqParamVal2);
			dataLayer = iTagUserService.find(reqParamKeyVal);
			if (null != dataLayer) {
				iTagUserService.update(reqBody, reqParamKeyVal);
				message = "success";
			} else {
				message = "Data Not found";
			}
		} else if (params.size() == 3) {
			reqParamKey1 = ((String) params.keySet().toArray()[0]).toLowerCase();
			reqParamVal1 = ((String[]) params.values().toArray()[0])[0].toLowerCase();
			reqParamKey2 = ((String) params.keySet().toArray()[1]).toLowerCase();
			reqParamVal2 = ((String[]) params.values().toArray()[1])[0].toLowerCase();
			reqParamKey3 = ((String) params.keySet().toArray()[2]).toLowerCase();
			reqParamVal3 = ((String[]) params.values().toArray()[2])[0].toLowerCase();
			reqParamKeyVal = sortKeyVal(reqParamKey1 + EQUALS + reqParamVal1 + AMP + reqParamKey2 + EQUALS
					+ reqParamVal2 + AMP + reqParamKey3 + EQUALS + reqParamVal3);
			dataLayer = iTagUserService.find(reqParamKeyVal);
			if (null != dataLayer) {
				iTagUserService.update(reqBody, reqParamKeyVal);
				message = "success";
			} else {
				message = "Data Not found";
			}
		}
		return message;
	}*/

	// Project Controller -start

	@RequestMapping(value = "/saveITagProject", method = RequestMethod.POST)
	public @ResponseBody Projects saveITagProject(@RequestBody Projects iTagProject) {
		if (logger.isDebugEnabled()) {
			logger.debug("saveITagData is executed!");
		}
		String projectTitle = iTagProject.getProjectTitle();
		if (null != projectTitle) {
			Projects targetProject= iTagUserService.saveProject(iTagProject);
			return targetProject;
		} /*
			 * else{ return new DuplicateParameters(); }
			 */
		return null;

	}

	@RequestMapping(value = "/getAllProjects", method = RequestMethod.GET, produces = "application/json")
	public List<Projects> getITagProjects() {
		return iTagUserService.findAllProjects();
	}

	@RequestMapping(value = "/getProjectDLs/{projectId}", method = RequestMethod.GET, produces = "application/json")
	public List<ITagUser> getProjectDLs(@PathVariable("projectId") Integer projectId) {
		if (null != projectId) {
			return iTagUserService.findDataLayers(projectId);
		} else {
			return null;
		}
	}

	@RequestMapping(value = "/deleteDL/{id}", method = RequestMethod.DELETE, produces = "application/json")
	public ITagUser delete(@PathVariable("id") Integer id) {
		if (null != id) {
			return iTagUserService.delete(id);
		} else {
			return null;
		}
	}

	@RequestMapping(value = "/findById/{id}", method = RequestMethod.GET, produces = "application/json")
	public ITagUser findById(@PathVariable("id") Integer id) {
		if (null != id) {
			return iTagUserService.findById(id);
		} else {
			return null;
		}
	}

	@RequestMapping(value = "/getDLById/{id}", method = RequestMethod.GET, produces = "application/json")
	public String getDLById(@PathVariable("id") Integer id) {
		if (null != id) {
			return iTagUserService.getDLById(id);
		} else {
			return null;
		}
	}

	@RequestMapping(value = "/getProjectByTitle/{projectTitle}", method = RequestMethod.GET, produces = "application/json")
	public List<Projects> getProjByTitle(@PathVariable("projectTitle") String projectTitle) {
		if (null != projectTitle) {
			return iTagUserService.findProjectByTitle(projectTitle);
		} else {
			return null;
		}
	}

	@RequestMapping(value = "/getProjectById/{projectId}", method = RequestMethod.GET, produces = "application/json")
	public Projects getProjById(@PathVariable("projectId") Integer projectId) {
		if (null != projectId) {
			return iTagUserService.findProjectById(projectId);
		} else {
			return null;
		}
	}
	
    @RequestMapping(value = "/updateDataLayer", method = RequestMethod.POST)
    public @ResponseBody void updateDataLayer(@RequestBody ITagUser iTagUser) {
          if(logger.isDebugEnabled()){
                 logger.debug("getITagFirstKeyValData is started!");
          }
          String message = null;
          if (null!=iTagUser.getProjectId()) {
                 iTagUserService.update(iTagUser.getDataLayer(), iTagUser.getDataLayerName(), iTagUser.getReqParamKeyVal(), iTagUser.getId());
          }
          else
          {
                 throw new DuplicateParameters();

          }
    }
    
	// This Controller for get specfic project specific datalayers by
	// ProjectTitle.
	@RequestMapping(value = "/getProjectSpecficDLs/{projectId}/{id}", method = RequestMethod.GET, produces = "application/json")
	public List<ITagUser> getProjSpecficDLs(@PathVariable("projectId") Integer projectId,
			@PathVariable("id") Integer id) {
		if (null != projectId & null != id) {
			return iTagUserService.findDLBySpecficRequestParam(projectId, id);
		} else {
			return null;
		}
	}

	@RequestMapping(value = "/deleteAllProjects", method = RequestMethod.POST)
	public  @ResponseBody String deleteAll(WebRequest wr) {
			iTagUserService.deleteAll();
			return "Success";
	}
	
	@RequestMapping(value = "/deleteProject/{projectId}", method = RequestMethod.DELETE, produces = "application/json")
	public void deleteProject(@PathVariable("projectId") Integer projectId) {
		if (null != projectId) {
			iTagUserService.deleteProject(projectId);
		}
	}
	
	public boolean isDataExist(ITagUser iTagUser) {
		String reqParamKeyVal = iTagUser.getReqParamKeyVal();
		String dataLayer = iTagUserService.find(reqParamKeyVal);
		if (null != dataLayer) {
			return true;
		}
		return false;
	}

	public String sortKeyVal(String ketValParam) {
		String[] parts = ketValParam.split(AMP);
		Arrays.sort(parts);
		String sortKeyVal = "";
		for (int i = 0; i < parts.length; i++) {
			if (i == 0) {
				sortKeyVal = sortKeyVal + parts[i];
			} else {
				sortKeyVal = sortKeyVal + AMP + parts[i];
			}
		}
		return sortKeyVal;
	}

	public boolean isProjectExist(String projectTitle) {
		String projectName = iTagUserService.findProject(projectTitle);
		if (null != projectName) {
			return true;
		}
		return false;
	}

}
