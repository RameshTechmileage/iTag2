package com.amex.itag.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "itag_user_info")
public class ITagUser {

	@Id
	@GeneratedValue
	private Integer id;
	
	@Column(name = "data_layer", length = 1024)
	private String dataLayer;

	@Column(name = "req_param_key_val")
	private String reqParamKeyVal;
	
	@Column(name = "project_id")
	private Integer projectId;
	
	@Column(name = "datalayer_name")
	private String dataLayerName;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDataLayer() {
		return dataLayer;
	}

	public void setDataLayer(String dataLayer) {
		this.dataLayer = dataLayer;
	}

	public String getReqParamKeyVal() {
		return reqParamKeyVal;
	}

	public void setReqParamKeyVal(String reqParamKeyVal) {
		this.reqParamKeyVal = reqParamKeyVal;
	}
	
	public String getDataLayerName() {
		return dataLayerName;
	}

	public void setDataLayerName(String dataLayerName) {
		this.dataLayerName = dataLayerName;
	}

	public Integer getProjectId() {
		return projectId;
	}

	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}
}
