import logo from '../fdauto-logo.png'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pl-5 pr-5 mb-5 border-solid">
      <img src={logo} alt='logo' id='logo'></img>
      <div className="flex gap-10 no-underline">
        <a href="/">
          <i class="fa-solid fa-circle-plus"></i> New request
        </a>
        <a href="/">Work Queries</a>
        <a href="/">Community Links</a>
        <a href="/">Contact Information</a>
        <a href="/">Help</a>
      </div>
      <div className="pl-20 text-white">Current User</div>
    </nav>
  );
};

export default Navbar;
