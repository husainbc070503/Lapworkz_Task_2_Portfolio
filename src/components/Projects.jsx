import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import SectionHeading from "./SectionHeading";
import TutorApp from "../assets/projects/tutor_app.png";
import PMA from "../assets/projects/pma.png";
import InstaClone from "../assets/projects/insta_clone.png";
import BlogBook from "../assets/projects/blog.png";
import Weather from "../assets/projects/weather.png";
import Airline from "../assets/projects/airline.png";
import TODO from "../assets/projects/todo.png";
import Notes from "../assets/projects/notes.png";
import ECommerce from "../assets/projects/ecomm.png";
import Food from "../assets/projects/food.png";
import ET from "../assets/projects/expense_tracker.png";
import ELP from "../assets/projects/elp.png";
import SOC from "../assets/projects/SOC.png";
import TC from "../assets/projects/TC.png";
import GK from "../assets/projects/GK.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "../swiper.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Twitter Clone",
      image: TC,
      description:
        "Developed a Twitter clone using the MERN stack, implementing MongoDB for the database, Express.js for server-side logic, React.js for the frontend, and Node.js for server runtime. Implemented features such as user authentication, real-time tweet updates, and a responsive user interface.",
      live: "https://husain-twitter-clone.netlify.app/",
      github: "https://github.com/husainbc070503/Twitter_Clone_Frontend",
    },
    {
      id: 2,
      title: "Stack Overflow Clone",
      image: SOC,
      description:
        "Built a Stack Overflow clone with MERN stack, using MongoDB for storage, Express.js for backend, React.js for frontend, and Node.js for server operations. Features include user authentication, Q&A functionality, and an intuitive interface for streamlined knowledge sharing in the developer community.",
      live: "https://nullclass-stack-overflow-clone.netlify.app/",
      github: "https://github.com/husainbc070503/Stack_Overflow_Clone_Frontend",
    },
    {
      id: 3,
      title: "Google Keep Clone",
      image: GK,
      description:
        "A Google Keep clone allows users to create, archive, delete, and pin notes, providing a versatile and organized platform for managing and storing important information.",
      live: "https://g-keep-react-clone.netlify.app/",
      github: "https://github.com/husainbc070503/Google_Keep_Clone",
    },
    {
      id: 4,
      title: "Expense Tracker",
      image: ET,
      description:
        "Expense Tracker MERN: Efficiently manage finances with MongoDB, Express.js, React, and Node.js. Input, categorize, and analyze expenses for seamless financial tracking.",
      live: "https://expense-tracker-mern-stack-web-app.netlify.app/",
      github: "https://github.com/husainbc070503/Expense_Tracker_Frontend",
    },
    {
      id: 5,
      title: "E-Learning Platform",
      image: ELP,
      description:
        "E-Learning Platform: Online educational tool facilitating remote learning, offering diverse courses, interactive content, and flexibility for users to acquire knowledge anytime, anywhere.",
      live: "https://e-learning-platform-clone.netlify.app/",
      github: "https://github.com/husainbc070503/E-Learning-Platform_Frontend",
    },
    {
      id: 6,
      title: "Tutor Application",
      image: TutorApp,
      description:
        "The Tutor Application web app facilitates seamless matching between tutors and students, streamlining the process of finding and connecting with qualified tutors for personalized learning experiences.",
      live: "https://tutor-application.netlify.app/",
      github: "https://github.com/husainbc070503/Tutor_App_Frontend",
    },
    {
      id: 7,
      title: "Project Management App",
      image: PMA,
      description:
        "A project management app streamlines project organization and collaboration. It includes features like task assignment, progress tracking, file sharing, and communication tools. The app aims to enhance team efficiency by providing a centralized platform for planning, executing, and monitoring projects.",
      live: "https://project-management-web-tool.netlify.app/",
      github:
        "https://github.com/husainbc070503/Project_Management_App_Frontend",
    },
    {
      id: 8,
      title: "Electro World, E-Commerce App",
      image: ECommerce,
      description:
        "An eCommerce application is a platform facilitating online buying and selling. It includes features like product listings, shopping carts, secure payment gateways, and order tracking. The application streamlines the purchase process, providing users with a convenient and secure way to browse, select, and purchase goods or services online.",
      live: "https://electro-world.netlify.app/",
      github: "https://github.com/husainbc070503/E-Commerce-App-Frontend",
    },
    {
      id: 9,
      title: "Instagram Clone",
      image: InstaClone,
      description:
        "An Instagram clone is a social media application replicating key features of Instagram. It enables users to share photos and videos, follow others, and engage through likes and comments. The clone typically includes user profiles, a feed, notifications, and direct messaging, mimicking the core functionalities of Instagram for a familiar user experience.",
      live: "https://cloning-insta.netlify.app/auth",
      github: "https://github.com/husainbc070503/MERN_Instagram_Clone",
    },
    {
      id: 10,
      title: "Blog Book",
      image: BlogBook,
      description:
        "A blog application is a platform for creating, publishing, and managing blog content. It provides users with tools to write, edit, and organize posts. Features typically include user profiles, comment sections, and categorization options, making it easy for writers to share their thoughts and readers to engage with content.",
      live: "https://blog-book-app.netlify.app/",
      github: "https://github.com/husainbc070503/Blog-App-Frontend",
    },
    {
      id: 11,
      title: "Weather Application",
      image: Weather,
      description:
        "A weather application provides real-time weather information based on user locations or specified locations. It offers current conditions, forecasts, and sometimes additional features like radar maps or severe weather alerts, delivering a quick and accessible overview of the weather.",
      live: "https://weather-99.netlify.app/",
      github: "https://github.com/husainbc070503/React_Weather_App",
    },
    {
      id: 12,
      title: "Airline Booking Application",
      image: Airline,
      description:
        "An airline booking application enables users to search, book, and manage flights. It includes features like flight search, seat selection, payment processing, and itinerary management, providing a seamless experience for travelers to plan and book their flights.",
      live: "https://online-airline-booking.netlify.app/",
      github: "https://github.com/husainbc070503/Travel-Booking-App-Backend",
    },
    {
      id: 13,
      title: "To-Do Application",
      image: TODO,
      description:
        "A to-do application helps users organize tasks, set priorities, and manage their daily activities efficiently. It typically includes features like task creation, due dates, reminders, and task completion tracking. The goal is to assist individuals in staying organized and focused on their priorities by providing a simple and user-friendly platform for managing to-do lists.",
      live: "https://prodigy-task2-todo.netlify.app/",
      github: "https://github.com/husainbc070503/TODO-APP-USING-REACT",
    },
    {
      id: 14,
      title: "Notes Application",
      image: Notes,
      description:
        "A notes application is a digital platform for creating, organizing, and storing notes. It allows users to quickly jot down and categorize information, offering features like text formatting, multimedia integration, and cloud syncing for accessibility across devices. The primary goal is to provide a convenient and efficient way for users to capture and manage their thoughts, ideas, and important information in a digital format.",
      live: "https://husain-notes.netlify.app/",
      github: "https://github.com/husainbc070503/Notes-App",
    },
    {
      id: 15,
      title: "Go Food - Food Order Application",
      image: Food,
      description:
        "A food order application allows users to browse menus, place orders, and have food delivered to their doorstep. It typically includes features like restaurant listings, menu exploration, order customization, secure payment options, and order tracking for a convenient and efficient food ordering experience.",
      live: "https://gofood-husain-app.netlify.app/",
      github: "https://github.com/husainbc070503/Food-App",
    },
  ];

  return (
    <div id="projects">
      <Container maxWidth="lg" className="Container container">
        <Box>
          <SectionHeading title="Projects" />
          <Swiper
            spaceBetween={40}
            slidesPerView={2}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            className="mySwiper"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
          >
            {projects.map((item) => {
              const { id, title, image, description, live, github } = item;

              return (
                <SwiperSlide key={id}>
                  <div className="project-card">
                    <div className="project-image">
                      <img src={image} alt={title} />
                    </div>
                    <Box>
                      <Typography
                        fontSize={{ md: 34, xs: 24 }}
                        fontWeight="bold"
                        color="primary"
                        mb={{ md: 1, xs: 2 }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        fontSize={14}
                        color="GrayText"
                        my={2}
                        textAlign="justify"
                        className="Typography hide-mobile"
                      >
                        {description}
                      </Typography>
                      <Link href={live} target="_blank">
                        <ArrowOutwardIcon />
                      </Link>
                      <Link href={github} ml={2} target="_blank">
                        <GitHubIcon />
                      </Link>
                    </Box>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Container>
    </div>
  );
};

export default Projects;
