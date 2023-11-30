import "../components/style/contact.css";
import HeroPage from "../components/HeroPage";
export default function Contact() {
  return (
    <>
      <HeroPage title={"Contact"} />
      <div className="contact-section container">
        <div className="contact-info">
          <div className="contact-title">
            <h1>Contact Information</h1>
          </div>
          <div className="contact-content">
            <div className="address">
              <p>Byumba, Gicumbi, Umutuzo hotel</p>
            </div>
            <div>
              <p>
                Phone: <span className="bold">+250783776068</span>
              </p>
            </div>
            <div>
              <p>
                Email: <span className="bold">sandrabakundese250@gmail.com</span>
              </p>
            </div>
            <div>
              <p>
                Website: <span className="bold">https://hermajesty.vercel.app/</span>
              </p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23206.987082573647!2d29.724768089884925!3d-2.6143594391732927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c30c875461a279%3A0x5e3baaf0d5aded1b!2sUniversity%20of%20Rwanda!5e0!3m2!1sen!2sus!4v1699383302211!5m2!1sen!2sus"
              width="100%"
              height="90%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-form-groupe">
            <form>
              <div className="form-groupe">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-groupe">
                <input type="text" placeholder="Your Email" />
              </div>
              <div className="form-groupe">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-groupe">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-groupe">
                <button className="send-btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
