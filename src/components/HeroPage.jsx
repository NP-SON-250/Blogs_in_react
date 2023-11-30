import "../components/style/Hero.css";
export default function HeroPage({ title }) {
  return (
    <>
      <div id="hero" className="hero-page-section">
        <div className="hero-page-content container">
          <div className="hero-page-title">
            <h2>{title}</h2>
          </div>
          <div className="sub-title">
            <p>
              Home
              <span className="Next">
                {" "}
                <iconify-icon icon="grommet-icons:form-next"></iconify-icon>{" "}
              </span>
              <span>{title}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
