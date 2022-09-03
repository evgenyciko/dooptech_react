import "./style/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-title">
          <h1>Testimonials</h1>
          <div className="lines">
            <span className="line-1"></span>
            <span className="line-mid"></span>
            <span className="line-2"></span>
          </div>
        </div>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active test">
              <div className="carousel-1">
                <div className="carousel-img">
                  <img src="images/content/carousel-ava.png" alt="" />
                </div>
                <div className="carousel-title">
                  <img src="images/content/carousel-quote.svg" alt="" />
                  <p>
                    Able an hope of body. Any nay shyness article matters own
                    removal nothing his forming. Gay own additions education
                    satisfied the perpetual. If he cause manor happy. Without
                    farther she exposed saw man led. Along on happy could cease
                    green oh.
                  </p>
                  <span>Syahid Wahyudi</span>
                  <span className="bullet">&#8226;</span>
                  <span>CEO DOOP TECH</span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-1">
                <div className="carousel-img">
                  <img src="images/content/carousel-ava.png" alt="" />
                </div>
                <div className="carousel-title">
                  <img src="images/content/carousel-quote.svg" alt="" />
                  <p>
                    Able an hope of body. Any nay shyness article matters own
                    removal nothing his forming. Gay own additions education
                    satisfied the perpetual. If he cause manor happy. Without
                    farther she exposed saw man led. Along on happy could cease
                    green oh.
                  </p>
                  <span>Syahid Wahyudi</span>
                  <span className="bullet">&#8226;</span>
                  <span>CEO DOOP TECH</span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-1">
                <div className="carousel-img">
                  <img src="images/content/carousel-ava.png" alt="" />
                </div>
                <div className="carousel-title">
                  <img src="images/content/carousel-quote.svg" alt="" />
                  <p>
                    Able an hope of body. Any nay shyness article matters own
                    removal nothing his forming. Gay own additions education
                    satisfied the perpetual. If he cause manor happy. Without
                    farther she exposed saw man led. Along on happy could cease
                    green oh.
                  </p>
                  <span>Syahid Wahyudi</span>
                  <span className="bullet">&#8226;</span>
                  <span>CEO DOOP TECH</span>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev carousel-icon-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-next-iconn" aria-hidden="true">
              <img src="images/content/carousel-nav.svg" alt="" />
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next carousel-icon-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-iconn" aria-hidden="true">
              <img src="images/content/carousel-nav.svg" alt="" />
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
