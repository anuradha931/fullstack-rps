package com.fullstack.rps.repo;

import com.fullstack.rps.model.WinningSequence;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WinningSequenceRepository extends JpaRepository<WinningSequence,Integer> {
    WinningSequence getOne(int i);
}
