import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

export default function NavBar({ query, movies, setQuery }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} setQuery={setQuery} />
      <NumResults movies={movies} />
    </nav>
  );
}
