import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage, AboutPage, ContactPage, PricingPage, BikePage, BikesPage, NotFoundPage} from "./pages/index.js";
import Layout from './pages/Layout.js';

function App() {
  return (
	  <BrowserRouter>
			<Routes> 
				<Route element={<Layout />}> 
					<Route path="/" element={<HomePage/>}/>

					<Route path="/about" element={<AboutPage/>} />

					<Route path="/contact" element={<ContactPage/>} />
					
					<Route path="/pricing" element={<PricingPage/>} />

					<Route path="/bikes">
						<Route index element={<BikesPage />} />
						<Route path=":bikeId" element={<BikePage />} />
					</Route>
				</Route>

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
	  </BrowserRouter>
  );
}

export default App;

