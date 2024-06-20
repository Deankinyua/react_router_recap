import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

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
          <NavLink to="careers">Careers</NavLink>
        </nav>
        <Breadcrumbs></Breadcrumbs>
      </header>
      <main>
        {/*  The outlet component allows us to render those component routes embedded in the root layout */}
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
