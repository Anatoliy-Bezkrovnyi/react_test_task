

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading";
import styles from "./App.module.css"

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const CampersPage = lazy(() => import('./pages/CampersPage/CampersPage'))
const CamperDetailsPage = lazy(() => import('./pages/CamperDetailsPage/CamperDetailsPage'))
const CamperFeatures = lazy(() => import('./components/CamperFeatures/CamperFeatures'))
const CamperReviews = lazy(() => import('./components/CamperReviews/CamperReviews'))
const NotFound = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))

function App() {  

  return (
    <div className={styles.app}>
      <Suspense fallback={<Loading/>}>      
      <Routes>        
        <Route path="/" element={<HomePage/>} />
        <Route path="/catalog" element={<CampersPage/>} />        
        <Route path="/catalog/:id" element={<CamperDetailsPage/>} >
            <Route path="features" element={<CamperFeatures/>} />
            <Route path="reviews" element={<CamperReviews/>}  />
        </Route >
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </Suspense>
    </div>
  )
}

export default App
