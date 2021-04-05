package com.fullstack.rps.service;

import com.fullstack.rps.model.WinningSequence;
import com.fullstack.rps.repo.WinningSequenceRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Slf4j
public class WinningSequenceService {
    @Autowired
    private WinningSequenceRepository winningSequenceRepository;
    @Transactional
    public WinningSequence getWinningSequence()
    {
        return this.winningSequenceRepository.findById(1).orElse(null);
    }

    @Transactional
    public WinningSequence updateWinningSequecne(WinningSequence winningSequence)
    {
        WinningSequence sequence=this.winningSequenceRepository.findById(1).orElse(null);
        if(sequence==null|| sequence.getValue()< winningSequence.getValue())
        {
            if(sequence==null){
                sequence=new WinningSequence();
            }
            log.info("Saving winning sequence"+winningSequence.getValue());
            sequence.setValue(winningSequence.getValue());
            sequence=this.winningSequenceRepository.save(sequence);
        }
        return sequence;
    }




}
