import React, { Component } from 'react'

export default class FrameworkSkillPage extends Component {
	render() {
		return (
      <section className="welcome_area p_120">
        <div className="container">
		      <div className = "h3">
			      <p>Framework Skills</p>
		      </div>
          <div className="row welcome_inner">
            <div className="col-lg-6">
              <div className="tools_expert">
                <div className="skill_main">
                <div className="skill_item">
                    <h4>Workato <span className="counter">85</span>%</h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>JavaFX <span className="counter">80</span>%</h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>OpenGl <span className="counter">75</span>%</h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}/>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>Laravel <span className="counter">75</span>%</h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
			<div className="col-lg-6">
              <div className="tools_expert">
                <div className="skill_main">
                  <div className="skill_item">
                    <h4>MuleSoft <span className="counter">75</span>%</h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>React <span className="counter">70</span>%</h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>Unity <span className="counter">70</span>%</h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}/>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>Shell <span className="counter">70</span>%</h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}/>
                      </div>
                    </div>
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