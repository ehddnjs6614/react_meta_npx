import React, { useEffect, useState } from 'react'

import Home from '../home/Home'
//페이지는 컴포넌트를 들고있는 아이들

const HomePage = () => {
  //http 요청 (fetch ,axios)
  const [boards, setBoards] = useState([])
  const [user, setUser] = useState({})

  const [number, setNumber] = useState([0])
  //boards가 상태 데이터여야 다운로드후에도 값이 들어간다.
  useEffect(() => {
    //다운로드 가정 = (fetch ,axios)
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ]
    //빈데이터
    setBoards([...data])
    setUser({ id: 1, username: '기모찌' })
  }, [])

  return (
    <div>
      <Home
        boards={boards}
        setBoards={setBoards}
        number={number}
        setNumber={setNumber}
        user={user}
      />
    </div>
  )
}

export default HomePage
