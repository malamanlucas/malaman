package br.com.exames.rest;

import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalRestController {
    
    @InitBinder
    public void initBinder(WebDataBinder binder) {
    }
}
