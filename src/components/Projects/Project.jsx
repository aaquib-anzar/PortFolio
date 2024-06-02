import React from "react";
import weather from "../../assets/Projects/weather.png";
import countries from "../../assets/Projects/countries.png";
import foodapp from "../../assets/Projects/FoodApp.png";
import news from "../../assets/Projects/news.png";
import Card from "./Card";
import classes from "./Project.module.css";

function Project() {
  return (
    <div className="container-fluid">
      <div className={classes["project-section"]}>
        <h1 className={classes["project-heading"]}>
          My Recent <strong className={classes.purple}>Works </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Here are a few projects I've worked on recently.
        </p>
        <div className={classes.container}>
          <div className="row" style={{ paddingBottom: "10px" }}>
            <div
              className={`col-lg-4 mb-4 ${classes["project-card"]}`}
            >
              <Card
                imgPath={countries}
                isBlog={false}
                title="Where in the World?"
                description="This project is created to know some important facts about a particular place in the world.Facts like knowing about the neighbouring countries,capital and population etc.I used ReactJs for developing the UI and countriesAPI for the data."
                ghLink="https://github.com/aaquib-anzar/WeatherApp"
                demoLink="https://weather-app-navy-mu-29.vercel.app/"
              />
            </div>
            <div
              className={` col-lg-4 mb-4 ${classes["project-card"]}`}
            >
              <Card
                imgPath={weather}
                isBlog={false}
                title="Weather"
                description="This weather project allows you to check the current weather.It has dialy forecast and hourly forecast and you can check waether by using live location or by searching for it.I used ReactJs ,TailwindCSS,OpenWeatherMap API and vercel."
                ghLink="https://github.com/aaquib-anzar/WeatherApp"
                demoLink="https://weather-app-navy-mu-29.vercel.app/"
              />
            </div>
            <div
              className={`col-lg-4 mb-4 ${classes["project-card"]}`}
            >
              <Card
                imgPath={foodapp}
                isBlog={false}
                title="Let's Taste"
                description="This project is kind of Food ordering app which provides many international cuisine.For this i also made a cart and to check your order.For this project I used Firebase for both as backend for data and end points and for hosting as well.and also used ReactJS."
                ghLink="https://github.com/aaquib-anzar/FoodApp/tree/master"
                demoLink="https://lets-taste-ea1de.web.app/"
              />
            </div>
            <div
              className={`col-lg-4 mb-4 ${classes["project-card"]}`}
            >
              <Card
                imgPath={news}
                isBlog={false}
                title="NewsMania"
                description="NewMania is the one stop soltuion for your morning.As it provides news from all the various sources at one place.But after developing i got to know that this API only works on loclalhost.Build with react.js and Firebase."
                ghLink="https://github.com/aaquib-anzar/NewsMania"
                demoLink="https://news-mania-5yc464tkl-aaquib-anzars-projects.vercel.app/"
              />
            </div>
            <div
              className={`col-lg-4 mb-4 ${classes["project-card"]}`}
            >
              <Card
                imgPath={weather}
                isBlog={false}
                title="Weather"
                description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                ghLink="https://github.com/aaquib-anzar/WeatherApp"
                demoLink="https://weather-app-navy-mu-29.vercel.app/"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Project;
