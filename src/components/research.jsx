import React, { Component } from 'react'

export default class ResearchPage extends Component {
  render() {
    return (

      <section className="mytabs2_area p_120">
        <div className="container">
          <div className="tabs_inner">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Areas of Interest</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Publications</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <ul className="list2" style={{alignSelf:"center"}}>
                  <li>
                    <div className="media2">
                      <div className="media2-body">
                        <h4>Systems and Security </h4>
                        <p>Distributed Systems <br/> Software Engineering <br/> Security <br/> Systems for Machine Learning <br/> Machine Learning for Systems </p>
                      </div>
                    </div>                  
                  </li>
                  {/* <li>
                    <div className="media2">
                      <div className="media2-body">
                        <h4>Machine Learning and Deep Learning</h4>
                        <p> Natural Language Processing <br/> Graph Neural Network <br/> Computer Vision <br/> </p>
                      </div>
                    </div>                  
                  </li> */}
                  {/* <li>
                    <div className="media2">
                      <div className="media2-body">
                        <h4>Bioinformatics and Computational Biology</h4>
                        <p>DNA Sequencing <br/> Protein Protein Interaction <br/> Phylogenetic Tree</p>
                      </div>
                    </div>                  
                  </li> */}
                  <li>
                    <div className="media2">
                      <div className="media2-body">
                        <h4>Graph Theory and Algorithms</h4>
                        <p>Pairwise Compatibilty Graphs <br/> Graph Labeling <br/> Graph Drawing <br/> Heuristic and Metaheuristic Algorithms </p>
                      </div>
                    </div>                  
                  </li>
                </ul>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" >
                <ul className="list2">
                <li>
                    <div className="media">
                      <div className="media2-body">
                        <h3>Dealing with Smart GPS Spoofing Attacks in VANETs: 3BSM Approach</h3>
                        <h4><a href="https://icc2024.ieee-icc.org/program/day-2"> 2024 IEEE International Conference on Communications (ICC) </a></h4>
                        <h4>(Accepted for Next-Generation Networking and Internet Symposium)</h4>
                        {/* <h4>Co-authors: <a href="https://scholar.google.com/citations?user=LF1YsukAAAAJ&hl=en">Protik Bose Pranto</a>, <a href="https://scholar.google.com/citations?user=oeNksGwAAAAJ&hl=en">Md. Saidur Rahman</a></h4>
                        <h4>Status: Published at <a href="https://academic.oup.com/comjnl/advance-article-abstract/doi/10.1093/comjnl/bxac011/6536120"> The Computer Journal</a></h4> */}               
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media2-body">
                        <h3>On 2-Interval Pairwise Compatibility Properties of Two Classes of Grid Graphs</h3>
                        <h4><a href="https://academic.oup.com/comjnl/advance-article-abstract/doi/10.1093/comjnl/bxac011/6536120"> The Computer Journal</a></h4>
                        {/* <h4>Co-authors: <a href="https://scholar.google.com/citations?user=LF1YsukAAAAJ&hl=en">Protik Bose Pranto</a>, <a href="https://scholar.google.com/citations?user=oeNksGwAAAAJ&hl=en">Md. Saidur Rahman</a></h4>
                        <h4>Status: Published at <a href="https://academic.oup.com/comjnl/advance-article-abstract/doi/10.1093/comjnl/bxac011/6536120"> The Computer Journal</a></h4> */}
                        {/* <h4>Status: Ongoing</h4> */}
                        {/* <p>A graph <em>G</em> = (<em>V</em>, <em>E</em>) is called a pairwise compatibility graph (PCG, for short) if it admits a tuple (<em>T</em>, <em>d<sub style={{color: "rgb(0,0,0.25)"}}>min</sub></em>, 
                        <em>d<sub style={{color: "rgb(0,0,0.25)"}}>max</sub></em>) of an edge-weighted tree <em>T</em> of non-negative edge weights with leaf set <em>L</em>, two non-negative real numbers <em>d<sub style={{color: "rgb(0,0,0.25)"}}>
                        min</sub></em> &le; <em>d<sub style={{color: "rgb(0,0,0.25)"}}>max</sub></em> such that each vertex <em>u' &isin; V</em> represents a leaf <em>u &isin; L</em> and <em>G</em> has an edge (<em>u'</em>, <em>v'</em>) <em>&isin; E</em> if
                        and only if the distance between the two leaves <em>u</em> and <em>v</em> in the tree <em>T</em> lies within the interval [<em>d<sub style={{color: "rgb(0,0,0.25)"}}>min</sub>, d<sub style={{color: "rgb(0,0,0.25)"}}>max</sub></em>]. 
                        It has been proven that not all graphs are PCGs. A graph <em>G</em> is called a <em>k</em>-interval PCG if there exists an edge-weighted tree <em>T</em> and <em>k</em> mutually exclusive intervals of non-negative real numbers such that there is an edge 
                        between two vertices in <em>G</em> if and only if the distance between their corresponding leaves in <em>T</em> lies within any of the <em>k</em> intervals. It is known that every graph <em>G</em> is a <em>k</em>-interval PCG 
                        for <em>k</em>=|<em>E</em>|, where <em>E</em> is the set of edges of <em>G</em>. It is thus interesting to know the smallest value of <em>k</em> for which every graph is a <em>k</em>-interval PCG. In this paper, we show that 
                        grid graphs and a subclass of 3D grid graphs are 2-interval PCGs.</p>
                        <p>Keywords: Pairwise compatibility graph, 2-interval pairwise compatibility graph, Grid graph, Caterpillar tree</p> */}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media2-body">
                        <h3>New Results on Pairwise Compatibility Graphs</h3>
                        <h4><a href="https://www.sciencedirect.com/science/article/abs/pii/S0020019022000412"> Information Processing Letters</a></h4>
                        {/* <h4>Co-authors: <a href="https://scholar.google.com/citations?user=Pwsti-YAAAAJ&hl=en">Sheikh Azizul Hakim</a>, <a href="https://scholar.google.com/citations?user=oeNksGwAAAAJ&hl=en">Md. Saidur Rahman</a></h4>
                        <h4>Status: Published at <a href="https://www.sciencedirect.com/science/article/abs/pii/S0020019022000412"> Information Processing Letters</a></h4> */}
                        {/* <h4>Status: Ongoing</h4> */}
                        {/* <p>A graph <em>G</em> = (<em>V</em>, <em>E</em>) is called a pairwise compatibility graph (PCG) if there exists an edge-weighted tree <em>T</em> and two non-negative real numbers <em>d<sub style={{color: "rgb(0,0,0.25)"}}>min</sub></em> and <em>d<sub style={{color: "rgb(0,0,0.25)"}}>max</sub></em> 
                        such that each leaf <em>u</em> of <em>T</em> corresponds to a vertex <em>u &isin; V</em> and there is an edge (<em>u'</em>, <em>v'</em>) <em>&isin; E</em> if
                        and only if <em>d<sub style={{color: "rgb(0,0,0.25)"}}>min</sub> &le; d<sub style={{color: "rgb(0,0,0.25)"}}>T</sub>(u,v) &le; d<sub style={{color: "rgb(0,0,0.25)"}}>max</sub></em>, where <em>d<sub style={{color: "rgb(0,0,0.25)"}}>T</sub>(u,v) </em> 
                        is the sum of the weights of the edges on the unique path from <em>u</em> and <em>v</em> in <em>T</em>. The tree <em>T</em> is called the pairwise compatibility tree (PCT) of <em>G</em>. It has been proven that not all graphs 
                        are PCGs. Thus, it is interesting to know which classes of graphs are PCGs. In this paper, we prove that grid graphs are PCGs. Although there are a necessary condition and a sufficient condition known for a graph being a PCG, there are 
                        some classes of graphs that are intermediate to the classes defined by the necessary condition and the sufficient condition. In this paper, we show two examples of graphs that are included in these intermediate classes and prove that they are not PCGs.</p>
                        <p>Keywords: Combinatorial Problems, Pairwise compatibility graph, Grid graph, Necessary condition, Sufficient condition</p> */}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media2-body">
                        <h3>k-Safe Labelings of Connected Graphs</h3>
                        <h4><a href="https://ieeexplore.ieee.org/abstract/document/9744182"> 2021 IEEE International Conference on Telecommunications and Photonics (ICTP) </a></h4>
                        {/* <h4>Co-authors: <a href="https://scholar.google.com/citations?user=LF1YsukAAAAJ&hl=en">Protik Bose Pranto</a>, <a href="https://scholar.google.com/citations?user=oeNksGwAAAAJ&hl=en">Md. Saidur Rahman</a></h4>
                        <h4>Status: Published at <a href="https://ieeexplore.ieee.org/abstract/document/9744182"> 2021 IEEE International Conference on Telecommunications and Photonics (ICTP) </a></h4> */}
                        {/* <p>In a <em>k</em>-safe labeling of a graph <em>G</em>, each vertex is labeled by a distinct positive integer such that the difference of the labels of two adjacent vertices is at 
                        least <em>k</em>. The span of a <em>k</em>-safe labeling of <em>G</em> is the range between the minimum and the maximum labels used in <em>G</em>. The <em>k</em>-safe labeling problem 
                        asks to label all the vertices of <em>G</em> using the minimum span. This problem has practical applications in assigning frequencies of transmitters in a network.<em>k</em>-safe 
                        labeling problem has been proven to be NP-hard and there is not an exact upper bound of the span of <em>k</em>-safe labeling of a graph. In this paper, we give an upper bound on 
                        <em>k</em>-safe labelings of all connected graphs based on the size of the maximum clique in the graph. Our proof leads to a polynomial-time algorithm for finding the <em>k</em>-safe 
                        labeling of any connected graph attaining the bound.</p>
                        <p>Keywords: Graph labeling, k-safe labeling, Minimum span, Maximum clique</p> */}
                      </div>
                    </div>                  
                  </li>
                </ul>  
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
};