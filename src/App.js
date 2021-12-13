import './App.css';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
