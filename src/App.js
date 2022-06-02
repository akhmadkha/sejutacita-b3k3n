import './App.css';
import { BrowserRouter } from "react-router-dom";
import MainRoutes from 'router/main-routes';
import MainLayout from 'pages/_layouts/main-layout';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <MainRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
