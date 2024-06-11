import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Jobarouter</h1>
          {/* NavLink is basically an anchor tag inbuilt into react */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>
      <main>
        {/*  The outlet component allows us to render those component routes embedded in the root layout */}
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
