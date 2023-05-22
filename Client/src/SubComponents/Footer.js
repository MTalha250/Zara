import React from "react";
function Footer() {
  return (
    <div
      id="footer"
      className="w-full flex flex-col items-center justify-center h-screen"
    >
      <p className="my-3">JOIN OUR NEWSLETTER</p>
      <p className="my-3">
        <a href="#" className="no-underline text-black mx-2 text-sm font-light">
          TIKTOK
        </a>
        <a href="#" className="no-underline text-black mx-2 text-sm font-light">
          INSTAGRAM
        </a>
        <a href="#" className="no-underline text-black mx-2 text-sm font-light">
          FACEBOOK
        </a>
        <a href="#" className="no-underline text-black mx-2 text-sm font-light">
          TWITTER
        </a>
        <a href="#" className="no-underline text-black mx-2 text-sm font-light">
          PINTEREST
        </a>
        <a href="#" className="no-underline text-black mx-2 text-sm font-light">
          YOUTUBE
        </a>
        <a href="#" className="no-underline text-black mx-2 text-sm font-light">
          SPOTIFY
        </a>
      </p>
      <p className="my-3">
        <a href="#" className="no-underline text-black mx-2 text-sm font-light">
          COOKIES SETTINGS
        </a>
        <a href="#" className="no-underline text-black mx-2 text-sm font-light">
          PRIVACY AND COOKIES POLICY
        </a>
        <a href="#" className="no-underline text-black mx-2 text-sm font-light">
          TERM OF USE
        </a>
      </p>
    </div>
  );
}

export default Footer;
