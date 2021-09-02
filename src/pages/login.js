import "../style/login.css";

export default function Login() {
  return (
    <div className="Login">
      <div className="rectangle">
        <label for="ID" className="Id">
          ID
        </label>
        <input type="text" id="ID" className="Id"></input>
        <br />
        <label for="PASS" className="Pass">
          PASS
        </label>
        <input type="text" id="PASS" className="Pass"></input>
      </div>
      <p className="SponsorLogin">
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
    </div>
  );
}
