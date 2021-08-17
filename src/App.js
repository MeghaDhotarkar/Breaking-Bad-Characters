import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header'
import CharacterList from './components/CharacterList';
import Pagination from './components/Pagination';

const App = ()=> {

  const [items,setItems] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [currentPage,setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);
 
  useEffect(() => {
    const fetchItem = async () => {
     const result = await axios('https://www.breakingbadapi.com/api/characters')

     console.log(result.data)

     setItems(result.data)
     setIsLoading(false)
    }
    fetchItem()
  }, [])

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem-itemPerPage;
  const currentItem = items.slice(indexOfFirstItem,indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <Header/>
      <CharacterList isLoading={isLoading} items={currentItem} />
      
      <Pagination 
        itemPerPage={itemPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
