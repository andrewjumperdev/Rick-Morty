const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1 class="">
          <img class"rick-icon" src="https://img.icons8.com/color/50/000000/rick-sanchez.png"/>
          <a href="#/" class="navbar-brand">
            Rick & Morty
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <a class="nav-link" href="#/about/">
          About
        </a>
      </div>
    </div>
  `;
  return view;
};

export default Header;