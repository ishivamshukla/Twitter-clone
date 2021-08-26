import { Link } from 'react-router-dom';
import newsList from './NewsList';
import NewsItem from './NewsItem';

const News = () => {
  return (
    <div className="suggestions-news">
      <h2 className="suggestions-news__title">What's happening</h2>
      <div className="suggestions-news-articles">
        {newsList.map((el) => (
          <NewsItem key={el.id} title={el.title} image={el.image} to={el.src} />
        ))}
      </div>
      <Link className="suggestions__link" to="/explore">
        Show more
      </Link>
    </div>
  );
};

export default News;
