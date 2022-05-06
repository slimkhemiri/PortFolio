import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import "./Style.css"
function About() {


 


  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://abhedyak.github.io/images/skills2.png"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Khemiri Slim</strong> I’m a
            full stack software developer. I am very interested in the IT sector
            within my competence and eager to invest myself totally in a post
            where I can put them profit. Good skills of assimilation, a strong
            spirit of synthesis and good human contact.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>

<div class="slider">
<ul>
    <li>
        <img src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/html5.svg" alt=""/>
    </li>
    <li>
        <img src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/css3.svg" alt=""/>
    </li>
    <li>
        <img src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/javascript.svg" alt=""/>
    </li>
    <li>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" alt=""/>
    </li>
    <li>
        <img src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/react.svg" alt=""/>
    </li>
    <li>
        <img src="https://www.kindpng.com/picc/m/17-176451_atom-react-native-logo-svg-hd-png-download.png" alt=""/>
    </li>
    <li>
        <img src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/bootstrap.svg" alt=""/>
    </li>
    <li>
        <img src="https://vasterra.com/blog/wp-content/uploads/2021/08/Tailwind-img.png" alt=""/>
    </li>
    <li>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png" alt=""/>
    </li>
    <li>
        <img src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/git.svg" alt=""/>
    </li>
    <li>
        <img src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/responsive.svg" alt=""/>
    </li>
    <li>
        <img src="https://image.shutterstock.com/image-vector/initial-letter-ux-logo-lowercase-260nw-1033319803.jpg" alt=""/>
    </li>
    <li>
        <img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" alt=""/>
    </li>
    <li>
        <img src="https://vuejs.org/images/logo.png" alt=""/>
    </li>
    <li>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" alt=""/>
    </li>
    <li>
        <img src="https://seeklogo.com/images/N/nestjs-logo-09342F76C0-seeklogo.com.png" alt=""/>
    </li>
    <li>
        <img src="https://logojinni.com/image/logos/nodejs-530.svg" alt=""/>
    </li>
    <li>
        <img src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png" alt=""/>
    </li>
    <li>
        <img src="https://www.svgrepo.com/show/331488/mongodb.svg" alt=""/>
    </li>
    <li>
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt=""/>
    </li>
    <li>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt=""/>
    </li>
    <li>
        <img src="https://ih1.redbubble.net/image.1952832123.3187/st,small,507x507-pad,600x600,f8f8f8.jpg" alt=""/>
    </li>
    <li>
        <img src="data:image/png;base64,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" alt=""/>
    </li>
</ul>
</div>
<br/>
<div className="SectionTitle">Technologies</div> 
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
