package com.backend.collegefinder.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.backend.collegefinder.model.College;
import com.backend.collegefinder.model.GRE;
import com.backend.collegefinder.CollegeRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class CollegeController {
	
	@Autowired
	private CollegeRepository collegeRepository;
	
	@GetMapping("/list/colleges")//http://localhost:8080/api/list/colleges
	public JSONObject ListColleges()
	{
		System.out.println("Find all colleges in database");
		List<College> list = collegeRepository.findAll();
		
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("count", list.size());
		jsonObject.put("colleges", list);
		System.out.println("Here: " + list);
		return jsonObject;
	}
	
	@GetMapping("/search/colleges")//http://localhost:8080/api/search/colleges
	@ResponseBody
	public JSONObject SearchCollegesByGRE(@RequestParam int verbal, @RequestParam int quantitative) {
		System.out.println("Search by GRE score");
		
		JSONObject jsonObject = new JSONObject();
		List<College> search_list = collegeRepository.search(verbal, quantitative);
		System.out.println("Here: "+ search_list);
		jsonObject.put("count", search_list.size());
		jsonObject.put("colleges", search_list);
		return jsonObject;
	}
}
