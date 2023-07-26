import './App.css';
import Header from './project/Header'
import Page1 from './project/page1'
import Page2 from './project/page2'
import Page3 from './project/page3'
import Page4 from './project/page4'
import Banner from './project/banner'

function App() {
  return (
    <div className='app'>
    <>
      <Banner />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </>
    </div>
  );
}

export default App;
