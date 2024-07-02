import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../App.css'; // Ensure the CSS file is correctly imported

const courses = [
    { id: 1, title: 'SAP Courses', description: 'Learn from certified SAP professionals.', seats: 25, image: 'src/Logos/grc img.jpg' },
    { id: 2, title: 'HR Courses', description: 'Learn from certified HR professionals.', seats: 25, image: 'src/Logos/grc img.jpg' },
    { id: 3, title: 'Digital Marketing Courses', description: 'Learn from certified Digital Marketing professionals.', seats: 25, image: 'src/Logos/grc img.jpg' },
    { id: 4, title: 'Finance Courses', description: 'Learn from certified Finance professionals.', seats: 25, image: 'src/Logos/grc img.jpg' },
    { id: 5, title: 'Management Courses', description: 'Learn from certified Management professionals.', seats: 25, image: 'src/Logos/grc img.jpg' },
    { id: 6, title: 'IT Courses', description: 'Learn from certified IT professionals.', seats: 25, image: 'src/Logos/grc img.jpg' },
];

const PopCourses = () => {
    return (
        <div className="pop-courses">
            <h2>Our Popular Courses</h2>
            <div id="courseCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            {courses.slice(0, 3).map(course => (
                                <div className="col-md-4 px-1" key={course.id}> {/* Add px-1 class to reduce padding */}
                                    <div className="course card">
                                        <div className="course-image card-img-top">
                                            <img src={course.image} className="img-fluid" alt={course.title} />
                                        </div>
                                        <div className="course-info card-body">
                                            <h5 className="card-title">{course.title}</h5>
                                            <p className="card-text">{course.description}</p>
                                            <p className="card-text"><small className="text-muted">Seats available: {course.seats}</small></p>
                                            <button className="btn btn-primary">Explore More</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            {courses.slice(3).map(course => (
                                <div className="col-md-4 px-1" key={course.id}> {/* Add px-1 class to reduce padding */}
                                    <div className="course card">
                                        <div className="course-image card-img-top">
                                            <img src={course.image} className="img-fluid" alt={course.title} />
                                        </div>
                                        <div className="course-info card-body">
                                            <h5 className="card-title">{course.title}</h5>
                                            <p className="card-text">{course.description}</p>
                                            <p className="card-text"><small className="text-muted">Seats available: {course.seats}</small></p>
                                            <button className="btn btn-primary">Explore More</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#courseCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#courseCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="actions">
                <button className="book-demo btn btn-primary">Book Demo</button>
                <button className="download-brochure btn btn-secondary">Download Brochure</button>
            </div>
        </div>
    );
};

export default PopCourses;