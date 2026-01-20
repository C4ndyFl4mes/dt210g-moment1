import type { ReactElement } from 'react';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import banner from './assets/images/heroimage.jpg';

function App(): ReactElement {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header title={"Moment 1 - React intro"} banner={banner} />
      <Main />
      <Footer theMaker='Isaac' />
    </div>
  );
}

export default App
