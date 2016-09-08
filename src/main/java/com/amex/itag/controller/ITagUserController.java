package com.amex.itag.controller;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.amex.itag.model.ITagUser;
import com.amex.itag.service.ITagUserService;

@Controller
@RequestMapping(value="/user")
public class ITagUserController {

	@Autowired
	private ITagUserService iTagUserService;
	
	/*@Autowired
	private ShopValidator shopValidator;*/
	
	/*@InitBinder
	private void initBinder(WebDataBinder binder) {
		binder.setValidator(shopValidator);
	}*/

	@RequestMapping(value="/create", method=RequestMethod.GET)
	public ModelAndView newShopPage() {
		ModelAndView mav = new ModelAndView("index", "shop", new ITagUser());
		return mav;
	}
	
	@RequestMapping(value="/create", method=RequestMethod.POST)
	public ModelAndView createUserData(@ModelAttribute @Valid ITagUser iTagUser,
			BindingResult result,
			final RedirectAttributes redirectAttributes) {
		
		if (result.hasErrors())
			return new ModelAndView("index");
		
		ModelAndView mav = new ModelAndView();
		String message = "New User Data "+iTagUser.getCreatedBy()+" was successfully created.";
		
		iTagUserService.create(iTagUser);
		mav.setViewName("redirect:/index");
				
		redirectAttributes.addFlashAttribute("message", message);	
		return mav;		
	}
	
	@RequestMapping(value="/list", method=RequestMethod.GET)
	public ModelAndView shopListPage() {
		ModelAndView mav = new ModelAndView("shop-list");
		List<ITagUser> userList = iTagUserService.findAll();
		mav.addObject("userList", userList);
		return mav;
	}
	
	@RequestMapping(value="/edit/{id}", method=RequestMethod.GET)
	public ModelAndView editShopPage(@PathVariable Integer id) {
		ModelAndView mav = new ModelAndView("shop-edit");
		ITagUser iTagUser = iTagUserService.findById(id);
		mav.addObject("shop", iTagUser);
		return mav;
	}
	
	@RequestMapping(value="/edit/{id}", method=RequestMethod.POST)
	public ModelAndView editUserData(@ModelAttribute @Valid ITagUser iTagUser,
			BindingResult result,
			@PathVariable Integer id,
			final RedirectAttributes redirectAttributes){// throws ShopNotFound {
		
		if (result.hasErrors())
			return new ModelAndView("shop-edit");
		
		ModelAndView mav = new ModelAndView("redirect:/index.html");
		String message = "Shop was successfully updated.";

		iTagUserService.update(iTagUser);
		
		redirectAttributes.addFlashAttribute("message", message);	
		return mav;
	}
	
	@RequestMapping(value="/delete/{id}", method=RequestMethod.GET)
	public ModelAndView deleteUserData(@PathVariable Integer id,
			final RedirectAttributes redirectAttributes){// throws ShopNotFound {
		
		ModelAndView mav = new ModelAndView("redirect:/index.html");		
		
		ITagUser iTagUser = iTagUserService.delete(id);
		String message = "The shop "+iTagUser.getCreatedBy()+" was successfully deleted.";
		
		redirectAttributes.addFlashAttribute("message", message);
		return mav;
	}
}
