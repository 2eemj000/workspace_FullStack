package edu.pnu.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import edu.pnu.service.BoardService;
import lombok.RequiredArgsConstructor;

@Slf4j
@RequiredArgsConstructor
@RestController
public class BoardController {
	private final BoardService boardService;
	
	// 전체 게시판 목록 조회
	@GetMapping("/board")
	public ResponseEntity<?> getboard(){
		log.info("getBoard: All");
		return ResponseEntity.ok(boardService.getBoards());
	}
	
	// 특정 게시글 조회
	@GetMapping("/board/{id}")
	public ResponseEntity<?> getBoard(@PathVariable Long id){
		log.info("getBoard: "+id);
		return ResponseEntity.ok(boardService.getBoard(id));
	}
}
