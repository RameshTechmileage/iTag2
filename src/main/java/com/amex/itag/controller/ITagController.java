package com.amex.itag.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.amex.itag.model.ITagUser;
import com.amex.itag.service.ITagUserService;

@RestController
public class ITagController {

	@Autowired
	private ITagUserService iTagUserService;

	@RequestMapping(value = "/saveITagData", method = RequestMethod.POST)
	public @ResponseBody void saveITagData(@RequestBody ITagUser iTagUser) {
		iTagUserService.create(iTagUser);
	}

	@RequestMapping(value = "/iTagData", method = RequestMethod.GET, produces = "application/json")
	public List<ITagUser> getITagData() {
		return iTagUserService.findAll();
	}

	@RequestMapping(value = "/iTagData/getData", params = { "reqParamKey1",
			"reqParamVal1" }, method = RequestMethod.GET, produces = "application/json")
	public ITagUser getITagFirstKeyValData(@RequestParam(value = "reqParamKey1") String reqParamKey1,
			@RequestParam(value = "reqParamVal1") String reqParamVal1) {
		ITagUser itagUser = new ITagUser();
		if (reqParamKey1 != null && reqParamVal1 != null) {
			itagUser = iTagUserService.findByReqParamKey1AndReqParamVal1(reqParamKey1, reqParamVal1);
			return itagUser;
		}
		return null;
	}

	@RequestMapping(value = "/iTagData/getData", params = { "reqParamKey1", "reqParamVal1", "reqParamKey2",
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
	}

}
