package com.backend.collegefinder.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "college")
@Data
public class College {

	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	private long id;
	private String name;
	private String major;
	private double avgVerbal;
	private double avgQuantitative;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getAvgVerbal() {
		return avgVerbal;
	}
	public void setAvgVerbal(double avgVerbal) {
		this.avgVerbal = avgVerbal;
	}
	public double getAvgQuantitative() {
		return avgQuantitative;
	}
	public void setAvgQuantitative(double avgQuantitative) {
		this.avgQuantitative = avgQuantitative;
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	

}
