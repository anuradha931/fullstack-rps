package com.fullstack.rps.controller;

import com.fullstack.rps.model.House;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.util.MimeType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ThreadLocalRandom;

@RestController
@RequestMapping(value = "/rest")
public class HouseController {

    private final String[] choices = new String[] {"rock", "paper", "scissors"};
 //   @CrossOrigin(origins = "http://localhost:1234", allowedHeaders = "*")
    @GetMapping(value="/house", produces="application/json")
    @ApiOperation( value = "Pick house choice",
            notes = "Returns first N persons specified by the size parameter with page offset specified by page parameter.",
            response = String.class)
    public House  pickHouse()
    {
        int index=ThreadLocalRandom.current().nextInt(3);
        String choice= choices[index];
        return new House(choice);
    }
}
