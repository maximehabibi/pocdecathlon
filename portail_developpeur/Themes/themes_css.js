/* Style your portal using CSS rules
   Tips: http://docs-new.apigee.com/portal-themes

   ==== Common Examples ==== */

body { /* Change the font site-wide */
  font-family: 'Work Sans';
} /* search "Base Styles" for more */

.navbar-default { /* modify the header treatment */
  background-color: #292A2A;
  border-color: #4a4a4a;
/* replace logo graphic using the "Files" tool */
} /* search "Header Menu" for more */

footer { /* style the footer */
  background-color: #292A2A;
} /* search "Footer" for more */

.btn-primary { /* primary button colors */
  color: #f8bb0b;
  background-color: #292A2A;
  border-color: #f8bb0b;
  border-radius: 3px;
} /* search "Buttons" for more */

layout-basic { /* standard content pages */
  max-width: 1040px;
}

/* ==== Base Styles ==== */
html {
  position: relative;
  min-height: 100%;
}

body {
  font-size: 15px;
  line-height: 21px;
  color: #333333;
  background-color: #ffffff;

  /* to keep content above footer */
  margin-bottom: 110px;
}

body h1, h2, h3, h4, h5 {
  font-weight: 400;
}

body h1 {
  font-size: 32px;
  margin-bottom: 16px;
}

body h2 {
  font-size: 22px;
  margin-bottom: 16px;
}

body h3 {
  font-size: 18px;
  margin-bottom: 16px;
}

body p {
  font-size: 15px;
  line-height: 23px;
}

body a {
  color: #2c9ab7;
  text-decoration: none;
}

