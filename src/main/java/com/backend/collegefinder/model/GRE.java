package com.backend.collegefinder.model;

public class GRE {
	
	private int verbal, quantitative;
	
	public GRE(int verbal, int quantitative)
	{
		this.verbal = verbal;
		this.quantitative = quantitative;
	}

	public int getVerbal() {
		return verbal;
	}

	public void setVerbal(int verbal) {
		this.verbal = verbal;
	}

	public int getQuantitative() {
		return quantitative;
	}

	public void setQuantitative(int quantitative) {
		this.quantitative = quantitative;
	}
}
