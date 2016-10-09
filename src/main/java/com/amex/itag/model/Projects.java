package com.amex.itag.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "itag_projects")
public class Projects {

	@Id
	@GeneratedValue
	@Column(name = "project_id")
	private Integer projectId;
	
	@Column(name = "project_title")
	private String projectTitle;
	
	@Column(name = "markets")
	private String markets;
	
	@Column(name = "business_unit")
	private String businessUnit;
	
	@Column(name = "application")
	private String application;
	

	public Integer getProjectId() {
		return projectId;
	}

	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}

	public String getProjectTitle() {
		return projectTitle;
	}

	public void setProjectTitle(String projectTitle) {
		this.projectTitle = projectTitle;
	}

	public String getMarkets() {
		return markets;
	}

	public void setMarkets(String markets) {
		this.markets = markets;
	}

	public String getBusinessUnit() {
		return businessUnit;
	}

	public void setBusinessUnit(String businessUnit) {
		this.businessUnit = businessUnit;
	}

	public String getApplication() {
		return application;
	}

	public void setApplication(String application) {
		this.application = application;
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "projectId: " + projectId + " projectTitle: " + projectTitle + " markets: " + markets + " businessUnit: " + businessUnit 
				+ " application: " + application;
	}

	
}
