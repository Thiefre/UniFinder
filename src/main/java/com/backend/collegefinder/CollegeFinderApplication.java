package com.backend.collegefinder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin("*")
public class CollegeFinderApplication {

	public static void main(String[] args) {
		SpringApplication.run(CollegeFinderApplication.class, args);
	}

}
