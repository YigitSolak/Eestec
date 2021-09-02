import "../style/home.css";

export default function Home() {
  return (
    <div className="Home">
      <p className="Buttons">
        <img src="LC_Izmir_1.png" alt="Logo" className="Logo" />
        <p className="Video">
          <video
            controls
            autoPlay
            loop
            muted
            src="EESTECHourVideo.mp4"
            type="video/mp4"
          />
        </p>
        <br />
        <button>ÜYELİK FORMU</button>
        <br />
        <button>BİZ KİMİZ?</button>
        <br />
        <button>GÜNCEL ETKİNLİKLERİMİZ</button>
        <br />
        <button>İLETİŞİM</button>
        <br />

        <img src="insta.png" alt="Insta" className="SocialMedia" />
        <img src="linked.png" alt="Insta" className="SocialMedia" />
        <img src="face.png" alt="Insta" className="SocialMedia" />
        <img src="mail.png" alt="Insta" className="SocialMediaBig" />
        <br />
        <p className="Sponsor">
          Sponsored by
          <img
            src="wallids-b.png"
            alt="Wallids"
            style={{
              paddingLeft: 10,
              width: 100,
              height: 35,
              verticalAlign: "middle"
            }}
          />
        </p>
      </p>
    </div>
  );
}
