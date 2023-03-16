import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import MainPage from './controllers/MainPage';
import RequestPage from './controllers/RequestPage';

function App() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                {/* <Route exact path="/request" element={<RequestPage />} /> */}
            </Routes>
        </BrowserRouter>
    );

    // return (
    //     <BrowserRouter>
    //         <Routes>
    //             <Route exact path="/home" component={MainPage} />
    //             <Route exact path="/request" render={() => <RequestPage method="POST" />} />
    //         </Routes>
    //     </BrowserRouter>
    //   );
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
}

export default App;
