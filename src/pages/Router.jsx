import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Sekolah from './Sekolah/Sekolah';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sekolah/:slug" element={<Sekolah />} />
    </Routes>
  );
}

export default Router;
