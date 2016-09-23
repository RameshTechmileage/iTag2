package com.amex.itag.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "itag_projects")
public class Projects {

	@Id
	@GeneratedValue
	private Integer project_id;
	
	@Column(name = "project_title")
	private String projectTitle;
	
	@Column(name = "markets")
	private String markets;
	
	@Column(name = "business_unit")
	private String businessUnit;
	
	@Column(name = "application")
	private String application;
	
	 /*@OneToMany(mappedBy="projects", cascade=CascadeType.ALL)
	 private Set dataLayer;*/
	
	
	public Integer getProject_id() {
		return project_id;
	}

	public String getProjectTitle() {
		return projectTitle;
	}

	public void setProjectTitle(String projectTitle) {
		this.projectTitle = projectTitle;
	}

	public void setProject_id(Integer project_id) {
		this.project_id = project_id;
	}

	/*public Set getDataLayer() {
		return dataLayer;
	}

	public void setDataLayer(Set dataLayer) {
		this.dataLayer = dataLayer;
	}
*/
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

}
