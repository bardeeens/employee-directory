import './App.css';
import SearchResultContainer from './components/SearchResultContainer';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12"><h1>Employee Directory</h1></div>
        </div>
      <div className="row">
        <div className="col">Employee Photo</div>
        <div className="col">Name</div>
        <div className="col">Email</div>
        <div className="col">Location</div>
      </div>
      <SearchResultContainer />
    </div>
   
  );
}

export default App;
