import './App.css';

const lastTokenUpdateDate = new Date(2023, 2, 7, 16, 21, 0)

const App = () => {
  const diffDays = Math.floor((new Date() - lastTokenUpdateDate) / 1000 / 60 / (60 * 24))
  const recordDays = 16

  localStorage.setItem('LAST_DIFF_DAYS', diffDays)
  localStorage.setItem('LAST_RECORD_DAYS', recordDays)

  return (
    <div className="app">
      {/* <img src={calendar} alt="calendar" /> */}
      <header className='header'>
        <p className='warn'>Por favor, pare de executar o compando <b>npm logout</b></p>
      </header>

      <p>Estamos há</p>
      <p className='current-num-day'>{diffDays}</p>
      <p>dias sem <b><u>npm logout</u></b></p>

      <footer className='footer'>
        <p>Nosso recorde é de <b className='record-num-day'>{recordDays}</b> dias 🥳</p>
      </footer>
    </div>
  );
}

export default App;
