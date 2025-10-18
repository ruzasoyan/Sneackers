import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./style/global.css"
import "./style/reset.css"
import "./style/repeat.css"
import { Route, BrowserRouter as Router, Routes } from "react-router";
import { HomePage, AccountPage } from "./pages";
import { Header, Basket } from '@/components';
import { Suspense } from "react";

function App() {
  return (
    <Suspense>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
        <Basket />
      </Router>
    </Suspense>
  )
}
export default App
