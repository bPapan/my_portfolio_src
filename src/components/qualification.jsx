import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EducationPage extends Component {
  render() {
    const currentPath = this.props.location?.pathname || '/qualification';
    const isExperience = currentPath === '/qualification' || currentPath === '/qualification/experience';
    const isEducation = currentPath === '/qualification/education';
    const isAchievements = currentPath === '/qualification/achievements';

    return (
      <section className="mytabs_area p_120">
        <div className="container">
          {/* <div className="row example mb-5">
                <p></p>
          </div> */}
          <div className="tabs_inner">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <Link className={`nav-link ${isExperience ? 'active' : ''}`} to="/qualification/experience">Experience</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isEducation ? 'active' : ''}`} to="/qualification/education">Education</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isAchievements ? 'active' : ''}`} to="/qualification/achievements">Achievements</Link>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className={`tab-pane fade ${isExperience ? 'show active' : ''}`} id="experience" role="tabpanel">
                <ul className="list">
                <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>August 2023 to Present&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4><a href="https://www2.inceptasolutions.com">Purdue University</a></h4>
                        <p>Graduate Assistant </p>
                        <br></br>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>June 2021 to July 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4><a href="https://www2.inceptasolutions.com">Incepta Solutions Inc.</a></h4>
                        <p>Software Developer (Remote) </p>
                        <br></br>
                        <p>Platform: MuleSoft, Workato, Salesforce, React</p>
                        <br></br>
                        <p>Language: Dataweave, Ruby, TypeScript, Java, Python</p>
                        <br></br>
                        <p>Projects:
                          <li>
                            - MuleSoft Integration Solution Consultant for <a href="https://www.tngoc.com/">The Nationwide Group of Company</a><br></br>
                            - Migration of Integration platform from IBM ACE to MuleSoft, HBC Mobile App Middleware integration, for <a href="https://www.hbc.com/">Hudson's Bay Company</a> <br></br>
                            - <a href="https://www2.inceptasolutions.com/hrtech/">HRTech</a>: An HR Onboarding Automation System using React, Workato and Salesforce <br></br>  
                            - <a href="https://www2.inceptasolutions.com/smartconnect/">SmartConnect</a>: IoT platform solution that enables connectivity with various systems and IoT devices <br></br>
                          </li>
                        </p>
                        <br></br>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>January 2016 to November 2018</p>
                      </div>
                      <div className="media-body">
                        <h4><a href="https://www.bdpho.org/">Bangladesh Physics Olympiad</a></h4>
                        <p>Academic Team Member </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>January 2016  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4><a href="https://matholympiad.org.bd/">Bangladesh Math Olympiad </a></h4>
                        <p>Academic Team Member</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={`tab-pane fade ${isEducation ? 'show active' : ''}`} id="education" role="tabpanel">
                <ul className="list">
                  {/* <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>July 2021 to Present &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
                      </div>
                      <div className="media-body">
                        <h4><a href="https://cse.buet.ac.bd/"> Bangladesh University of Engineering and Technology (BUET)</a></h4>
                        <p>Dhaka, Bangladesh <br /><br/> Masters of Science in <br/> Computer Science and Engineering </p>
                        <p><b style={{color: '#000'}}>Thesis Concentration</b>: <br /> Network Science, Algorithms, Bioinformatics</p>
                        <p><b style={{color: '#000'}}>Thesis Supervisor</b>: <br /><i className="fa fa-google" /><a href="https://scholar.google.com/citations?user=oeNksGwAAAAJ&hl=en"> Dr. Md. Saidur Rahman </a></p>
                        <p><i class="fa fa-university" aria-hidden="true"></i><a href="https://cse.buet.ac.bd/faculty_list/detail/saidurrahman"> Professor </a></p>
                        <p>Department of CSE, BUET</p>
                      </div>
                    </div>
                  </li> */}
                  {/* <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>Starting from August, 2023 </p>
                      </div>
                      <div className="media-body">
                        <h4><a href="https://www.cs.purdue.edu/"> Purdue University</a></h4>
                        <p>West Lafayette, Indiana, USA <br /><br/> Ph.D. in <br/> Computer Science </p>
                        <p><b style={{color: '#000'}}>CGPA</b>: 3.50 within a scale of 4.00</p>
                        <p>Major CGPA: 3.60</p>
                        <p>CGPA of last 4 Terms: 3.65</p>
                        <p><b style={{color: '#000'}}>Research Concentration</b>: <br /> Software Engineering, Distributed Systems and Security</p>
                        <p><b style={{color: '#000'}}>Supervisor</b>: <br /><i className="fa fa-university" /><a href="https://yonglezh-purdue.github.io/"> Professor Yongle Zhang </a></p>
                        <p><i class="fa fa-university" aria-hidden="true"></i><a href="https://cse.buet.ac.bd/faculty_list/detail/saidurrahman"> Professor </a></p>
                        <p>Department of CSE, BUET</p>
                      </div>
                    </div>
                  </li> */}
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p> August 2023 to Present &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4><a href="https://www.cs.purdue.edu/graduate/index.html"> Purdue University</a></h4>
                        <p>West Lafayette, Indiana <br /><br/> Ph.D. in <br/> Computer Science </p>
                        <p><b style={{color: '#000'}}>Research Area</b>: <br /> Distributed Systems, Software Engineering</p>
                        <p><b style={{color: '#000'}}>Advisor</b>: <br /><i className="fa fa-google" /><a href="https://scholar.google.com/citations?user=bqROsSsAAAAJ&hl=pt-BR"> Dr. Yongle Zhang </a></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>February 2016 to February 2021 </p>
                      </div>
                      <div className="media-body">
                        <h4><a href="https://cse.buet.ac.bd/"> Bangladesh University of Engineering and Technology (BUET)</a></h4>
                        <p>Dhaka, Bangladesh <br /><br/> Bachelor of Science in <br/> Computer Science and Engineering </p>
                        {/* <p><b style={{color: '#000'}}>CGPA</b>: 3.50 within a scale of 4.00</p>
                        <p>Major CGPA: 3.60</p>
                        <p>CGPA of last 4 Terms: 3.65</p> */}
                        <p><b style={{color: '#000'}}>Thesis Concentration</b>: <br /> Algorithms, Graph Theory, Bioinformatics</p>
                        <p><b style={{color: '#000'}}>Thesis Supervisor</b>: <br /><i className="fa fa-google" /><a href="https://scholar.google.com/citations?user=oeNksGwAAAAJ&hl=en"> Dr. Md. Saidur Rahman </a></p>
                        <p><i class="fa fa-university" aria-hidden="true"></i><a href="https://cse.buet.ac.bd/faculty_list/detail/saidurrahman"> Professor </a></p>
                        <p>Department of CSE, BUET</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>June 2013 to March 2015 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4><a href="http://rc.gov.bd">Rajshahi College</a></h4>
                        <p>Rajshahi, Bangladesh</p><br/>
                        <p>Higher Secondary Certificate</p>
                        <p>Board: Rajshahi</p>
                        <p><b style={{color: '#000'}}>Stream</b>: Science</p>
                        <p><b style={{color: '#000'}}>GPA</b>: 5.00 within a scale of 5.00</p>
                        <p><b style={{color: '#000'}}>Scholarship</b>: Talentpool</p>
                        <p>Board Merit Position: Second</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>January 2005 to December 2012</p>
                      </div>
                      <div className="media-body">
                        <h4><a href="http://rglhs.edu.bd/">Government Laboratory High School, Rajshahi</a></h4>
                        <p>Rajshahi, Bangladesh</p><br />
                        <p>Secondary School Certificate</p>
                        <p>Board: Rajshahi</p>
                        <p><b style={{color: '#000'}}>Stream</b>: Science</p>
                        <p><b style={{color: '#000'}}>GPA</b>: 5.00 within a scale of 5.00</p>
                        <p><b style={{color: '#000'}}>Scholarship</b>: Talentpool</p>
                        <p>Board Merit Position: Second</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={`tab-pane fade ${isAchievements ? 'show active' : ''}`} id="achievements" role="tabpanel">
                <ul className="list">
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>January 2022 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4>MuleSoft Certified Developer</h4>
                        <p> Mule 4 <br></br> Professional Certificate< br /> Category: Level 1 <br /> Provider: <a href="https://training.mulesoft.com/certification/developer-mule4-level1">MuleSoft</a><br/><a href = "https://drive.google.com/file/d/1naJskJc-bs-taljl-XJECWrnLAaCON3x/view?usp=sharing">(View Certificate)</a> </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>April 2022 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4>React Certified Developer</h4>
                        <p> React 16.x (Foundation) <br></br> Provider: <a href="https://www.studysection.com/">StudySection</a><br/><a href = "https://www.studysection.com/users/socialMedia/NTI0Mzg2/YmlzaGFsLnBhcGFuQGluY2VwdGFzb2x1dGlvbnMuY29t">(View Certificate)</a></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>February 2011 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4>Bangladesh National Math Olympiad</h4>
                        <p>Second Runner Up< br /> Category: Junior <br /> Dhaka, Bangladesh</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>January 2013 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4>Bangladesh National Physics Olympiad</h4>
                        <p> Position: 10th <br /> Category: B <br /> Dhaka, Bangladesh</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>June 2015 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4>Bangladesh National Science Olympiad</h4>
                        <p>Position: 14th <br /> Category: C <br /> Dhaka, Bangladesh</p>
                      </div>
                    </div>
                  </li>
                  {/* <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>January 2015 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4>Divisional Science Olympiad, Rajshahi</h4>
                        <p>Position: Fourth <br /> Category: C <br /> Rajshahi, Bangladesh</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>December 2014 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4>Divisional Physics Olympiad, Rajshahi</h4>
                        <p>Position: Fifth< br />Category: C <br /> Rajshahi, Bangladesh</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>January 2014 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4>Regional Math Olympiad, Rajshahi</h4>
                        <p>Second Runner Up< br />Category: Higher Secondary <br /> Rajshahi, Bangladesh</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>January 2014 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4>Divisional Science Olympiad, Rajshahi</h4>
                        <p>Position: First< br />Category: C <br /> Rajshahi, Bangladesh</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>December 2012 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4>Regional Math Olympiad, Rajshahi</h4>
                        <p>Champion< br />Category: Secondary <br /> Rajshahi, Bangladesh</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>December 2012 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4>Divisional Physics Olympiad, Rajshahi</h4>
                        <p>Position: First< br />Category: B <br /> Rajshahi, Bangladesh</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>January 2012 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4>Divisional Science Olympiad, Rajshahi</h4>
                        <p>Position: Fifth< br />Category: B <br /> Rajshahi, Bangladesh</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>December 2010 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4>Regional Math Olympiad, Rajshahi</h4>
                        <p>Champion< br />Category: Junior <br /> Rajshahi, Bangladesh</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>December 2009 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4>Regional Math Olympiad, Rajshahi</h4>
                        <p>Champion< br />Category: Junior <br /> Rajshahi, Bangladesh</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div className="media">
                      <div className="d-flex">
                        <p>December 2007 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      </div>
                      <div className="media-body">
                        <h4>Regional Math Olympiad, Rajshahi</h4>
                        <p>Second Runner Up< br />Category: Primary <br /> Rajshahi, Bangladesh</p>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
};