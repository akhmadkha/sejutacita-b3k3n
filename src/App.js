import './App.css';
import { BrowserRouter } from "react-router-dom";
import MainRoutes from 'router/main-routes';
import MainLayout from 'pages/_layouts/main-layout';
import { AnimatePresence } from 'framer-motion';
// import 'dotenv/config'
// require('dotenv').config()

String.prototype.toHHMMSS = function () {
  var sec_num = parseInt(this, 10); // don't forget the second param
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return hours + ':' + minutes + ':' + seconds;
}

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
