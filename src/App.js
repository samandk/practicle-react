import './App.css';
// import DataList from './DataList';
// import Search from './Search';

// import ProductsList from './HOC/ProductsList';
// import withSearch from './HOC/withSearch';
import UserParent from './user/UserParent';

import Parent from './optimization/Parent';
import ErrorBoundary from './ErrorBoundaries';

// Render out products list with search feature
//const ProductsListWithSearch = withSearch(ProductsList);
import TodoApp from './TodoList/TodoApp';

function App() {
  //const data =" Iam data";
  return (
    <>
    {/* <div dangerouslySetInnerHTML={{__html:data}}></div> */}
    {/* <DataList/> */}
    {/* <Search/> */}
    {/* <ProductsListWithSearch/> */}
    <ErrorBoundary>
    <UserParent/>

      {/* <Parent/> */}
      {/* <TodoApp/> */}
    </ErrorBoundary>

    </>
  );
}

export default App;
