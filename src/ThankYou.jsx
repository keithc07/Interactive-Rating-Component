import {useContext} from 'react';
import illustrationThankYou from './illustration-thank-you.svg'
import RatingContext from "./utils/RatingContext"
  
const ThankYou = () => {
  const {ratingContext} = useContext(RatingContext)
  
  return (
    <div className="body">
      <form role="form" className="thankyou-box">
        <img src={illustrationThankYou} style={{ height: 100, width: 150 }} alt="Illustration-Thank-You" />
        <p className="rating-ty">You selected {ratingContext} out of 5</p>
        <h2 className="ty-h2">Thank you!</h2>
        <p role="content" className="ty-content">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </form>
    </div>
  )
};
  
export default ThankYou;