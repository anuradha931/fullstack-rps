package com.fullstack.rps.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fullstack.rps.model.WinningSequence;
import com.fullstack.rps.repo.WinningSequenceRepository;
import com.fullstack.rps.service.WinningSequenceService;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionSubscribeEvent;
@Component
@Slf4j
public class SubscribeEventListener implements ApplicationListener<SessionSubscribeEvent> {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    private WinningSequenceService winningSequenceService;

    @SneakyThrows
    @Override
    public void onApplicationEvent(SessionSubscribeEvent sessionSubscribeEvent) {
        StompHeaderAccessor sha = StompHeaderAccessor.wrap(sessionSubscribeEvent.getMessage());
        log.debug("StompConnectEvent::onApplicationEvent()    sha.getSessionId(): "+sha.getSessionId()+" sha.toNativeHeaderMap():"+sha.toNativeHeaderMap());

        WinningSequence winningSequence=winningSequenceService.getWinningSequence();
        if(winningSequence!=null) {
            this.simpMessagingTemplate.convertAndSend("/topic/rps", new ObjectMapper().writeValueAsString(winningSequence));
        }else{
            log.debug("No winng sequence");
        }
    }


}
