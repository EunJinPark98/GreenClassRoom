package com.green.GreenClassRoom.board.vo;

import lombok.Data;

@Data
public class QnaReplyVO {
    private int qnaReplyNum;
    private int qnaBoardNum;
    private String qnaReplyText;
    private String qnaReplyer;
    private String qnaRegDate;
    private String qnaUpdateDate;
}