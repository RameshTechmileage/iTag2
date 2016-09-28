package com.amex.itag.controller;

import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
import com.amex.itag.service.ITagUserServiceImpl;
import com.amex.itag.util.DuplicateParameters;

@RestController
public class ITagController {
	
	final static Logger logger = Logger.getLogger(ITagController.class);
	
	public final static String EQUALS = new String("=");
	
	public final static String AMP = new String("&");

	@Autowired
	private ITagUserService iTagUserService;

	/*@RequestMapping(value = "/saveITagData", method = RequestMethod.POST)
	public @ResponseBody void saveITagData(@RequestBody ITagUser iTagUser) {
		if(logger.isDebugEnabled()){
			logger.debug("saveITagData is executed!");
		}
		if(!(isDataExist(iTagUser))){
			iTagUserService.create(iTagUser);
		}else{
			throw new DuplicateParameters();
		}
		
	}
*/
	@RequestMapping(value = "/saveITagData", method = RequestMethod.POST)
	public @ResponseBody void saveITagData(@RequestBody ITagUser iTagUser) {
		if(logger.isDebugEnabled()){
			logger.debug("saveITagData is executed!");
		}
		String keyValParam = sortKeyVal(iTagUser.getReqParamKeyVal()).toLowerCase();
		iTagUser.setReqParamKeyVal(keyValParam);
		if(!(keyValParam.equals(""))){
		if(!(isDataExist(iTagUser))){
			iTagUserService.create(iTagUser);
		}else{
			throw new DuplicateParameters();
		}
	}else{
		iTagUserService.create(iTagUser);
	}
		
	}

	@RequestMapping(value = "/getAllDataLayer", method = RequestMethod.GET, produces = "application/json")
	public List<ITagUser> getITagData() {
		return iTagUserService.findAll();
	}
	@RequestMapping(value = "/getDataLayer", method = RequestMethod.GET, produces = "application/json")
	public String getITagDataLayer( WebRequest wr) {
		if(logger.isDebugEnabled()){
			logger.debug("getITagFirstKeyValData is started!");
		}
		//ITagUser itagUser = new ITagUser();
		String dataLayer;
		String reqParamKey1;
		String reqParamVal1;
		String reqParamKey2;
		String reqParamVal2;
		String reqParamKey3;
		String reqParamVal3;
		String reqParamKeyVal;
		LinkedHashMap<String, String[]> params=(LinkedHashMap<String, String[]>) wr.getParameterMap();
		if(params.size() == 1){
			for(Map.Entry<String, String[]> param: params.entrySet()){
				reqParamKey1 = param.getKey().toLowerCase();
				reqParamVal1 = param.getValue()[0].toLowerCase();
				reqParamKeyVal=reqParamKey1+"="+reqParamVal1;
				//itagUser = iTagUserService.findByReqParamKey1AndReqParamVal1(reqParamKey1, reqParamVal1[0]);
				//if(null != itagUser){
				dataLayer = iTagUserService.find(reqParamKeyVal);
				//}
				return dataLayer;
			}
		}else if(params.size() == 2){
				reqParamKey1 =  ((String) params.keySet().toArray()[0]).toLowerCase();
				//reqParamVal1 = ((String[]) params.values().toArray()[0]).toLowerCase();
				reqParamVal1 = ((String[]) params.values().toArray()[0])[0].toLowerCase();
				reqParamKey2 = ((String) params.keySet().toArray()[1]).toLowerCase();
				reqParamVal2 = ((String[]) params.values().toArray()[1])[0].toLowerCase();
				reqParamKeyVal=sortKeyVal(reqParamKey1+EQUALS+reqParamVal1+AMP+reqParamKey2+EQUALS+reqParamVal2);
				dataLayer = iTagUserService.find(reqParamKeyVal);
				return dataLayer;//itagUser;
		}else if(params.size() == 3){
			reqParamKey1 =  ((String) params.keySet().toArray()[0]).toLowerCase();
			reqParamVal1 = ((String[]) params.values().toArray()[0])[0].toLowerCase();
			reqParamKey2 = ((String) params.keySet().toArray()[1]).toLowerCase();
			reqParamVal2 = ((String[]) params.values().toArray()[1])[0].toLowerCase();
			reqParamKey3 = ((String) params.keySet().toArray()[2]).toLowerCase();
			reqParamVal3 = ((String[]) params.values().toArray()[2])[0].toLowerCase();
			reqParamKeyVal=sortKeyVal(reqParamKey1+EQUALS+reqParamVal1+AMP+reqParamKey2+EQUALS+reqParamVal2+AMP+reqParamKey3+EQUALS+reqParamVal3);
			dataLayer = iTagUserService.find(reqParamKeyVal);
			//dataLayer = iTagUserService.find(reqParamKey1, reqParamVal1, reqParamKey2, reqParamVal2, reqParamKey3, reqParamVal3);
			return dataLayer;//itagUser;
		}
		return null;
	}
	
