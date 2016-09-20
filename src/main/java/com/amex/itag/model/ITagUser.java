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

	/*@Column(name = "req_param_key1")
	private String reqParamKey1;
	
	@Column(name = "req_param_key2")
	private String reqParamKey2;
	
	@Column(name = "req_param_key3")
	private String reqParamKey3;
	
	@Column(name = "req_param_val1")
	private String reqParamVal1;
	
	@Column(name = "req_param_val2")
	private String reqParamVal2;
	
	@Column(name = "req_param_val3")
	private String reqParamVal3;*/
	
	@Column(name = "req_param_key_val")
	private String reqParamKeyVal;

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

	/*public String getReqParamKey1() {
		return reqParamKey1;
	}

	public void setReqParamKey1(String reqParamKey1) {
		this.reqParamKey1 = reqParamKey1;
	}

	public String getReqParamKey2() {
		return reqParamKey2;
	}

	public void setReqParamKey2(String reqParamKey2) {
		this.reqParamKey2 = reqParamKey2;
	}

	public String getReqParamKey3() {
		return reqParamKey3;
	}

	public void setReqParamKey3(String reqParamKey3) {
		this.reqParamKey3 = reqParamKey3;
	}

	public String getReqParamVal1() {
		return reqParamVal1;
	}

	public void setReqParamVal1(String reqParamVal1) {
		this.reqParamVal1 = reqParamVal1;
	}

	public String getReqParamVal2() {
		return reqParamVal2;
	}

	public void setReqParamVal2(String reqParamVal2) {
		this.reqParamVal2 = reqParamVal2;
	}

	public String getReqParamVal3() {
		return reqParamVal3;
	}

	public void setReqParamVal3(String reqParamVal3) {
		this.reqParamVal3 = reqParamVal3;
	}*/

	public String getReqParamKeyVal() {
		return reqParamKeyVal;
	}

	public void setReqParamKeyVal(String reqParamKeyVal) {
		this.reqParamKeyVal = reqParamKeyVal;
	}
}
