import "../style/linkPage.css";
export default function LinkPage() {
  return (
    <div className="LinkPage">
      <var className="NewLink">
        <p>ADD NEW LİNK</p>
      </var>
      <div className="dropdown">
        <button onClick={Dropdown} className="Triple">
          <img className="Dot" src="Dot.png" alt="Dot" />
          <br />
          <img className="Dot" src="Dot.png" alt="Dot" />
          <br />
          <img className="Dot" src="Dot.png" alt="Dot" />
        </button>
        <div id="myDropdown" className="DropdownContent">
          <a href="#app" className="Video">
            <p>VİDEO DEĞİŞTİR</p>
          </a>
          <a href="#app" className="Muzik">
            <p>MÜZİK EKLE</p>
          </a>
        </div>
      </div>
      <div className="Link">
        <var className="HeadText">
          ÜYELİK FORMU
          <img className="PenHead" src="pen.png" alt="Pen" />
        </var>
        <var>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <br />
          <br />
          <img className="PenText" src="pen.png" alt="Pen" />
          <img className="Trash" src="icon.png" alt="Trash" />
        </var>
        <var className="TextInput">
          <input className="Text" type="url" />
        </var>
      </div>
      <div className="Link">
        <var className="HeadText">
          GÜNCEL ETKİNLİKLER
          <img className="PenHead" src="pen.png" alt="Pen" />
        </var>
        <var>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <br />
          <br />
          <img className="PenText" src="pen.png" alt="Pen" />
          <img className="Trash" src="icon.png" alt="Trash" />
        </var>
        <var className="TextInput">
          <input className="Text" type="url" />
        </var>
      </div>
      <div className="Link">
        <var className="HeadText">
          BİZ KİMİZ
          <img className="PenHead" src="pen.png" alt="Pen" />
        </var>
        <var>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <br />
          <br />
          <img className="PenText" src="pen.png" alt="Pen" />
          <img className="Trash" src="icon.png" alt="Trash" />
        </var>
        <var className="TextInput">
          <input className="Text" type="url" />
        </var>
      </div>
      <div className="Link">
        <var className="HeadText">
          İLETİŞİM
          <img className="PenHead" src="pen.png" alt="Pen" />
        </var>
        <var>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <br />
          <br />
          <img className="PenText" src="pen.png" alt="Pen" />
          <img className="Trash" src="icon.png" alt="Trash" />
        </var>
        <var className="TextInput">
          <input className="Text" type="url" />
        </var>
      </div>
    </div>
  );
}

function Dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".Triple")) {
    var dropdowns = document.getElementsByClassName("DropdownContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
