import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        <Link className="link" to={`/shop/${category.title}`}>
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
