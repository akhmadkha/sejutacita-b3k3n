import './App.css';
import { BrowserRouter } from "react-router-dom";
import MainRoutes from 'router/main-routes';
import MainLayout from 'pages/_layouts/main-layout';
import { AnimatePresence } from 'framer-motion';
// import 'dotenv/config'
// require('dotenv').config()

function App() {

  console.log(process.env.REACT_APP_API_URL)
  return (
    <BrowserRouter>
      <AnimatePresence>
        <MainLayout>
          <MainRoutes />
        </MainLayout>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
