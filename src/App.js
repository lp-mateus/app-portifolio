import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PageHome from "./Pages/page_home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="*" />*/}
        <Route path="/" exact element={<PageHome />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;