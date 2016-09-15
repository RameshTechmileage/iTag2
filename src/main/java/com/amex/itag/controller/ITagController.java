package com.amex.itag.controller;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import com.amex.itag.model.ITagUser;
import com.amex.itag.service.ITagUserService;
import com.amex.itag.service.ITagUserServiceImpl;
import com.amex.itag.util.DuplicateParameters;

@RestController
public class ITagController {
	
	final static Logger logger = Logger.getLogger(ITagController.class);

	@Autowired
	private ITagUserService iTagUserService;

	@RequestMapping(value = "/saveITagData", method = RequestMethod.POST)
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

	/*@RequestMapping(value = "/getDataLayer", method = RequestMethod.GET, produces = "application/json")
	public List<ITagUser> getITagData() {
		return iTagUserService.findAll();
	}*/

	@RequestMapping(value = "/getDataLayer", method = RequestMethod.GET, produces = "application/json")
	public ITagUser getITagFirstKeyValData( WebRequest wr) {
		if(logger.isDebugEnabled()){
			logger.debug("getITagFirstKeyValData is started!");
		}
		ITagUser itagUser = new ITagUser();
		String reqParamKey1;
		String[] reqParamVal1;
		String reqParamKey2;
		String[] reqParamVal2;
		String reqParamKey3;
		String[] reqParamVal3;
		LinkedHashMap<String, String[]> params=(LinkedHashMap<String, String[]>) wr.getParameterMap();
		if(params.size() == 1){
			for(Map.Entry<String, String[]> param: params.entrySet()){
				reqParamKey1 = param.getKey();
				reqParamVal1 = param.getValue();
				//itagUser = iTagUserService.findByReqParamKey1AndReqParamVal1(reqParamKey1, reqParamVal1[0]);
				//if(null != itagUser){
				itagUser = iTagUserService.find(reqParamKey1, reqParamVal1[0]);
				//}
				return itagUser;
			}
		}else if(params.size() == 2){
				reqParamKey1 =  (String) params.keySet().toArray()[0];
				reqParamVal1 = (String[]) params.values().toArray()[0];
				reqParamKey2 = (String) params.keySet().toArray()[1];
				reqParamVal2 = (String[]) params.values().toArray()[1];
				itagUser = iTagUserService.find(reqParamKey1, reqParamVal1[0], reqParamKey2, reqParamVal2[0]);
				return itagUser;
		}else if(params.size() == 3){
			reqParamKey1 =  (String) params.keySet().toArray()[0];
			reqParamVal1 = (String[]) params.values().toArray()[0];
			reqParamKey2 = (String) params.keySet().toArray()[1];
			reqParamVal2 = (String[]) params.values().toArray()[1];
			reqParamKey3 = (String) params.keySet().toArray()[2];
			reqParamVal3 = (String[]) params.values().toArray()[2];
			itagUser = iTagUserService.find(reqParamKey1, reqParamVal1[0], reqParamKey2, reqParamVal2[0], reqParamKey3, reqParamVal3[0]);
			return itagUser;
	}
			//reqParamKey1 = params.get(key);
		
		return null;
	}

	public boolean isDataExist(ITagUser iTagUser){
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
