// C:\workspace_fullstack\boardfrontend까지 들어간 경로에서 실행

import React, {useState} from 'react';

const DataDisplay = () => {
    const [dataBoard, setDateBoard] = useState([]);
    // setDateBoard는 dataBoard 상태를 업데이트하는 함수
    // 빈 배열에 서버에서 받아온 게시판 데이터 저장

    const [board, setBoard] = useState({
        title: '',
        content: '',
        writer: ''
    });

    // --- 데이터 가져오는 함수 (http://localhost:8080/board에서 데이터 가져옴)
    const loadBoard = async () => {
        await fetch('http://localhost:8080/board') // 여기서 받은 응답을
        .then(resp => {
            return resp.json(); // json형식으로 파싱
        }).then(result => {
            setDateBoard(result); // 파싱된 데이터를 dataBoard에 업데이트
        }).catch(error => {
            console.error('Error fetching Board: ', error);
        });
    };

    // --- 데이터 추가하는 함수
    const addBoardItem = async () => {
        try{
            const response = await fetch('http://localhost:8080/board', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(board)
            });
            const result = await response.json();
            setBoard({ title: '', content: '', writer: '' }); // 입력 폼 초기화
            loadBoard();
        } catch (error) {
            console.error('Error adding Board:', error);
        }
    };

    // --- 사용자가 입력할 때마다 board에 업데이트하는 함수
    const handleChange = (e) => {
        const { name, value } = e.target; // e의 target속성에서 name, value 추출
        setBoard(prevState => ({ // 상태를 업데이트
            ...prevState,        // 기존 상태를 ...prevState로 복사
            [name]: value        // 새로운 값 설정
        }));
    };

    // --- 데이터 표시하는 함수
    const loadData = () => {
        return (
            <table align='center'>
                <thead>
                    <tr>
                        <th>ID</th><th>title</th><th>writer</th>
                        <th>content</th><th>createDate</th>
                    </tr>
                </thead>
                <tbody>
                    {dataBoard.map(board => ( // dataBoard 배열의 요소 가져오기
                        <tr key={board.id}>
                            <td>{board.id}</td>
                            <td>{board.title}</td>
                            <td>{board.writer}</td>
                            <td>{board.content}</td>
                            <td>{board.createDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div>
            <h2>Data Display</h2>
            <div>
                <form>
                <input
                    type="text"
                    name="title"
                    value={board.title}
                    placeholder="제목"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="content"
                    value={board.content}
                    placeholder="내용"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="writer"
                    value={board.writer}
                    placeholder="작성자"
                    onChange={handleChange}
                />
                <button onClick={addBoardItem}>추가하기</button></form>
            </div>
            {/* 버튼 누르면 함수호출 -> 서버에서 데이터 가져옴 */}
            <button onClick={() => loadBoard()}>게시판 보기</button> 
            <div>{loadData()}</div>
        </div>
    );
};

export default DataDisplay;