import {useState, React} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import RatingPage from "./Rating";
import ThankYou from "./ThankYou";
import RatingContext from "./utils/RatingContext"

function App() {
	
	const [ratingContext, setRatingContext] = useState([])

	return (
		<>
			<RatingContext.Provider value={{ratingContext, setRatingContext}}>
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={<RatingPage/>}/>
						<Route exact path="/thankyou" element={<ThankYou/>}/>
					</Routes>
				</BrowserRouter>
			</RatingContext.Provider>
		</>
	);
}

export default App;
