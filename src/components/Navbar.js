const Navbar = () => {
  return (
    <nav className="flex justify-between items-center m-5 p-10 border-2 border-black">
      <div className="pr-20">FDautO</div>
      <div className="flex gap-10 no-underline">
        <a href="/">
          <i class="fa-solid fa-circle-plus"></i> New request
        </a>
        <a href="/">Work Queries</a>
        <a href="/">Community Links</a>
        <a href="/">Contact Information</a>
        <a href="/">Help</a>
      </div>
      <div className="pl-20">Current User</div>
    </nav>
  );
};

export default Navbar;
