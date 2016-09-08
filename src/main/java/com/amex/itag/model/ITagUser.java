package com.amex.itag.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "itag_user")
public class ITagUser {

	@Id
	@GeneratedValue
	private Integer id;
	
	@Column(name = "created_by")
	private String createdBy;

	@Column(name = "user_json")
	private String userInfoJson;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getUserInfoJson() {
		return userInfoJson;
	}

	public void setUserInfoJson(String userInfoJson) {
		this.userInfoJson = userInfoJson;
	}
}
