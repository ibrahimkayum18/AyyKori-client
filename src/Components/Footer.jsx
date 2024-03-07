const Footer = () => {
  return (
    <div className="bg-[#006CE4] py-12">
      <footer className="footer justify-between flex-wrap px-5 lg:px-0 pb-8 lg:w-[1120px] mx-auto  text-white">
        <nav>
          <h6 className="footer-title">Address</h6>
          <a className="link link-hover w-3/4">House- 75 Ka, Main Rd, Dhaka 1216</a>
          <a className="link link-hover">View on Maps</a>
        </nav>
        <nav>
          <h6 className="footer-title">About us</h6>
          <a className="link link-hover">Stories</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Airlines</a>
          <a className="link link-hover">Testimonials</a>
        </nav>
        <nav>
          <h6 className="footer-title">Join us</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Support</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">
            +880 1234562890 <br />
            +880 1345628980 <br />
            +880 1234562890
          </a>
          <a className="link link-hover">info@airbook.com</a>
        </nav>
      </footer>
      <footer className="flex justify-between flex-wrap px-5 lg:px-0 lg:w-[1120px] mx-auto items-center text-white  py-4 border-t border-gray-300 ">
        <aside className="items-center grid-flow-col">
          <img src="https://i.ibb.co/sqVk880/LOGO-white.png" alt="" />
        </aside>
        <p className="text-center">© Copyright AIRBOOK</p>
        <nav className="md:place-self-center md:justify-self-end mt-5 lg:mt-0">
          <div className="flex items-center gap-10">
            <a>
              <img src="https://i.ibb.co/8MxTcS2/icon.png" alt="" />
            </a>
            <a>
              <img src="https://i.ibb.co/54W6pVK/Vector.png" alt="" />
            </a>
            <a>
              <img src="https://i.ibb.co/cxfWcHq/Union.png" alt="" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
