import "./style/Services.css";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="services-title">
          <h1>Services</h1>
          <div className="lines">
            <span className="line-1"></span>
            <span className="line-mid"></span>
            <span className="line-2"></span>
          </div>
          <p>Click on the features to learn more</p>
        </div>
        <div className="services-content">
            <div className="services-card-wraper">
                <div className="services-card">
                    <div className="services-icon">
                        <img src="images/content/services-card1.svg" alt="" className=""></img>
                    </div>
                    <div className="services-card-title">
                        <h1>Blog</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                    </div>
                </div>
                <div className="services-card">
                <div className="services-icon">
                        <img src="images/content/services-card2.svg" alt="" className="" height="32" width="32"></img>
                    </div>
                    <div className="services-card-title">
                        <h1>Learning</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                    </div>
                </div>
                <div className="services-card">
                <div className="services-icon">
                        <img src="images/content/services-card3.svg" alt="" className="" height="32" width="32"></img>
                    </div>
                    <div className="services-card-title">
                        <h1>Community</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                    </div>                   
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
