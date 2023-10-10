package com.green.GreenClassRoom.finalchat;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ChatController {
    @MessageMapping("/chat")
    @SendTo("/")
    public ChatMessage sendMessage(ChatMessage message) {
        System.out.println("@@@@@@@@@@@@@@@" + message);
        return message;
    }


    @GetMapping("/chatPage")
    public String chatPage() {
        return "/content/finalchat/chatTest";
    }
}