	//Update the Data Layer
	
	@RequestMapping(value = "/updateDataLayer", method = RequestMethod.POST)
	public @ResponseBody String updateDataLayer(WebRequest wr,@RequestBody String reqBody) {
		if(logger.isDebugEnabled()){
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
		LinkedHashMap<String, String[]> params=(LinkedHashMap<String, String[]>) wr.getParameterMap();
		if (params.size() == 1) {
			for (Map.Entry<String, String[]> param : params.entrySet()) {
				reqParamKey1 = param.getKey().toLowerCase();
				reqParamVal1 = param.getValue()[0].toLowerCase();
				reqParamKeyVal = reqParamKey1 + EQUALS + reqParamVal1;
				dataLayer = iTagUserService.find(reqParamKeyVal);
				if (null != dataLayer) {
					iTagUserService.update(reqBody.toString(), reqParamKeyVal);
					message = "success";
				}else{
					//new ParametersNotFound("Data Not Found");
					message = "Data Not found";
				}
			}
		} else if (params.size() == 2) {
			reqParamKey1 = ((String) params.keySet().toArray()[0]).toLowerCase();
			// reqParamVal1 = ((String[])
			// params.values().toArray()[0]).toLowerCase();
			reqParamVal1 = ((String[]) params.values().toArray()[0])[0].toLowerCase();
			reqParamKey2 = ((String) params.keySet().toArray()[1]).toLowerCase();
			reqParamVal2 = ((String[]) params.values().toArray()[1])[0].toLowerCase();
			reqParamKeyVal = sortKeyVal(reqParamKey1 + EQUALS + reqParamVal1 + AMP + reqParamKey2 + EQUALS + reqParamVal2);
			dataLayer = iTagUserService.find(reqParamKeyVal);
			if (null != dataLayer) {
				iTagUserService.update(reqBody, reqParamKeyVal);
				message = "success";
			}else{
				message = "Data Not found";
			}
		} else if (params.size() == 3) {
			reqParamKey1 = ((String) params.keySet().toArray()[0]).toLowerCase();
			reqParamVal1 = ((String[]) params.values().toArray()[0])[0].toLowerCase();
			reqParamKey2 = ((String) params.keySet().toArray()[1]).toLowerCase();
			reqParamVal2 = ((String[]) params.values().toArray()[1])[0].toLowerCase();
			reqParamKey3 = ((String) params.keySet().toArray()[2]).toLowerCase();
			reqParamVal3 = ((String[]) params.values().toArray()[2])[0].toLowerCase();
			reqParamKeyVal = sortKeyVal(reqParamKey1 + EQUALS + reqParamVal1 + AMP + reqParamKey2 + EQUALS + reqParamVal2
					+ AMP + reqParamKey3 + EQUALS + reqParamVal3);
			dataLayer = iTagUserService.find(reqParamKeyVal);
			if (null != dataLayer) {
				iTagUserService.update(reqBody, reqParamKeyVal);
				message = "success";
			}else{
				message = "Data Not found";
			}
		}
		return message;
	}

	//Project Controller -start
	
	@RequestMapping(value = "/saveITagProject", method = RequestMethod.POST)
	public @ResponseBody void saveITagProject(@RequestBody Projects iTagProject) {
		if(logger.isDebugEnabled()){
			logger.debug("saveITagData is executed!");
		}
		String projectTitle = iTagProject.getProjectTitle();
		if(!(isProjectExist(projectTitle))){
			iTagUserService.saveProject(iTagProject);
		}else{
			throw new DuplicateParameters();
		}
		
	}
	
	@RequestMapping(value = "/getAllProjects", method = RequestMethod.GET, produces = "application/json")
	public List<Projects> getITagProjects() {
		return iTagUserService.findAllProjects();
	}
	
	@RequestMapping(value = "/getProjectDLs/{projectTitle}", method = RequestMethod.GET, produces = "application/json")
	public List<ITagUser> getProjDLs(@PathVariable("projectTitle") String projectTitle) {
		if(null != projectTitle){
		return iTagUserService.findAllDataLayer(projectTitle);
		}else{
			return null;
		}
	}
	@RequestMapping(value = "/deleteDL/{id}", method = RequestMethod.DELETE, produces = "application/json")
	public ITagUser delete(@PathVariable("id") Integer id) {
		if(null != id){
		return iTagUserService.delete(id);
		}else{
			return null;
		}
	}
	
	@RequestMapping(value = "/findById/{id}", method = RequestMethod.GET, produces = "application/json")
	public ITagUser findById(@PathVariable("id") Integer id) {
		if(null != id){
		return iTagUserService.findById(id);
		}else{
			return null;
		}
	}
	//Copy
	
	@RequestMapping(value = "/getProjectByTitle/{projectTitle}", method = RequestMethod.GET, produces = "application/json")
    public List<Projects> getProjByTitle(@PathVariable("projectTitle") String projectTitle) {
    if(null != projectTitle){
                 return iTagUserService.findProjectByTitle(projectTitle);
          }else{
                       return null;
                 }
          }

	
	//Project Controller -start
	
	/*@RequestMapping(value = "/getDataLayer", method = RequestMethod.GET, produces = "application/json")
	public String getITagDataLayer( WebRequest wr) {
		if(logger.isDebugEnabled()){
			logger.debug("getITagFirstKeyValData is started!");
		}
		//ITagUser itagUser = new ITagUser();
		String dataLayer;
		String reqParamKey1;
		String reqParamVal1;
		String reqParamKey2;
		String reqParamVal2;
		String reqParamKey3;
		String reqParamVal3;
		LinkedHashMap<String, String[]> params=(LinkedHashMap<String, String[]>) wr.getParameterMap();
		if(params.size() == 1){
			for(Map.Entry<String, String[]> param: params.entrySet()){
				reqParamKey1 = param.getKey().toLowerCase();
				reqParamVal1 = param.getValue()[0].toLowerCase();
				//itagUser = iTagUserService.findByReqParamKey1AndReqParamVal1(reqParamKey1, reqParamVal1[0]);
				//if(null != itagUser){
				dataLayer = iTagUserService.find(reqParamKey1, reqParamVal1);
				//}
				return dataLayer;
			}
		}else if(params.size() == 2){
				reqParamKey1 =  ((String) params.keySet().toArray()[0]).toLowerCase();
				//reqParamVal1 = ((String[]) params.values().toArray()[0]).toLowerCase();
				reqParamVal1 = ((String[]) params.values().toArray()[0])[0].toLowerCase();
				reqParamKey2 = ((String) params.keySet().toArray()[1]).toLowerCase();
				reqParamVal2 = ((String[]) params.values().toArray()[1])[0].toLowerCase();
				dataLayer = iTagUserService.find(reqParamKey1, reqParamVal1, reqParamKey2, reqParamVal2);
				return dataLayer;//itagUser;
		}else if(params.size() == 3){
			reqParamKey1 =  ((String) params.keySet().toArray()[0]).toLowerCase();
			reqParamVal1 = ((String[]) params.values().toArray()[0])[0].toLowerCase();
			reqParamKey2 = ((String) params.keySet().toArray()[1]).toLowerCase();
			reqParamVal2 = ((String[]) params.values().toArray()[1])[0].toLowerCase();
			reqParamKey3 = ((String) params.keySet().toArray()[2]).toLowerCase();
			reqParamVal3 = ((String[]) params.values().toArray()[2])[0].toLowerCase();
			dataLayer = iTagUserService.find(reqParamKey1, reqParamVal1, reqParamKey2, reqParamVal2, reqParamKey3, reqParamVal3);
			return dataLayer;//itagUser;
	}
			//reqParamKey1 = params.get(key);
		
		return null;
	}*/

	/*public boolean isDataExist(ITagUser iTagUser){
		String reqParamKey1 = iTagUser.getReqParamKey1();
		String reqParamVal1 = iTagUser.getReqParamVal1();
		String reqParamKey2 = iTagUser.getReqParamKey2();
		String reqParamVal2 = iTagUser.getReqParamVal2();
		String reqParamKey3 = iTagUser.getReqParamKey3();
		String reqParamVal3 = iTagUser.getReqParamVal3();
		
		if(null != reqParamKey1 && null != reqParamVal1){
			if(null != iTagUserService.findByReqParamKey1AndReqParamVal1(reqParamKey1, reqParamVal1)){
			return true;
			}
		}if(null != reqParamKey2 && null != reqParamVal2){
			if(null != iTagUserService.findByReqParamKey2AndReqParamVal2(reqParamKey2, reqParamVal2)){
				return true;
			}
		}if(null != reqParamKey3 && null != reqParamVal3){
			if(null != iTagUserService.findByReqParamKey3AndReqParamVal3(reqParamKey3, reqParamVal3)){
				return true;
			}
		}
		return false;
	}
	*/
	public boolean isDataExist(ITagUser iTagUser){
		String reqParamKeyVal = iTagUser.getReqParamKeyVal();
		String dataLayer = iTagUserService.find(reqParamKeyVal);
			if(null != dataLayer){
			return true;
		}
		/*String reqParamKey1 = iTagUser.getReqParamKey1();
		String reqParamVal1 = iTagUser.getReqParamVal1();
		String reqParamKey2 = iTagUser.getReqParamKey2();
		String reqParamVal2 = iTagUser.getReqParamVal2();
		String reqParamKey3 = iTagUser.getReqParamKey3();
		String reqParamVal3 = iTagUser.getReqParamVal3();
		
		if(null != reqParamKey1 && null != reqParamVal1){
			if(null != iTagUserService.findByReqParamKey1AndReqParamVal1(reqParamKey1, reqParamVal1)){
			return true;
			}
		}if(null != reqParamKey2 && null != reqParamVal2){
			if(null != iTagUserService.findByReqParamKey2AndReqParamVal2(reqParamKey2, reqParamVal2)){
				return true;
			}
		}if(null != reqParamKey3 && null != reqParamVal3){
			if(null != iTagUserService.findByReqParamKey3AndReqParamVal3(reqParamKey3, reqParamVal3)){
				return true;
			}
		}*/
		return false;
	}
	
	public String sortKeyVal(String ketValParam){
		String[] parts = ketValParam.split(AMP);
		Arrays.sort(parts);
		String sortKeyVal = "";
	//	for(String part:parts){
			for(int i=0;i<parts.length;i++){
				if(i==0){
					sortKeyVal =sortKeyVal+parts[i];
				}else{
					sortKeyVal =sortKeyVal+AMP+parts[i];
				}
			}
			return sortKeyVal;
	}
	
	public boolean isProjectExist(String projectTitle){
		String projectName = iTagUserService.findProject(projectTitle);
			if(null != projectName){
			return true;
		}
		return false;
	}
	/*
	@RequestMapping(value = "/iTagData/getData", method = RequestMethod.GET, produces = "application/json")
	public ITagUser getITagFirstKeyValData(@RequestParam(value = "reqParamKey1") String reqParamKey1,
			@RequestParam(value = "reqParamVal1") String reqParamVal1) {
		ITagUser itagUser = new ITagUser();
		if (reqParamKey1 != null && reqParamVal1 != null) {
			itagUser = iTagUserService.findByReqParamKey1AndReqParamVal1(reqParamKey1, reqParamVal1);
			return itagUser;
		}
		return null;
	}
	*/

	/*@RequestMapping(value = "/iTagData/getData", params = { "reqParamKey1", "reqParamVal1", "reqParamKey2",
			"reqParamVal2" }, method = RequestMethod.GET, produces = "application/json")
	public ITagUser getITagTwoKeyValData(@RequestParam(value = "reqParamKey1") String reqParamKey1,
			@RequestParam(value = "reqParamVal1") String reqParamVal1,
			@RequestParam(value = "reqParamKey2") String reqParamKey2,
			@RequestParam(value = "reqParamVal2") String reqParamVal2) {

		if (reqParamKey1 != null && reqParamVal1 != null && reqParamKey1 != null && reqParamVal1 != null) {
			return iTagUserService.find(reqParamKey1, reqParamVal1, reqParamKey2, reqParamVal2);
		}
		return null;
	}

	@RequestMapping(value = "/iTagData/getData", method = RequestMethod.GET, produces = "application/json")
	public ITagUser getITagUserData(@RequestParam(value = "reqParamKey1") String reqParamKey1,
			@RequestParam(value = "reqParamVal1") String reqParamVal1,
			@RequestParam(value = "reqParamKey2") String reqParamKey2,
			@RequestParam(value = "reqParamVal2") String reqParamVal2,
			@RequestParam(value = "reqParamKey3") String reqParamKey3,
			@RequestParam(value = "reqParamVal3") String reqParamVal3) {

		if (reqParamKey1 != null && reqParamVal1 != null && reqParamKey2 != null && reqParamVal2 != null
				&& reqParamKey3 != null && reqParamVal3 != null) {
			return iTagUserService.find(reqParamKey1, reqParamVal1, reqParamKey2, reqParamVal2, reqParamKey3,
					reqParamVal3);
		} else {
			return null;
		}
	}*/

}
