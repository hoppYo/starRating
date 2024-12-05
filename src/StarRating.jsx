

// StarRating.jsx
import { range } from './util';

function StarRating({ rating }) {
  /*
    Generate a range of numbers from 0 to `rating - 1`
    using the `range` function. For each number,
    render a gold star.
  */
  return (
    <div className="star-wrapper">
      {range(rating).map(() => (
        <img
          key={crypto.randomUUID()}
          alt=""
          className="gold-star"
          src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        />
      ))}
    </div>
  );
}

export default StarRating;
