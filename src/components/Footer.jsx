import { FaFacebookF, FaSlackHash, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 max-sm:justify-center">
        <nav className=" max-sm:mx-auto">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="max-sm:mx-auto">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title max-sm:w-full max-sm:text-center">
            Newsletter
          </h6>
          <fieldset className="flex flex-col">
            <label className="max-sm:text-center mb-3">
              Enter your email address
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item focus:outline-0"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center justify-center p-4">
        <aside className="grid-flow-col items-center">
          <FaSlackHash size={20} />
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end max-sm:mx-auto">
          <a>
            <FaTwitter size={25} />
          </a>
          <a>
            <FaYoutube size={25} />
          </a>
          <a>
            <FaFacebookF size={25} />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
