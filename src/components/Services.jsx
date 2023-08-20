import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Services = () => {
  useEffect(() => {
    const configObject = {
      reset: true,
      duration: 800,
      delay: 500,
      easing: "ease-in",
      scale: 0.5,
    };
    ScrollReveal().reveal(".columns", configObject);
  }, []);

  return (
    <section id={`services`} className={`section is-small`}>
      <div className={`container`}>
        <h1
          className={`title heading__text is-size-1-desktop is-size-2-mobile`}>
          Services
        </h1>
        <div className={`columns has-text-centered`}>
          <div className={`column`}>
            <div className={`box box__bg`}>
              <h2 className={`has-text-weight-semibold`}>Web Development</h2>
              <p>
                I'm passionate about creating websites that help you achieve
                your goals and engage with your customers. As an experienced
                developer, I will work with you to design your web application
                that meets your needs. Whether you need a website for a
                business, personal blog, or e-commerce store, I can help.
              </p>
            </div>
          </div>
          <div className={`column`}>
            <div className={`box box__bg`}>
              <h2 className={`has-text-weight-semibold`}>
                Mobile App Development
              </h2>
              <p>
                My mobile app development process begins with a comprehensive
                analysis of your project’s requirements and objectives. I then
                develop a strategy and design a prototype, followed by the
                development phase. Once the app is ready, I'll perform
                comprehensive testing and optimization to ensure a high-quality
                user experience.
              </p>
            </div>
          </div>
          <div className={`column`}>
            <div className={`box box__bg`}>
              <h2 className={`has-text-weight-semibold`}>UI\UX Design</h2>
              <p>
                Welcome to my UI/UX Design section. I provide custom UI/UX
                design solutions with a focus on user experience, usability, and
                interface design. As an experts, I'm dedicated to delivering
                user-friendly, visually appealing, and intuitive designs that
                will increase the efficiency, usability, and satisfaction to you
                as a customer is my original goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
