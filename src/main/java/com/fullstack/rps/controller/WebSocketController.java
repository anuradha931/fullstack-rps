package com.fullstack.rps.controller;

import com.fullstack.rps.model.Greeting;
import com.fullstack.rps.model.HelloMessage;
import com.fullstack.rps.model.WinningSequence;
import com.fullstack.rps.repo.WinningSequenceRepository;
import com.fullstack.rps.service.WinningSequenceService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.util.HtmlUtils;

@Controller
@Slf4j
public class WebSocketController {

    @Autowired
    private WinningSequenceService winningSequenceService;

    @MessageMapping("/winning-sequence")
    @SendTo("/topic/rps")
    public WinningSequence storeWinningSequence(WinningSequence winningSequence) throws Exception {
        return winningSequenceService.updateWinningSequecne(winningSequence);
    }
}