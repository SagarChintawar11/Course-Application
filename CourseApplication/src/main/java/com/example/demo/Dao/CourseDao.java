package com.example.demo.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Course;

public interface CourseDao extends JpaRepository<Course, Long> {

}
