package com.example.spring_backend.service;

import com.example.spring_backend.model.Form;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public interface FormService {
    ResponseEntity<HttpStatus> save(Form form);
    ResponseEntity<List<Form>> getForms();
    ResponseEntity<HttpStatus> update(Form form);
}
