import './App.css';
import SearchResultContainer from './components/EmployeeContainer';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12"><div className="wrapper">
    <h1 className="typing-demo">
      Employee Directory
    </h1>
</div></div>
        </div>
      <div className="row">
        <div className="col bold">Employee</div>
        <div className="col bold">Contact</div>
        <div className="col bold">Location</div>
      </div>
      <SearchResultContainer />
    </div>
   
  );
}

export default App;
