import { Link } from 'react-router-dom';
import PlaceholderImage from '../../assets/icons/placeholder.svg';

const NewsItem = ({ title, to, image, alt }) => {
  return (
    <article className="suggestions-news-item">
      <Link className="suggestions-news-item__title" to={to}>
        {title}
      </Link>
      <img className="suggestions-news-item__img" src={image} alt={alt} />
    </article>
  );
};

NewsItem.defaultProps = {
  title: '[title]',
  to: '#',
  image: PlaceholderImage,
  alt: 'image',
};

export default NewsItem;
