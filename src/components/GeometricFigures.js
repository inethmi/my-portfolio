import React from "react";
import "./GeometricFigures.css";

const GeometricFigures = () => {
  return (
    <div className="container">
      <div className="try">
        <div id="Square1" className="figure anim">
          <div id="square1_2" className="identical_1 anim"></div>
          <div id="square1_1" className="anim">
            <div id="square1_1_1" className="identical_1 anim"></div>
          </div>
        </div>

        <div id="Square2" className="figure anim">
          <div id="circle1" className="anim">
            <div id="circle1_1" className="anim">
              <div id="circle1_1_1" className="anim"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="try">
        <div id="Square3" className="figure anim">
          <div id="circle2" className="identical_2 anim"></div>
          <div id="circle3" className="identical_2 anim"></div>
          <div id="circle4" className="anim">
            <div id="circle4_1" className="anim"></div>
          </div>
        </div>

        <div id="Square4" className="figure anim">
          <div id="Triangle1" className="anim">
            <div id="Triangle1_1" className="anim"></div>
          </div>

          <div id="square4_1" className="anim">
            <div id="square4_1_1" className="anim"></div>
          </div>
        </div>
      </div>

      <div className="why">
        <div id="Square1" className="figure_2 anim">
          <div id="square1_2" className="identical_1 anim"></div>
          <div id="square1_1" className="anim">
            <div id="square1_1_1" className="identical_1 anim"></div>
          </div>
        </div>

        <div id="Square2" className="figure_2 anim">
          <div id="circle1" className="anim">
            <div id="circle1_1" className="anim">
              <div id="circle1_1_1" className="anim"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="why">
        <div id="Square3" className="figure_2 anim">
          <div id="circle2" className="identical_2 anim"></div>
          <div id="circle3" className="identical_2 anim"></div>
          <div id="circle4" className="anim">
            <div id="circle4_1" className="anim"></div>
          </div>
        </div>

        <div id="Square4" className="figure_2 anim">
          <div id="Triangle1" className="anim">
            <div id="Triangle1_1" className="anim"></div>
          </div>

          <div id="square4_1" className="anim">
            <div id="square4_1_1" className="anim"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeometricFigures;
