package com.amex.itag.util;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND, reason="Duplicate Parameters found") 
public class DuplicateParameters extends RuntimeException{

}
