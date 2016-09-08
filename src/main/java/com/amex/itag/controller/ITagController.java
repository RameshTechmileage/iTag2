package com.amex.itag.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	@RequestMapping(value = "/iTagData", method = RequestMethod.GET)
	public List<ITagUser> getITagData() {
		return iTagUserService.findAll();
	}
}
