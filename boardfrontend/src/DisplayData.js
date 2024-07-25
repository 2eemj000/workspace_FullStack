// C:\workspace_fullstack\boardfrontend까지 들어간 경로에서 실행

import React, {useState} from 'react';

const DataDisplay = () => {
    const [dataBoard, setDateBoard] = useState([]);
    // setDateBoard는 dataBoard 상태를 업데이트하는 함수
    // 빈 배열에 서버에서 받아온 게시판 데이터 저장

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
            {/* 버튼 누르면 함수호출 -> 서버에서 데이터 가져옴 */}
            <button onClick={() => loadBoard()}>Board</button> 
            <div>{loadData()}</div>
        </div>
    );
};

export default DataDisplay;