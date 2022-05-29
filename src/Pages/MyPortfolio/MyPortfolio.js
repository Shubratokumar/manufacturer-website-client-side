import React from "react";
import profilePic from "../../../src/Assets/Images/ProfilePhoto1.jpg";

const MyPortfolio = () => {
  return (
    <div className="px-2 lg:px-20 bg-blue-50">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center content-center py-10">
          <div>
            <div className="avatar">
              <div className="w-60 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={profilePic} alt="Profile Pic" />
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100  shadow-xl p-10 lg:col-span-2">
            <h1 className="text-3xl text-secondary">Shubrato Kumar Gharami</h1>
            <p className="text-xl py-2">Junior Web Developer</p>
            <div className="w-60 h-1 rounded-full bg-primary inline-flex"></div>
            <p className="pt-4 text-justify">
              Hey, I'm a Full Stack Developer. Because of having fascination on
              Front End, you can call me a passionate Front End Developer. I
              like to spend most of my time for fixing issues and focus on
              opitmizing code. Proficient in developing databases, creating user
              interfaces, writing and testing codes, troubleshooting simple and
              complex issues, implementing new features based on client as well
              as user feedbacks.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center content-center py-10">
          <div className="card w-full bg-base-100 shadow-xl p-10">
            <h2 className="text-2xl uppercase text-secondary text-center">
              Technical Skills
            </h2>
            <div className="flex mt-6 justify-center mb-4">
              <div className="w-60 h-1 rounded-full bg-primary inline-flex"></div>
            </div>
            <div>
              <div>
                <div className="flex justify-between font-bold ">
                  <div>HTML5</div>
                  <div>95%</div>
                </div>
                <progress
                  className="progress progress-success w-full"
                  value="95"
                  max="100"
                ></progress>
              </div>
              <div>
                <div className="flex justify-between font-bold ">
                  <div>CSS3</div>
                  <div>90%</div>
                </div>
                <progress
                  className="progress progress-success w-full"
                  value="90"
                  max="100"
                ></progress>
              </div>
              <div>
                <div className="flex justify-between font-bold ">
                  <div>Bootstrap5</div>
                  <div>90%</div>
                </div>
                <progress
                  className="progress progress-success w-full"
                  value="90"
                  max="100"
                ></progress>
              </div>
              <div>
                <div className="flex justify-between font-bold ">
                  <div>Tailwind CSS3</div>
                  <div>76%</div>
                </div>
                <progress
                  className="progress progress-success w-full"
                  value="76"
                  max="100"
                ></progress>
              </div>
              <div>
                <div className="flex justify-between font-bold ">
                  <div>JavaScript</div>
                  <div>80%</div>
                </div>
                <progress
                  className="progress progress-success w-full"
                  value="80"
                  max="100"
                ></progress>
              </div>
              <div>
                <div className="flex justify-between font-bold ">
                  <div>React</div>
                  <div>78%</div>
                </div>
                <progress
                  className="progress progress-success w-full"
                  value="78"
                  max="100"
                ></progress>
              </div>
              <div>
                <div className="flex justify-between font-bold ">
                  <div>Node</div>
                  <div>73%</div>
                </div>
                <progress
                  className="progress progress-success w-full"
                  value="73"
                  max="100"
                ></progress>
              </div>
              <div>
                <div className="flex justify-between font-bold ">
                  <div>MongoDB</div>
                  <div>70%</div>
                </div>
                <progress
                  className="progress progress-success w-full"
                  value="70"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl p-10">
            <h2 className="text-2xl uppercase text-secondary text-center">
              Professional Skills
            </h2>
            <div className="flex mt-6 justify-center mb-4">
              <div className="w-60 h-1 rounded-full bg-primary inline-flex"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center content-center text-secondary">
              <div className="card-body items-center text-center">
                <div
                  className="radial-progress text-secondary"
                  style={{ "--value": 80 }}
                >
                  80%
                </div>
                <p className="text-xl py-2">Communication</p>
              </div>
              <div className="card-body items-center text-center">
                <div
                  className="radial-progress text-secondary"
                  style={{ "--value": 90 }}
                >
                  90%
                </div>
                <p className="text-xl py-2">Projects</p>
              </div>
              <div className="card-body items-center text-center">
                <div
                  className="radial-progress text-secondary"
                  style={{ "--value": 85 }}
                >
                  85%
                </div>
                <p className="text-xl py-2">Creativity</p>
              </div>
              <div className="card-body items-center text-center">
                <div
                  className="radial-progress text-secondary"
                  style={{ "--value": 75 }}
                >
                  75%
                </div>
                <p className="text-xl py-2">Team Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center content-center py-10">
          <div className="card w-full bg-base-100 shadow-xl p-10">
            <h2 className="text-2xl uppercase text-secondary pb-3 ">
              Education
            </h2>
            <div className="w-60 h-1 rounded-full bg-primary inline-flex"></div>
            <div>
              <div className="mt-3">
                <p className="text-xl py-2">University</p>
                <hr />
                <p>Institution Name: City University</p>
                <p>Department: LL.B (Hons.)</p>
                <p>Session: 2019 - Present</p>
                <p>Grade: CGPA - 3.50(current)</p>
              </div>
              <div className="mt-3">
                <p className="text-xl py-2">College</p>
                <hr />
                <p>Institution Name: Amanullah University College</p>
                <p>Department: Science</p>
                <p>Passing Year: 2015</p>
                <p>Grade: GPA - 4.08</p>
              </div>
              <div className="mt-3">
                <p className="text-xl py-2">School</p>
                <hr />
                <p>Institution Name: Bhandaria Bihari Pilot Hign School</p>
                <p>Department: Science</p>
                <p>Passing Year: 2013</p>
                <p>Grade: GPA - 4.56</p>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl p-10">
            <h2 className="text-2xl uppercase text-secondary pb-3 ">
              Some of my Project
            </h2>
            <div className="w-60 h-1 rounded-full bg-primary inline-flex"></div>
            <div>
              <div className="mt-3">
                <p className="text-xl py-2">Project - 01</p>
                <hr />
                <p>Project Name: Heaven Dental Home </p>
                <p>
                  Live Link :{" "}
                  <a
                    className="link link-secondary"
                    href=" https://service-provider-with-firebase.web.app/"
                    target="_blank"
                  >
                    https://service-provider-with-firebase.web.app/
                  </a>{" "}
                </p>
              </div>
              <div className="mt-3">
                <p className="text-xl py-2">Project - 02</p>
                <hr />
                <p>Project Name: Laptop Check </p>
                <p>
                  Live Link :{" "}
                  <a
                    className="link link-secondary"
                    href=" https://laptop-check-with-react-router.netlify.app/"
                    target="_blank"
                  >
                    https://laptop-check-with-react-router.netlify.app/
                  </a>
                </p>
              </div>
              <div className="mt-3">
                <p className="text-xl py-2">Project - 03</p>
                <hr />
                <p>Project Name: Smart Watch Shop </p>
                <p>
                  Live Link :{" "}
                  <a
                    className="link link-secondary"
                    href=" https://smart-watch-shop-react-app.netlify.app/"
                    target="_blank"
                  >
                    {" "}
                    https://smart-watch-shop-react-app.netlify.app/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPortfolio;
