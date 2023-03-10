import './App.css';

const lastTokenUpdateDate = new Date(2023, 2, 13, 11, 0, 0)

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
    if (!diffDays) return '๐'
    if (diffDays <= currentRecordDays) return '๐'
    if (diffDays > currentRecordDays) return '๐'
  }


  return (
    <div className="app">
      {/* <img src={calendar} alt="calendar" /> */}
      <header className='header'>
        <p className='warn'>๐ Por favor, pare de executar o comando <b>npm logout</b> ๐</p>
      </header>

      <p>Estamos hรก</p>
      <p className='current-num-day'>{diffDays}</p>
      <span>{getReaction()}</span>
      <p>dias sem <b><u>npm logout</u></b></p>

      <footer className='footer'>
        <p>Nosso รบltimo recorde รฉ de <b className='record-num-day'>{currentRecordDays}</b> dias ๐ฅณ</p>
      </footer>
    </div>
  );
}

export default App;
