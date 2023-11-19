import React from 'react';

const Navbar = () => {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Navbar
          </a>
        </div>
        <div>
          <button className="btn btn-info">Blog</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
