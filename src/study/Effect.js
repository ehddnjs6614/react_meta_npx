import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setDate] = useState(0)

  const download = () => {
    //다운로드 받고 (통신)
    let downloadData = 5 //가정
    setDate(downloadData)
  }

  // 실행시점 : 1. APP 함수가 최초 실행될때 (App() 그림이 그려질때 )
  // 2. 상태변수가 변경 될때
  // 3. 의존리스트 관리를 할수 있다.
  useEffect(() => {
    download()
    console.log('useEffect 실행됨')
  }, [setDate])

  return (
    <div>
      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setDate(data + 1)
        }}
      >
        더하기
      </button>
    </div>
  )
}

export default App
