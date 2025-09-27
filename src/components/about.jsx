import React, { Component } from 'react'

export default class About extends Component {
	render() {
		return (
			<section className="home_banner_area">
				<div className="container box_1620">
				  <div className="banner_inner d-flex align-items-center">
					<div className="banner_content">
					  <div className="media">
					  	<div className="d-flex">
  							<img className="responsive-image" src="img/papan-2.jpg" alt="" />
						</div>
						<div className="media-body">
						  <div className="personal_text">
							<h6><p>Hello Everybody, this is </p></h6>
							<h3>Bishal Basak Papan</h3>
							<h4> Graduate Teaching Assistant at <a href="https://www.cs.purdue.edu/graduate/index.html">Purdue University</a></h4>
							{/* <p>I am Interested in doing research on Software Engineering, Machine Learning, Security and Algorithms. Also, I like developing Software Systems.</p> */}
							<p> I am a second year Computer Science Ph.D. student, <br></br>
								focusing on Software Engineering in Distributed Systems. <br></br>
								My advisor is <a href="https://yonglezh-purdue.github.io/" style={{color: '#000'}}> Dr. Yongle Zhang.</a><br></br> 
							</p>
							<ul className="list basic_info">
							  {/* <li><a href="#"><i className="lnr lnr-calendar-full" /> 16th October, 1998</a></li> */}
							  {/* <li><a href="#"><i className="lnr lnr-phone-handset" /> +88 01534 372008</a></li> */}
							  {/* <li><a href="mailto: 1505043.bbp@ugrad.cse.buet.ac.bd"><i className="lnr lnr-envelope" /> 1505043.bbp@ugrad.cse.buet.ac.bd</a></li> */}
							  {/* <li><a href="mailto: bbasakpapan@gmail.com"><i className="lnr lnr-envelope" /> bbasakpapan@gmail.com</a></li> */}
							  <li><a href="mailto: bpapan@purdue.edu"><i className="lnr lnr-envelope" /> bpapan@purdue.edu</a></li>
							  <li><a href="https://www.westlafayette.in.gov/"><i className="lnr lnr-home" /> West Lafayette, Indiana</a></li>
							</ul>
							<ul className="list personal_social">
							  <p><a className="btn btn-secondary btn-learn" href = 'https://scholar.google.com/citations?user=N0tlETYAAAAJ&hl=en' target="_blank"><i className="fa fa-google" />&nbsp; Google Scholar</a>
							  &nbsp;&nbsp;&nbsp;&nbsp;<a className="btn btn-secondary btn-learn" href="https://github.com/bPapan" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /> &nbsp;Projects</a>
							  &nbsp;&nbsp;&nbsp;&nbsp;<a className="btn btn-secondary btn-learn" href="https://www.linkedin.com/in/bishal-basak-papan-497383142" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /> &nbsp;LinkedIn</a>
							  &nbsp;&nbsp;&nbsp;&nbsp;<a className="btn btn-secondary btn-learn" href="https://bpapan.github.io/CV/" target="_blank" rel="noopener noreferrer"><i className="fa fa-file-pdf-o" /> &nbsp;CV</a></p>
							</ul>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </section>
		);
	};
};