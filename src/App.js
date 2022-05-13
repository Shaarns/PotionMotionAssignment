import Home from './components/Main';
import Header from './components/Header';
import ManageProducts from './components/ManageProduct';
import { useSelector } from 'react-redux';

function App() {
  const pageIndicator = useSelector((state) => state.pageIndicator);
  return (
    <div>
      <Header />
      {pageIndicator.home && <Home />}
      {pageIndicator.manage_page && <ManageProducts />}
    </div>
  );
}

export default App;
