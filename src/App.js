import Header from './components/header';
import Loading from './components/loading';
import CryptoCurrencyList from './pages/cryptoCurrencyList'; //page ---> 
// import Pagination from './pages/cryptoCurrencyList'
import Pagination from './pagination'; 
function App() {
    return (
        <div>
            <Header />
            <CryptoCurrencyList />
            <Pagination />
        </div>
    )
}

export default App;