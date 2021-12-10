import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([1, 2, 3, 4])
  const [str, setStr] = useState('합계')

  const getAddResult = () => {
    let sum = 0
    list.forEach(i => (sum = sum + i))
    console.log(sum)
    return sum
  }

  const addResult = useMemo(() => getAddResult(), [list]) //인터프린터 순서중요
  //useMeom 는 불필요한 랜더링을 막는 함수인데.
  // list가 변경되었을때만 useMemo을 실행 시켜준다.
  return (
    <div>
      <button
        onClick={() => {
          setStr(['안녕'])
        }}
      >
        문자 변경
      </button>
      <button
        onClick={() => {
          setList([...list, 10])
        }}
      >
        리스트 값 추가
      </button>
      <div>
        {list.map(i => (
          <h1>{i}</h1>
        ))}
      </div>
      <div>
        {str} : {addResult}
      </div>
    </div>
  )
}

export default App
