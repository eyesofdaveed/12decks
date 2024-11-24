import Link from "next/link";
import { useState } from "react";
import appData from "@data/app.json";

const DefaultHeader = ({ contactButton }) => {
  const navItems = [];

  appData.header.menu.forEach((item, index) => {
    let s_class1 = "";

    if (item.children != 0) {
      s_class1 = "menu-item-has-children";
    }
    let newobj = Object.assign({}, item, { classes: s_class1 });
    navItems.push(newobj);
  });

  const [mobileMenu, mobileMenuToggle] = useState(false);

  const clickedMobileMenu = (e) => {
    e.preventDefault();
    mobileMenuToggle(!mobileMenu);
    document.getElementsByClassName("mobile-menu")[0].classList.toggle("open");
  };
  const clickedMobileMenuItemParent = (e) => {
    e.preventDefault();
    e.target.parentNode.classList.toggle("active");
  };

  return (
    <header className="header-style-one">
      <div className="container">
        <div className="row">
          <div className="desktop-nav" id="stickyHeader">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex-all justify-content-between">
                    <div className="header-logo">
                      <Link href="/">
                        <figure>
                          <img
                            src={appData.header.logo.image}
                            alt={appData.header.logo.alt}
                          />
                        </figure>
                      </Link>
                    </div>
                    <div className="nav-bar">
                      <ul>
                        {navItems.map((item, key) => (
                          <li
                            key={`headernav-item-${key}`}
                            className={item.classes}
                          >
                            <Link href={item.link}>{item.label}</Link>
                            {item.children != 0 && (
                              <ul className="sub-menu">
                                {item.children.map((subitem, key) => (
                                  <li
                                    key={`headernavsub-item-${key}`}
                                    className={
                                      subitem.children != 0
                                        ? "menu-item-has-children"
                                        : ""
                                    }
                                  >
                                    <Link href={subitem.link}>
                                      {subitem.label}
                                    </Link>
                                    {subitem.children != 0 && (
                                      <ul className="sub-menu">
                                        {subitem.children.map(
                                          (subsubitem, key) => (
                                            <li
                                              key={`headernavsub2-item-${key}`}
                                            >
                                              <Link href={subsubitem.link}>
                                                {subsubitem.label}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>

                      <div className="extras" style={{ marginLeft: "16px" }}>
                        <a
                          href="#"
                          id="mobile-menu"
                          className={
                            mobileMenu ? "menu-start open" : "menu-start"
                          }
                          onClick={(e) => clickedMobileMenu(e)}
                        >
                          <svg id="ham-menu" viewBox="0 0 100 100">
                            {" "}
                            <path
                              className="line line1"
                              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                            />{" "}
                            <path className="line line2" d="M 20,50 H 80" />{" "}
                            <path
                              className="line line3"
                              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                            />{" "}
                          </svg>
                        </a>
                        {contactButton != 1 && (
                          <a href="tel:+2064876747" className="theme-btn">
                            +(206) 487 6747
                            <i>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="40"
                                height="62"
                                viewBox="0 0 40 62"
                              >
                                <defs>
                                  <clipPath id="saddasdasdasdasda">
                                    <rect width="40" height="62" />
                                  </clipPath>
                                </defs>
                                <g
                                  id="Mobisdfle"
                                  clipPath="url(#saddasdasdasdasda)"
                                >
                                  <path
                                    id="Path_125"
                                    data-name="Path 1"
                                    d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z"
                                    transform="translate(1 1)"
                                  />
                                  <path
                                    id="Path_4342"
                                    data-name="Path 2"
                                    d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z"
                                    transform="translate(14 48)"
                                  />
                                </g>
                              </svg>
                            </i>
                          </a>
                        )}
                        {contactButton == 1 && (
                          <Link href="/contact" className="theme-btn simple">
                            Get a Quote
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-nav mobile-menu" id="mobile-nav">
            <div
              className="res-log"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link href="/">
                <img
                  width="200px"
                  src={appData.header.logo.image}
                  alt={appData.header.logo.alt}
                />
              </Link>
            </div>

            <ul>
              {navItems.map((item, key) => (
                <li key={`mobilenav-item-${key}`} className={item.classes}>
                  <Link
                    href={item.link}
                    onClick={
                      item.children != 0
                        ? (e) => clickedMobileMenuItemParent(e)
                        : ""
                    }
                  >
                    {item.label}
                  </Link>
                  {item.children != 0 && (
                    <ul className="sub-menu">
                      {item.children.map((subitem, key) => (
                        <li
                          key={`mobilenavsub-item-${key}`}
                          className={
                            subitem.children != 0
                              ? "menu-item-has-children"
                              : ""
                          }
                        >
                          <Link href={subitem.link}>{subitem.label}</Link>
                          {subitem.children != 0 && (
                            <ul className="sub-menu">
                              {subitem.children.map((subsubitem, key) => (
                                <li key={`mobilenavsub2-item-${key}`}>
                                  <Link href={subsubitem.link}>
                                    {subsubitem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="#"
              id="res-cross"
              onClick={(e) => clickedMobileMenu(e)}
            ></a>
          </div>

          <div className="mobile-nav desktop-menu">
            <h2>Decking and Fencing Services</h2>
            <p className="des">
              We provide full range of decking and fencing services, including
              design, installation and maintenance. We serve Greater Seattle
              Area.
            </p>

            <figure>
              <img src="/img/project1.jpeg" alt="image" />
            </figure>

            <h3>Get in touch</h3>
            <p className="num"> </p>
            <p className="adrs">Seattle, WA USA</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default DefaultHeader;
