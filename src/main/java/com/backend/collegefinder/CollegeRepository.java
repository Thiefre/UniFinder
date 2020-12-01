package com.backend.collegefinder;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.backend.collegefinder.model.College;

@Repository
public interface CollegeRepository extends JpaRepository<College, Long>{

	@Query(value = "SELECT * FROM college WHERE college.avg_verbal <= :verbal AND college.avg_quantitative <= :quantitative", nativeQuery = true)
	public List<College> search(@Param("verbal") int verbal, @Param("quantitative") int quantitative);
}
