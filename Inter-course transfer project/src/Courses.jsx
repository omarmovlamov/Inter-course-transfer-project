import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses }) {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };

  const prevCourse = () => {
    setIndex((index) => {
      let i = index - 1;
      return checkIndex(i);
    });
  };

  const nextCourse = () => {
    setIndex((index) => {
      let i = index + 1;
      return checkIndex(i);
    });
  };
  const randomCourse = () => {
    let randomIndex = Math.floor(Math.random() * courses.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }

    setIndex(checkIndex(randomIndex));
  };

  return (
    <div className="Courses">
      <div>
        <h1>
          <span>MY</span> COURSES
        </h1>
      </div>
      <button id="random-btn" onClick={randomCourse}>
        Random Course show
      </button>
      <div className="Courses-card">
        <button onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="Card">
          <div className="card-title">
            <h2>{title}</h2>
            <p>{price} $</p>
          </div>
          <p>{content}</p>
        </div>
        <button onClick={nextCourse}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Courses;