body a:hover {
  color: #1b697d;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

body b {
  font-weight: 700;
}

/* ==== Jumbotron ====
   a billboard for drawing attention, from Bootstrap  */
.home-page-jumbotron-bg {
  background-image: url('/files/fond-page-ConvertImage.jpg');
}

.jumbotron {
  text-align: center;
  height: 500px;
  background-size: cover;
  margin: -50px -30px 0 -30px;
  border-radius: 0;
}

.jumbotron h1 {
  color: #FFFFFF;
  font-size: 40px;
  font-weight: 400;
}

.jumbotron h2 {
  color: #FFFFFF;
  font-size: 25px;
  font-weight: 400;
}

.jumbotron a, .jumbotron a:hover {
  font-size: 18px;
}

.jumbotron p {
  max-width: none;
}

.home-col {
  border-top: none;
}

/* ==== Images ==== (responsive sizing) */
img {
  display: block;
  max-width: 100%;
  height: auto;
}

/* Lists */
body ul li, body ol li {
  font-size: inherit;
  margin-bottom: 10px;
}

/* Blockquotes */
body blockquote {
  border-left: 3px solid #e2e2e2;
  background-color: #f7f7f7;
}

/* ==== Tables ==== */
body table th {
  font-size: 13px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 5px;
}

body table td {
  padding: 5px;
  vertical-align: top;
  border: 1px solid #e0e0e0;
}

/* ==== Buttons ==== */
.btn {
  border-radius: 3px;
  min-width: 150px;
}

.btn-lg {
  padding: 10px 24px;
  border-radius: 3px;
}

.btn-primary {
  border-radius: 3px;
}

.btn-primary:hover, .btn-primary:active, .btn-primary:focus {
  color: #f8bb0b;
  background-color: #3a3a3a;
  border-color: #f8bb0b;
}

.btn-info {
  color: #f8bb0b;
  background-color: transparent;
  border-color: #f8bb0b;
  border-radius: 3px;
}

.btn-info:hover, .btn-info:active, .btn-info:focus {
  color: #000000;
  background-color: rgba(255, 255, 255, 0.2);
  border-color: #292A2A;
}

.btn-default {
  color: #292A2A;
  border-color: #CDCECF;
  font-size: 14px;
}
.btn-default:hover {
  color: #292A2A;
  border-color: #CDCECF;
  font-size: 14px;
  background-color: #fafafa;
}

/* ==== Formatted Code ==== */
body pre {
  color: #5a118e;
  padding: 15px;
  border-radius: 3px;
}

body code {
  font-size: 14px;
  line-height: 21px;
  color: #5a118e;
  background-color: #f7f7f7;
  padding: 0;
  border-radius: 0;
  word-wrap: break-word;
}

/* ==== Header Menu ==== */
.navbar {
  border-radius: 0;
}

.navbar-nav {
  float: right;
}

body .navbar-brand {
  padding: 5px 15px;
}

.navbar-brand img {
  max-height: 50px;
  margin: 0;
  padding: 0;
}

body .navbar-default ul.nav li {
  margin-bottom: 0;
}

body .navbar-default ul.nav li a {
  font-size: 14px;
  color: #adadad;
}

/* Hover States */
body .navbar-default ul.nav li a:hover {
  color: #ffffff;
  background-color: #555555;
}

/* Active Menu Item */
body .navbar-default .navbar-nav > .active a {
  color: #ffffff;
  background-color: #292929;
}

body .navbar-default .navbar-nav > .active a:hover {
  color: #fdfdfd;
  background-color: #292A2A;
}

/* ==== Sidebar Menu ==== */
ul.navbar-submenu {
  background-color: transparent;
  margin-top: 30px;
  float: left;
}

ul.navbar-submenu li {
  padding: 0 10px 0 0;
  margin-bottom: 10px;
  float: none;
}

ul.navbar-submenu li a {
  color: #9b9c9d;
  letter-spacing: 0.5px;
  padding-top: 0;
  padding-bottom: 0;
}

ul.navbar-submenu li a:hover {
  background-color: transparent;
}

/* Active Sidebar Item */
ul.navbar-submenu li a.active {
  color: #f8bb0b;
  font-weight: 500;
}

/* ==== Footer ==== */
footer {
  padding: 15px 10px 15px 10px;
  margin: 25px 0 0 0;

  /* for sticky footer */
  position: absolute;
  bottom: 0;
  width: 100%;
}

footer ul.navbar-nav {
  margin: 10px auto;
  display: table;
  table-layout: fixed;
  float: none;
}

/* Footer Links Menu */
footer .navbar-nav li {
  text-align: center;
  padding: 0 10px;
  margin: 0;
  display: inline-block;
}

footer .navbar-nav li a {
  font-size: 14px;
  color: #7d7d7d;
  text-decoration: none;
  padding: 5px;
}

footer .nav a:hover {
  background-color: transparent;
}

footer p.social i {
  background-color: #292A2A;
}

.nav > li > a:focus, .nav > li > a:hover {
  background-color: transparent;
}

/* ==== Media Query ==== */

/* Small devices (tablets, 768px and up) */
@media (max-width: 768px) {
  body ul.navbar-nav {
      background-color: #292A2A;
      border-color: #4a4a4a;
      float: left;
  }

  body ul.navbar-submenu {
      background-color: transparent;
  }

  footer ul.navbar-nav {
      text-align: center;
      background-color: #292A2A;
      border-color: #4a4a4a;
      float: none;
  }

}

@import url(https://fonts.googleapis.com/css?family=Work+Sans:400,300,500,700);

body {
  font-weight: 400;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
}

.card {
  margin-top: 30px;
  border-radius: 3px;
  border: 1px solid #D3D3D3;
}

.card-title {
  font-size: 22px;
  background-color: #fafafa;
  padding: 12px 16px;
  border-radius: 3px 3px 0 0;
}

.card-body {
  padding: 16px;
  min-height: 140px;
  position: relative;
}

a.card-detail {
  text-decoration: none;
  color: #333;
}

.card:hover {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

a.card-link, a.card-link:hover {
  text-transform: uppercase;
  color: #636464;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 12px;
  position: absolute;
  font-weight: 300;
  bottom: 10px;
  display: none;
}

.card:hover a.card-link {
  display: block;
}

.key-info-popup {
  display: none;
}

@media (max-width: 991px /* @screen-sm-max */ ) {
  .row {
      margin-right: 0;
      margin-left: 0;
  }
}