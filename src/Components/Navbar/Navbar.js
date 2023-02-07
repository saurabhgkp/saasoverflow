import React from 'react'

const Navbar = () => {
  return (
    <>
      <section class="fixed-top navigation">
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo"/></a>
      <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
     
      <div class="collapse navbar-collapse text-center" id="navbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#feature">Feature</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="service.html">Service</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#team">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#pricing">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
        <a href="#" class="btn btn-primary ml-lg-3 primary-shadow">Try Free</a>
      </div>
    </nav>
  </div>
</section>
    </>
  )
}

export default Navbar