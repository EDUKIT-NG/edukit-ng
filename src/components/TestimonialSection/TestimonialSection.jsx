import React, { useState } from "react";
import "./TestimonialSection.css";

const TestimonialSection = () => {
  const [testimonials] = useState([
    {
      id: 1,
      text: "“Thanks to EduKit Nigeria, I received the textbooks and supplies I needed to excel in school. It's amazing to know that there are people out there who care about our education and future!”",
      author: "John Doe",
      role: "CEO, Tech Corp",
      img: "",
    },
    {
      id: 2,
      text: "“Supporting EduKit Nigeria has been such a rewarding experience. Knowing that my donations are directly helping students in need inspires me to continue contributing toward a brighter future of students.”",
      author: "Jane Smith",
      role: "Designer, Creative Studio",
      img: "",
    },
    {
      id: 3,
      text: "“Volunteering with EduKit Nigeria has allowed me to make a real impact. Each small effort, whether it's sorting supplies or organizing requests, feels like a meaningful step toward helping students succeed.”",
      author: "Alex Johnson",
      role: "Manager, Business Solutions",
      img: "",
    },
    {
      id: 4,
      text: "Their expertise and commitment exceeded my expectations.",
      author: "Sophia Lee",
      role: "Founder, StartUp XYZ",
      img: "",
    },
    {
      id: 5,
      text: "Outstanding results, highly professional team.",
      author: "Michael Brown",
      role: "Developer, CodeWorks",
      img: "",
    },
    {
      id: 6,
      text: "EduKit Nigeria's efforts have truly transformed our community's education system.",
      author: "Sarah Williams",
      role: "Teacher, Local School",
      img: "",
    },
    {
      id: 7,
      text: "EduKit Nigeria's efforts have truly transformed our community's education system.",
      author: "Sarah Williams",
      role: "Teacher, Local School",
      img: "",
    },
    {
      id: 8,
      text: "EduKit Nigeria's efforts have truly transformed our community's education system.",
      author: "Sarah Williams",
      role: "Teacher, Local School",
      img: "",
    },
    {
      id: 9,
      text: "EduKit Nigeria's efforts have truly transformed our community's education system.",
      author: "Sarah Williams",
      role: "Teacher, Local School",
      img: "",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = 3;

  const handleScroll = (index) => {
    setCurrentIndex(index);
  };

  const getDisplayedTestimonials = () => {
    const startIndex = currentIndex * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;
    return testimonials.slice(startIndex, endIndex);
  };

  const displayedTestimonials = getDisplayedTestimonials();

  const getInitials = (name) => {
    const names = name.split(" ");
    return names.length > 1
      ? `${names[0][0]}${names[1][0]}`.toUpperCase()
      : name[0]?.toUpperCase();
  };

  return (
    <section className="testimonial-section">
      <h3 className="small-title">Testimonials</h3>
      <h1 className="big-title">VOICES OF IMPACT</h1>

      <div className="card-container">
        {displayedTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="author-info">
              {testimonial.img ? (
                <img
                  src={testimonial.img}
                  alt={testimonial.author}
                  className="author-image"
                />
              ) : (
                <div className="author-placeholder">
                  {getInitials(testimonial.author)}
                </div>
              )}
              <div>
                <h4 className="author-name">{testimonial.author}</h4>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>

      <div className="controls">
        {/* Always show 3 page buttons */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`control-button ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => handleScroll(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
