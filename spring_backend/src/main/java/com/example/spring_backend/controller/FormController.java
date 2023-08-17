package com.example.spring_backend.controller;

import com.example.spring_backend.model.Form;
import com.example.spring_backend.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class FormController{

    @Autowired
    private FormService formService;

    @GetMapping("/forms")
    public List<Form> getAllForms(){
        return formService.getForms().getBody();
    }

    @PostMapping("/forms/post")
    public ResponseEntity<HttpStatus> postForm(@RequestBody Form form){
        return formService.save(form);
    }

    @PutMapping("/forms/update")
    public ResponseEntity<HttpStatus> updateForm(@RequestBody Form form){
        return formService.update(form);
    }
}
