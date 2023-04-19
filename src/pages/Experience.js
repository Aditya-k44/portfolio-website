import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from "@material-ui/icons";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement 
         className="vertical-timeline-element-education" 
         date="2000-2010"
         iconStyle={{ background: "#3e497a", color: "#fff"}}
         icon={<School />}
         >
          <h3 className="vertical-timeline-element-title">
            S.B.High School, Aurangabad, Maharashtra
          </h3>
          <p>My Schooling</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2000-2010"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            MIT Polytechnic, Aurangabad, Maharashtra
          </h3>
          <p>My Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2014-2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            PVPIT, Pune, Maharashtra
          </h3>
          <p>Bachlor's Degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2019-2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Rendered Ideas Softgame Pvt. Lim., Mumbai, Maharashtra
          </h3>
          <p>Porting Developer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
