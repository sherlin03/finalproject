import React from "react";
import "./user.css";

const UserFooter = () => {
  return (
    <>
      <div>test</div>
      <footer className="bg-dark  mt-5">
        <div className="container text-light">
          <div className="row">
            <div className="col-sm-3 mt-3">
              <h3 className="text-decoration-underline ">Product Type</h3>

              <ul>
                <li>
                  <a
                    href="http://127.0.0.1:5500/fruits.html"
                    className="text-light "
                  >
                    Fruits
                  </a>
                </li>
                <li>
                  <a
                    href="http://127.0.0.1:5500/veg.html"
                    className="text-light "
                  >
                    Vegetables
                  </a>
                </li>
                <li>
                  <a
                    href="http://127.0.0.1:5500/ice.html"
                    className="text-light "
                  >
                    Ice Creams
                  </a>
                </li>
                <li>
                  <a
                    href="http://127.0.0.1:5500/chocolate.html"
                    className="text-light "
                  >
                    Chocolates And Biscuts
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 mt-3">
              <h3 className="text-decoration-underline ">Quick Links</h3>
              <ul>
                <li>
                  <a
                    href="http://127.0.0.1:5500/index.html"
                    className="text-light  fa fa-home"
                  >
                    {" "}
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="http://127.0.0.1:5500/about.html"
                    className="text-light  fa fa-info-circle"
                  >
                    {" "}
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#product"
                    className="text-light fa fa-shopping-cart "
                  >
                    {" "}
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="http://127.0.0.1:5500/contact.html"
                    className="text-light fa fa-address-card"
                  >
                    {" "}
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 ">
              <h2 className="mt-sm-3 text-decoration-underline">
                Follow Links
              </h2>
              <ul>
                <li>
                  <i class="fa fa-facebook-f" style={{ color: "blue" }}></i>
                  <a href="https://m.facebook.com/profile.php/?id=100006108738837">
                    {" "}
                    Facebook
                  </a>
                </li>
                <li>
                  <i class="fa fa-whatsapp" style={{ color: "green" }}></i>
                  <a href="https://wa.me/9585471103"> Whatsapp</a>
                </li>
                <li>
                  <i class="fa fa-instagram" style={{ color: "red" }}></i>
                  <a href="https://www.instagram.com/michael_sherlin_s/">
                    {" "}
                    Instagram
                  </a>
                </li>
                <li>
                  <i class="fa fa-envelope" style={{ color: "red" }}></i>
                  <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZcRDvstqpVbdnBfNRClJzFMwmQCdLPMRkHCCsfhNzGDkGgKKQJQdWBcJNWJHbFwWwKqrL">
                    {" "}
                    Gmail
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 mt-3">
              <h3 className="text-decoration-underline ">Contact</h3>
              <ul>
                <li>
                  SM Market,
                  <br />
                  Rajavoor ,<br />
                  Kanyakumari, <br />
                  Mob: +91 9585471103 Email:michaelsherlin03@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default UserFooter;
