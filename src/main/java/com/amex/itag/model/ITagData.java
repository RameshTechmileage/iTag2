package com.amex.itag.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "itag_info")
public class ITagData {

	@Id
	@GeneratedValue
	private Integer id;
	
	@Column(name = "data_layer")
	private String dataLayer;

	@Column(name = "request_parameter")
	private String requestParameter;

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

	public String getRequestParameter() {
		return requestParameter;
	}

	public void setRequestParameter(String requestParameter) {
		this.requestParameter = requestParameter;
	}
}
