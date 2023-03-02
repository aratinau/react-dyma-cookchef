import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import { seedRecipes } from './data/seed';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

//seedRecipes();

function App() {
  const [page, setPage] = useState('homepage');

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill d-flex flex-column">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
export default App;
