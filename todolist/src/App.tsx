import './App.css'

function App() {
  const name = '리액트'

  return (
    <>
      <div className='container'>
        <h1 className='test'>Hello, 
          {
            name === '리액트' ? <h1>Yes</h1> : null
        }
          !!</h1>
        <p>반갑습니다.</p>
      </div>
      {/* 주석문은 이렇게 사용한다. (단축키: Ctrl + /) */}
      {/* 협업 시 추천하는 주석 사용법
        작성자 : KHJ
        작성일 : 2025.01.15
        내용 : 기능에 대한 내용 
      */}
    </>
  )
}

export default App
