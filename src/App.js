import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage, AboutPage, ContactPage, PricingPage, BikePage, BikesPage, NotFoundPage} from "./pages/index.js";

function App() {
  return (
	  <BrowserRouter>
			<Routes> 
				<Route path="/" element={<HomePage/>}/>

				<Route path="/about" element={<AboutPage/>} />

				<Route path="/pricing" element={<ContactPage/>} />
				
				<Route path="contact" element={<PricingPage/>} />

				<Route path="/bikes">
					<Route index element={<BikesPage />} />
					<Route path=":bikeId" element={<BikePage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
	  </BrowserRouter>
  );
}

export default App;

