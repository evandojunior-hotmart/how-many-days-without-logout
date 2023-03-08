import './App.css';

const lastTokenUpdateDate = new Date(2023, 2, 7, 16, 21, 0)

const App = () => {
  const diffDays = Math.floor((new Date() - lastTokenUpdateDate) / 1000 / 60 / (60 * 24))
  const lastRecordDay = 16
  const currentRecordDays = lastRecordDay < diffDays ? diffDays : lastRecordDay

  if (Number(localStorage.getItem('LAST_TOKEN_DATE')) !== lastTokenUpdateDate.getTime()) {
    debugger
    localStorage.setItem('LAST_TOKEN_DATE', lastTokenUpdateDate.getTime())
  }

  if (Number(localStorage.getItem('LAST_DIFF_DAYS')) !== diffDays) {
    debugger
    localStorage.setItem('LAST_DIFF_DAYS', diffDays)
  }

  // if (Number(localStorage.getItem('LAST_RECORD_DAYS')) < currentRecordDays) {
  //   debugger
  //   localStorage.setItem('LAST_RECORD_DAYS', currentRecordDays)
  // }

  const getReaction = () => {
    if (!diffDays) return '😕'
    if (diffDays <= currentRecordDays) return '🙂'
    if (diffDays > currentRecordDays) return '😎'
  }


  return (
    <div className="app">
      {/* <img src={calendar} alt="calendar" /> */}
      <header className='header'>
        <p className='warn'>🛑 Por favor, pare de executar o compando <b>npm logout</b> 🛑</p>
      </header>

      <p>Estamos há</p>
      <p className='current-num-day'>{diffDays}</p>
      <span>{getReaction()}</span>
      <p>dias sem <b><u>npm logout</u></b></p>

      <footer className='footer'>
        <p>Nosso último recorde é de <b className='record-num-day'>{currentRecordDays}</b> dias 🥳</p>
      </footer>
    </div>
  );
}

export default App;
