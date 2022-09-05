import "./style/Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-wraper">
          <div className="footer-content">
            <div className="logo-image">
              <img
                src="images/content/logogakpakeaja.png"
                alt=""
                className=""
              ></img>
            </div>
            <div className="title">
              <p>
                Excellence decisively nay man yet impression for contrasted
                remarkably. There spoke happy for you are out. Fertile how old
                address did showing because sitting replied six. Had arose guest
                visit going off child she new. Please write your email and get
                our amazing updates, news and support
              </p>
            </div>
            <div className="sosmed-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2137 13.3283L17.8356 9.23311H13.9452V6.5768C13.9452 5.45617 14.4877 4.3632 16.2301 4.3632H18V0.876797C18 0.876797 16.3945 0.600098 14.8603 0.600098C11.6548 0.600098 9.56164 2.56189 9.56164 6.11194V9.23311H6V13.3283H9.56164V23.2285C10.2767 23.342 11.0082 23.4001 11.7534 23.4001C12.4986 23.4001 13.2301 23.342 13.9452 23.2285V13.3283H17.2137Z"
                  fill="white"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.057 7.18066C21.0663 7.39186 21.0663 7.59346 21.0663 7.80466C21.0755 14.2079 16.3711 21.5999 7.76781 21.5999C5.23036 21.5999 2.73921 20.8415 0.599976 19.4207C0.970406 19.4687 1.34084 19.4879 1.71127 19.4879C3.81346 19.4879 5.86009 18.7583 7.51777 17.4047C5.51744 17.3663 3.7579 16.0127 3.14669 14.0351C3.8505 14.1791 4.57284 14.1503 5.25814 13.9487C3.08186 13.5071 1.51679 11.5199 1.50753 9.20626C1.50753 9.18706 1.50753 9.16786 1.50753 9.14866C2.15578 9.52306 2.88738 9.73426 3.62825 9.75346C1.58162 8.33266 0.942624 5.50065 2.18357 3.28304C4.56358 6.31665 8.06415 8.15026 11.824 8.35186C11.4443 6.67185 11.9629 4.90545 13.1761 3.71505C15.056 1.88144 18.0195 1.97744 19.7975 3.92625C20.844 3.71505 21.8534 3.31184 22.7702 2.74544C22.4183 3.86865 21.6867 4.81905 20.7144 5.42385C21.6404 5.30865 22.548 5.04945 23.4 4.66545C22.7702 5.64465 21.9738 6.48945 21.057 7.18066Z"
                  fill="white"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_29_132)">
                  <path
                    d="M12 2.16276C15.206 2.16276 15.5824 2.17705 16.8496 2.23422C18.0215 2.28662 18.655 2.48194 19.079 2.64867C19.6411 2.8678 20.0413 3.12505 20.4605 3.54426C20.8797 3.96348 21.1417 4.36364 21.3561 4.92576C21.5181 5.34974 21.7182 5.98333 21.7706 7.15522C21.8277 8.42239 21.842 8.79873 21.842 12.0048C21.842 15.2108 21.8277 15.5871 21.7706 16.8543C21.7182 18.0262 21.5228 18.6598 21.3561 19.0838C21.137 19.6459 20.8797 20.046 20.4605 20.4653C20.0413 20.8845 19.6411 21.1465 19.079 21.3609C18.655 21.5228 18.0215 21.7229 16.8496 21.7753C15.5824 21.8325 15.206 21.8468 12 21.8468C8.79397 21.8468 8.41763 21.8325 7.15046 21.7753C5.97857 21.7229 5.34498 21.5276 4.921 21.3609C4.35888 21.1417 3.95872 20.8845 3.5395 20.4653C3.12029 20.046 2.85828 19.6459 2.64391 19.0838C2.48194 18.6598 2.28186 18.0262 2.22946 16.8543C2.17229 15.5871 2.158 15.2108 2.158 12.0048C2.158 8.79873 2.17229 8.42239 2.22946 7.15522C2.28186 5.98333 2.47718 5.34974 2.64391 4.92576C2.86304 4.36364 3.12029 3.96348 3.5395 3.54426C3.95872 3.12505 4.35888 2.86304 4.921 2.64867C5.34498 2.4867 5.97857 2.28662 7.15046 2.23422C8.41763 2.17229 8.79874 2.16276 12 2.16276ZM12 0C8.74157 0 8.33188 0.0142914 7.05042 0.0714569C5.77372 0.128622 4.90195 0.333466 4.13974 0.628821C3.34895 0.933704 2.68202 1.34815 2.01509 2.01509C1.34815 2.68202 0.938468 3.35371 0.628821 4.13974C0.333466 4.90194 0.128623 5.77372 0.071457 7.05518C0.0142914 8.33188 0 8.74156 0 12C0 15.2584 0.0142914 15.6681 0.071457 16.9496C0.128623 18.2263 0.333466 19.0981 0.628821 19.865C0.933705 20.6558 1.34815 21.3227 2.01509 21.9897C2.68202 22.6566 3.35371 23.0663 4.13974 23.3759C4.90195 23.6713 5.77372 23.8761 7.05519 23.9333C8.33665 23.9905 8.74157 24.0048 12.0048 24.0048C15.268 24.0048 15.6729 23.9905 16.9544 23.9333C18.2311 23.8761 19.1028 23.6713 19.8698 23.3759C20.6606 23.0711 21.3275 22.6566 21.9945 21.9897C22.6614 21.3227 23.0711 20.6511 23.3807 19.865C23.6761 19.1028 23.8809 18.231 23.9381 16.9496C23.9953 15.6681 24.0095 15.2632 24.0095 12C24.0095 8.7368 23.9953 8.33188 23.9381 7.05042C23.8809 5.77372 23.6761 4.90194 23.3807 4.13497C23.0758 3.34418 22.6614 2.67725 21.9945 2.01032C21.3275 1.34339 20.6558 0.933704 19.8698 0.624057C19.1076 0.328702 18.2358 0.123859 16.9544 0.0666931C15.6681 0.0142914 15.2584 0 12 0Z"
                    fill="white"
                  />
                  <path
                    d="M12 2.16276C15.206 2.16276 15.5824 2.17705 16.8496 2.23422C18.0215 2.28662 18.655 2.48194 19.079 2.64867C19.6411 2.8678 20.0413 3.12505 20.4605 3.54426C20.8797 3.96348 21.1417 4.36364 21.3561 4.92576C21.5181 5.34974 21.7182 5.98333 21.7706 7.15522C21.8277 8.42239 21.842 8.79873 21.842 12.0048C21.842 15.2108 21.8277 15.5871 21.7706 16.8543C21.7182 18.0262 21.5228 18.6598 21.3561 19.0838C21.137 19.6459 20.8797 20.046 20.4605 20.4653C20.0413 20.8845 19.6411 21.1465 19.079 21.3609C18.655 21.5228 18.0215 21.7229 16.8496 21.7753C15.5824 21.8325 15.206 21.8468 12 21.8468C8.79397 21.8468 8.41763 21.8325 7.15046 21.7753C5.97857 21.7229 5.34498 21.5276 4.921 21.3609C4.35888 21.1417 3.95872 20.8845 3.5395 20.4653C3.12029 20.046 2.85828 19.6459 2.64391 19.0838C2.48194 18.6598 2.28186 18.0262 2.22946 16.8543C2.17229 15.5871 2.158 15.2108 2.158 12.0048C2.158 8.79873 2.17229 8.42239 2.22946 7.15522C2.28186 5.98333 2.47718 5.34974 2.64391 4.92576C2.86304 4.36364 3.12029 3.96348 3.5395 3.54426C3.95872 3.12505 4.35888 2.86304 4.921 2.64867C5.34498 2.4867 5.97857 2.28662 7.15046 2.23422C8.41763 2.17229 8.79874 2.16276 12 2.16276Z"
                    fill="white"
                  />
                  <path
                    d="M12 5.84033C8.59863 5.84033 5.83563 8.59857 5.83563 12.0047C5.83563 15.4108 8.59387 18.169 12 18.169C15.4061 18.169 18.1643 15.4108 18.1643 12.0047C18.1643 8.59857 15.4061 5.84033 12 5.84033ZM12 16.0015C9.78958 16.0015 7.99839 14.2103 7.99839 11.9999C7.99839 9.78952 9.78958 7.99833 12 7.99833C14.2104 7.99833 16.0016 9.78952 16.0016 11.9999C16.0016 14.2103 14.2104 16.0015 12 16.0015Z"
                    fill="#191919"
                  />
                  <path
                    d="M18.4073 7.03114C19.2018 7.03114 19.846 6.38703 19.846 5.59247C19.846 4.79792 19.2018 4.15381 18.4073 4.15381C17.6127 4.15381 16.9686 4.79792 16.9686 5.59247C16.9686 6.38703 17.6127 7.03114 18.4073 7.03114Z"
                    fill="#191919"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_29_132">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_29_133)">
                  <path
                    d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_29_133">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="footer-right-wrapper">
            <div className="footer-link">
              <h1>QUICK LINKS</h1>
              <div className="lines">
                <span className="line-1"></span>
                <span className="line-2"></span>
              </div>
              <a href="/" className="">
                FEATURES
              </a>
              <a href="/" className="">
                COMMUNITY
              </a>
              <a href="/" className="">
                ABOUT US
              </a>
              <a href="/" className="">
                BLOG
              </a>
              <a href="/" className="">
                TESTIMONIALS
              </a>
            </div>
            <div className="footer-contact">
              <h1>CONTACT US</h1>
              <div className="lines">
                <span className="line-1"></span>
                <span className="line-2"></span>
              </div>
              <div className="address">
                <div className="contant-wraper">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.73062 5.52893C6.68822 6.49664 6 7.95275 6 9.92763C6 11.2166 6.76018 12.8912 7.91015 14.6267C9.03167 16.3192 10.4086 17.9015 11.4054 18.9671C11.7356 19.32 12.2644 19.32 12.5946 18.9671C13.5914 17.9015 14.9683 16.3192 16.0898 14.6267C17.2398 12.8912 18 11.2166 18 9.92763C18 7.95275 17.3118 6.49664 16.2694 5.52893C15.2159 4.55098 13.7222 4 12 4C10.2778 4 8.78405 4.55098 7.73062 5.52893ZM6.36989 4.06319C7.84995 2.68917 9.85619 2 12 2C14.1438 2 16.15 2.68917 17.6301 4.06319C19.1212 5.44746 20 7.45517 20 9.92763C20 11.8482 18.9373 13.9503 17.757 15.7314C16.5483 17.5555 15.0877 19.2297 14.0551 20.3334C12.9345 21.5313 11.0655 21.5313 9.94488 20.3334C8.91232 19.2297 7.45167 17.5555 6.24296 15.7314C5.06271 13.9503 4 11.8482 4 9.92763C4 7.45517 4.87878 5.44746 6.36989 4.06319Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7ZM8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p>
                  Jalan Antasari Gang 2 Samarinda Kalimantan Timur Indonesia
                </p>
              </div>
              <div className="hp">
                <div className="contant-wraper">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.45783 2.0472C4.39489 1.98427 4.29285 1.98427 4.22991 2.0472L2.83876 3.43835C1.99478 4.28233 1.76286 5.5613 2.25676 6.64788C4.08932 10.6795 7.32049 13.9107 11.3521 15.7432C12.4387 16.2371 13.7177 16.0052 14.5616 15.1612L15.9528 13.7701C16.0157 13.7072 16.0157 13.6051 15.9528 13.5422L14.0814 11.6708C14.0323 11.6217 13.9574 11.6095 13.8953 11.6406L12.8568 12.1599C11.5777 12.7994 10.0329 12.5487 9.02173 11.5375L6.46249 8.97827C5.4513 7.96709 5.20062 6.42229 5.84015 5.14323L6.35944 4.10466C6.39046 4.04261 6.3783 3.96767 6.32925 3.91862L4.45783 2.0472ZM2.8157 0.632991C3.65968 -0.210997 5.02806 -0.210997 5.87205 0.632991L7.74346 2.5044C8.40123 3.16218 8.5643 4.16706 8.14829 4.99908L7.629 6.03766C7.37446 6.54674 7.47424 7.16159 7.8767 7.56406L10.4359 10.1233C10.8384 10.5258 11.4533 10.6255 11.9623 10.371L13.0009 9.85171C13.8329 9.4357 14.8378 9.59877 15.4956 10.2565L17.367 12.128C18.211 12.9719 18.211 14.3403 17.367 15.1843L15.9759 16.5755C14.5424 18.0089 12.3701 18.4029 10.5245 17.564C6.05267 15.5313 2.46869 11.9473 0.436029 7.47549C-0.402854 5.62995 -0.00893557 3.45762 1.42455 2.02414L2.8157 0.632991Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p>+62 8213726218</p>
              </div>
              <div className="email">
                <div className="contant-wraper">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 7C1 5.34315 2.34315 4 4 4H20C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7ZM4 6C3.44772 6 3 6.44772 3 7V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7C21 6.44772 20.5523 6 20 6H4Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.0006 6.42771L21.6901 6.72384C21.6572 6.75515 21.6223 6.7842 21.5855 6.81077L12.5855 13.3108C12.236 13.5632 11.764 13.5632 11.4145 13.3108L2.41451 6.81077C2.35891 6.77062 2.3076 6.72486 2.26137 6.6742L1.99111 6.37808L3.46838 5.02986L3.6691 5.2498L12 11.2666L20.3593 5.22931L20.6205 4.98022L22.0006 6.42771Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p>support@dooptech.com</p>
              </div>
            </div>
            <div className="footer-subscribe">
              <h1>SUBSCRIBE</h1>
              <div className="lines">
                <span className="line-1"></span>
                <span className="line-2"></span>
              </div>
              <p>We don't spam so don't worry</p>
              <div className="subscribe-form">
                <div className="content">
                  <form className="subscription">
                    <input
                      className="add-email"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <button className="submit-email" type="button">
                      <span className="before-submit">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.7071 1.29292C22.9963 1.58206 23.0802 2.01811 22.9192 2.39395L14.3477 22.3939C14.1842 22.7756 13.8018 23.0164 13.387 22.9992C12.9722 22.9819 12.6112 22.7101 12.4799 22.3163L9.78086 14.2192L1.68378 11.5201C1.2899 11.3889 1.01812 11.0278 1.00087 10.613C0.983615 10.1982 1.22448 9.81586 1.60609 9.65231L21.6061 1.08088C21.9819 0.919809 22.418 1.00378 22.7071 1.29292ZM4.81146 10.4545L10.8877 12.4799C11.1863 12.5795 11.4206 12.8138 11.5201 13.1124L13.5455 19.1886L20.0961 3.90397L4.81146 10.4545Z"
                            fill="white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.2071 3.20718L11.2071 14.2072L9.79291 12.793L20.7929 1.79297L22.2071 3.20718Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span className="after-submit">
                        Thank you for subscribing!
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;