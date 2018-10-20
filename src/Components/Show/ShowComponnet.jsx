import React from "react";

// import "./Show.css";

const Show = props => {
  let details = {
    name: "Black",
    runTime: "2 hrs 37 mins",
    shows: {
      "QFX jai nepal": ["11 am", "2pm", "5pm"],
      "QFX Civil Mall": ["11 am", "2pm", "5pm"],
      "QFX labim": ["11 am", "2pm", "5pm"],
      "QFX kumari ": ["11 am", "2pm", "5pm"],
      "QFX Chhaya Center": ["11 am", "2pm", "5pm"]
    }
  };
  console.log("dasdas", this.prop);

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <h1>Manmarziyaan</h1>
            </div>
            <div>
              <p>Runtime: 2 Hrs 37 mins</p>
            </div>
          </div>
          <div>
            <img src="https://www.qfxcinemas.com/Home/GetImage?EventID=7310" height="300px" width="300px" />
          </div>
        </div>
        <div>
          <div>
            <div data-ride="carousel" data-interval="false">
              <div role="listbox">
                <div>Today</div>
                <div>Tomorrow</div>
                <div>Wed (Sep 19, 2018)</div>
                <div>Thu (Sep 20, 2018)</div>
              </div>
            </div>
          </div>
        </div>
        <input name="TheatreName" type="hidden" value="" />
        <div>
          <div>
            <div>
              <h2>QFX Jai Nepal</h2>
            </div>
            <div>
              <div>
                <div>Shows over for QFX Jai Nepal</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>QFX LABIM Mall</h2>
            </div>
            <div>
              <div>
                <div>Shows over for QFX LABIM Mall</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>QFX Civil Mall</h2>
            </div>
            <div>
              <div>
                <div>Shows over for QFX Civil Mall</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>QFX Chhaya Center</h2>
            </div>
            <div>
              <div>
                <div>Shows over for QFX Chhaya Center</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>QFX Kumari</h2>
            </div>
            <div>
              <div>
                <div>Shows over for QFX Kumari</div>
              </div>
            </div>
          </div>
          <div>
            <div>Sold Out</div>
            <div>Filling Fast</div>
            <div>Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
