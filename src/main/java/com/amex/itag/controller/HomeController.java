package com.amex.itag.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	@RequestMapping(value={"/", "index"}, method=RequestMethod.GET)
	public ModelAndView index() {
		return new ModelAndView("static/index");
	}
	@RequestMapping("/home")
	public String hello(Model model) {

		// model.addAttribute("name", name);

		return "static/html/index";
	}
}
