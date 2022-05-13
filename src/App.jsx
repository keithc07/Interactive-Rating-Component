import './rate.css'
import iconStar from './icon-star.svg'
import {useState} from "react";

function ratingPage() {

  const [circle1, setCircle1] = useState("rating-number");
  const [circle2, setCircle2] = useState("rating-number");
  const [circle3, setCircle3] = useState("rating-number");
  const [circle4, setCircle4] = useState("rating-number");
  const [circle5, setCircle5] = useState("rating-number");

  const onClick1 = () => {
    setCircle1("rating-number2")
    setCircle2("rating-number")
    setCircle3("rating-number")
    setCircle4("rating-number")
    setCircle5("rating-number")
  }
  const onClick2 = () => {
    setCircle2("rating-number2")
    setCircle1("rating-number")
    setCircle3("rating-number")
    setCircle4("rating-number")
    setCircle5("rating-number")
  }
  const onClick3 = () => {
    setCircle3("rating-number2")
    setCircle2("rating-number")
    setCircle1("rating-number")
    setCircle4("rating-number")
    setCircle5("rating-number")
  }
  const onClick4 = () => {
    setCircle4("rating-number2")
    setCircle2("rating-number")
    setCircle3("rating-number")
    setCircle1("rating-number")
    setCircle5("rating-number")
  }
  const onClick5 = () => {
    setCircle5("rating-number2")
    setCircle2("rating-number")
    setCircle3("rating-number")
    setCircle4("rating-number")
    setCircle1("rating-number")
  }

  return (
    <div className="body">
      <div className="rating-box">
        <div className="rating-circle">
          <img src={iconStar} style={{ height: 15, width: 15 }} alt="icon-star" />
        </div>
        <h1 className="heading">How did we do?</h1>
        <p className="content">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <ul className="list-of-number">
          <li className={circle1} onClick={onClick1}>1</li>
          <li className={circle2} onClick={onClick2}>2</li>
          <li className={circle3} onClick={onClick3}>3</li>
          <li className={circle4} onClick={onClick4}>4</li>
          <li className={circle5} onClick={onClick5}>5</li>
        </ul>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default ratingPage
