import Search from './Search';
import News from './News';

const Suggestions = () => {
  return (
    <aside className="suggestions">
      <div className="suggestions-container">
        <Search />
        <News />
      </div>
    </aside>
  );
};

export default Suggestions;
