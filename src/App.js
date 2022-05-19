import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import List from './Components/Notes/List'
import Content from './Components/Notes/Content'
import Buttons from './Components/Notes/Buttons'
import NotesState from './Context/NotesState'

function App() {
  return (
    <>
      <Navbar />
      <NotesState>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-2">
              <List />
            </div>
            <div className="col-md-8">
              <Content />
            </div>
            <div className="col-md-2">
              <Buttons />
            </div>
          </div>
        </div>
      </NotesState>
    </>
  );
}

export default App;
