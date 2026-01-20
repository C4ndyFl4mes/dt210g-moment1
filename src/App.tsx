import './App.css'
import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
import Main from './assets/components/Main';

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Header title={"Moment 1 - React intro"} />
      <Main />
      <Footer theMaker='Isaac' />
    </div>
  )
}

export default App
