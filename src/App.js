import './App.scss';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='App'>
      <Sidebar />
      <Content>
        abc
      </Content>
    </div>
  );
}

export default App;
