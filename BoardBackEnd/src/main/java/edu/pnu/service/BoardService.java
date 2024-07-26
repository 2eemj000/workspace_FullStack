package edu.pnu.service;

import java.util.List;

import org.springframework.stereotype.Service;

import edu.pnu.domain.Board;
import edu.pnu.persistence.BoardRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardService {
	private final BoardRepository boardRepo;
	
	public List<Board> getBoards(){
		return boardRepo.findAll();
	}
	
	public Board getBoard(Long id) {
		return boardRepo.findById(id).get();
	}
	
	// 새로운 항목 추가
	public Board addBoard(Board board) {
		return boardRepo.save(board);
	}
	// 기존항목 수정하기
	public Board updateBoard(Board board) {
		return boardRepo.save(board);
	}
	// 기존항목 삭제하기
	public Board deleteBoard(Long id) {
		Board findboard = boardRepo.findById(id).get();
		boardRepo.delete(findboard);
		return findboard;
	}
}
