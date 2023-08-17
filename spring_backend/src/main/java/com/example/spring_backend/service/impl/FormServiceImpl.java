package com.example.spring_backend.service.impl;

import com.example.spring_backend.model.Form;
import com.example.spring_backend.repository.FormRepository;
import com.example.spring_backend.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormServiceImpl implements FormService {
    @Autowired
    private FormRepository formRepository;

    @Override
    public ResponseEntity<HttpStatus> save(Form form) {
        formRepository.save(form);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<List<Form>> getForms() {
        return new ResponseEntity<>(formRepository.findAll(),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<HttpStatus> update(Form form) {
        formRepository.save(form);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
