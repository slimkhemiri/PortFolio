import React from "react";
import { Timeline } from "@material-ui/lab";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import CodeIcon from "@material-ui/icons/Code";
import SchoolIcon from "@material-ui/icons/School";
// import GavelIcon from "@material-ui/icons/Gavel";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const Education = () => {
  return (
    <div id="education">
      <div className="Container">
        {/******** Main Timeline *********/}
        <div className="SectionTitle">Education</div>
        <Timeline align="alternate" class="bigTimeline">
          {/* Bootcamp Info */}
          <TimelineItem>
            <TimelineOppositeContent>
              <div class="timelineDate">2022 - Current</div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot class="blueTimeline">
                <CodeIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div class="timelineHeading">
                Self-Taught Fullstack JavaScript Developer
              </div>
              <div class="timelineSubheading">4+ months</div>
              <div class="timelineText">
                Hands-on experience designing and developing full-stack web
                applications while using solid Javascript concepts to create
                highly responsive user interface components
              </div>
            </TimelineContent>
          </TimelineItem>
          <br />
          {/* Bootcamp Info */}
          <TimelineItem>
            <TimelineOppositeContent>
              <div class="timelineDate"> 2021 - 2022 </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot class="blueTimeline">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div class="timelineHeading">AWS Cloud services certified</div>
              <div class="timelineSubheading">4 months</div>
              <div class="timelineText">AWS Certified Cloud Practitioner</div>
            </TimelineContent>
          </TimelineItem>
          <br />
          {/* Bootcamp Info */}
          <TimelineItem>
            <TimelineOppositeContent>
              <div class="timelineDate"> 2021</div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot class="blueTimeline">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div class="timelineHeading">ReBootKamp RBK Student</div>
              <div class="timelineSubheading">6 months</div>
              <div class="timelineText">
                Full-stack JavaScript Developer Certification
              </div>
            </TimelineContent>
          </TimelineItem>
          <br />
          {/* Education Info */}
          <TimelineItem>
            <TimelineOppositeContent>
              <div class="timelineDate">2013 - 2016</div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot class="purpleTimeline">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div class="timelineHeading">Data Science</div>
              <div class="timelineSubheading"></div>
              <div class="timelineText">
                Faculty of Economics and Management, Nabeul
              </div>
            </TimelineContent>
          </TimelineItem>
          <br />
          {/* Probations Info */}
          <TimelineItem>
            <TimelineOppositeContent>
              <div class="timelineDate">2010 - 2011</div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot class="grayTimeline">
                <AccountBalanceIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <div class="timelineHeading">baccalaureate in Mathematics</div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Education;
