import React, { Component } from 'react'

export default class SkillPage extends Component {
  render() {
    return (
      <section className="welcome_area p_120">
        <div className="container">
          <div className="welcome-inner">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="pl-skill-tab" data-toggle="tab" href="#language" role="tab" aria-controls="language" aria-selected="true">Language Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="framework-tab" data-toggle="tab" href="#framework" role="tab" aria-controls="framework" aria-selected="false">Framework Skills</a>
              </li>
            </ul>
          </div>
          <div className="tab-content p_50" id="myTabContent">
            <div className="tab-pane fade show active" id="language" role="tabpanel" aria-labelledby="pl-skill-tab">
              <div className="h3">
                <p>Programming Language Skills</p>
              </div>
              <div className="row welcome_inner">
                <div className="col-lg-6">
                  <div className="tools_expert">
                    <div className="skill_main">
                      <div className="skill_item">
                        <h4>C++ <span className="counter">90</span>%</h4>
                        <div className="progress_br">
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="skill_item">
                        <h4>Java <span className="counter">80</span>%</h4>
                        <div className="progress_br">
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="skill_item">
                        <h4>Python <span className="counter">85</span>%</h4>
                        <div className="progress_br">
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="skill_item">
                        <h4>C# <span className="counter">70</span>%</h4>
                        <div className="progress_br">
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }} />
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
                        <h4>JavaScript <span className="counter">70</span>%</h4>
                        <div className="progress_br">
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="skill_item">
                        <h4>SQL <span className="counter">85</span>%</h4>
                        <div className="progress_br">
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="skill_item">
                        <h4>CSS <span className="counter">85</span>%</h4>
                        <div className="progress_br">
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="skill_item">
                        <h4>PHP <span className="counter">70</span>%</h4>
                        <div className="progress_br">
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="framework" role="tabpanel" aria-labelledby="framework-tab">
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
          </div>
        </div>
      </section>
    );
  };
};