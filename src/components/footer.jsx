import React, { Component } from 'react'

export default class Footer extends Component {
	render() {
		return (
		  <footer className="footer_area p_70">
			<div className="container">
			  <div className="row footer_inner">
				<div className="col-lg-6 col-sm-6">
				  <aside className="f_widget ab_widget">
					<div className="f_title">
					  <h3>About Me</h3>
					</div>
					<p>I love to learn new things, enjoy programming and problem solving. I am also a big sports fan and movie lover.</p>
					<p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
					  {/* This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a> */}
					  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
				  </aside>
				</div>
				<div className="col-lg-1">
				  <aside className="f_widget news_widget">

				  </aside>
				</div>
				<div className="col-lg-3">
				  <aside className="f_widget social_widget">
				  	<div className="f_title">
					  <h3>Any Query?</h3>
					</div>
					<p>Feel free to contact <i class="fa fa-smile-o" aria-hidden="true"></i></p>
					<ul className="list">
				  		<li><a href='mailto:bpapan@purdue.edu; bbasakpapan@gmail.com'><i className="fa fa-envelope-o" /></a></li>
					</ul>
				  </aside>
				</div>
				<div className="col-lg-2">
				  <aside className="f_widget social_widget">
					<div className="f_title">
					  <h3>Connect with Me</h3>
					</div>
					<p>Let us be social  <i class="fa fa-users" aria-hidden="true"></i></p>
					<ul className="list">
					  <li><a href="https://www.linkedin.com/in/bishal-basak-papan-497383142"><i className="fa fa-linkedin" /></a></li>
					  <li><a href="https://www.facebook.com/bishalbasak.papan"><i className="fa fa-facebook" /></a></li>
					  <li><a href="https://twitter.com/BishalPapan"><i className="fa fa-twitter" /></a></li>
					</ul>
				  </aside>
				</div>
			  </div>
			</div>
		  </footer>
		);
	};
};