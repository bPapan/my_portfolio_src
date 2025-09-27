import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';

const images = [
    'img/gallery/project_ecomm_user_1.jpg',
    'img/gallery/project_ecomm_user_2.jpg',
    'img/gallery/project_ecomm_user_3.jpg',
    'img/gallery/project_ecomm_user_4.jpg',
    'img/gallery/project_ecomm_user_5.jpg',
    'img/gallery/project_ecomm_user_6.jpg',
    'img/gallery/project_ecomm_user_7.jpg',
    'img/gallery/project_ecomm_user_8.jpg',
    'img/gallery/project_ecomm_user_9.jpg',
    'img/gallery/project_ecomm_user_10.jpg',
    'img/gallery/project_ecomm_user_11.jpg',
    'img/gallery/project_ecomm_user_12.jpg',
    'img/gallery/project_ecomm_user_13.jpg',
    'img/gallery/project_ecomm_user_14.jpg',
    'img/gallery/project_ecomm_user_15.jpg',
    'img/gallery/project_ecomm_user_16.jpg',
    'img/gallery/project_ecomm_user_17.jpg',
    'img/gallery/project_ecomm_user_18.jpg',
    'img/gallery/project_ecomm_user_19.jpg',
    'img/gallery/project_ecomm_user_20.jpg',
    'img/gallery/project_ecomm_user_21.jpg',
    'img/gallery/project_ecomm_user_22.jpg',
    'img/gallery/project_ecomm_user_23.jpg',
    'img/gallery/project_ecomm_user_24.jpg',
    'img/gallery/project_ecomm_user_25.jpg',
    'img/gallery/project_ecomm_user_26.jpg',
    'img/gallery/project_ecomm_user_27.jpg',
    'img/gallery/project_ecomm_user_28.jpg',
    'img/gallery/project_ecomm_vendor_1.jpg',
    'img/gallery/project_ecomm_vendor_2.jpg',
    'img/gallery/project_ecomm_vendor_3.jpg',
    'img/gallery/project_ecomm_vendor_4.jpg',
    'img/gallery/project_ecomm_vendor_5.jpg',
    'img/gallery/project_ecomm_vendor_6.jpg',
    'img/gallery/project_ecomm_vendor_7.jpg',
    'img/gallery/project_ecomm_vendor_8.jpg',
    'img/gallery/project_ecomm_vendor_9.jpg',
    'img/gallery/project_ecomm_vendor_10.jpg',
    'img/gallery/project_ecomm_vendor_11.jpg',
    'img/gallery/project_ecomm_vendor_12.jpg',
    'img/gallery/project_ecomm_admin_1.jpg',
    'img/gallery/project_ecomm_admin_2.jpg',
    'img/gallery/project_ecomm_admin_3.jpg',
    'img/gallery/project_ecomm_admin_4.jpg',
    'img/gallery/project_ecomm_admin_5.jpg',
    'img/gallery/project_ecomm_admin_6.jpg',
    'img/gallery/project_ecomm_admin_7.jpg',
    'img/gallery/project_ecomm_admin_8.jpg',
    'img/gallery/project_ecomm_admin_9.jpg',
    'img/gallery/project_ecomm_admin_10.jpg',
];

const images2 = [
  'img/chess/chess_1.jpg',
  'img/chess/chess_2.jpg',
  'img/chess/chess_3.jpg',
  'img/chess/chess_4.jpg',
  'img/chess/chess_5.jpg',
  'img/chess/chess_6.jpg',
  'img/chess/chess_7.jpg',
  'img/chess/chess_8.jpg',
  'img/chess/chess_9.jpg',
  'img/chess/chess_10.jpg',
  'img/chess/chess_11.jpg',
  'img/chess/chess_12.jpg',
  'img/chess/chess_13.jpg',
  'img/chess/chess_14.jpg',
  'img/chess/chess_15.jpg',
  'img/chess/chess_16.jpg',
  'img/chess/chess_17.jpg',
];

const images3 = [
  'img/asteroids/asteroids_1.jpg',
  'img/asteroids/asteroids_2.jpg',
  'img/asteroids/asteroids_3.jpg',
  'img/asteroids/asteroids_4.jpg',
  'img/asteroids/asteroids_5.jpg',
  'img/asteroids/asteroids_6.jpg',
  'img/asteroids/asteroids_7.jpg',
  'img/asteroids/asteroids_8.jpg',
  'img/asteroids/asteroids_9.jpg',
  'img/asteroids/asteroids_10.jpg',
  'img/asteroids/asteroids_11.jpg',
];

const images4 = [
  'img/CT/CT_1.jpg',
  'img/CT/CT_2.jpg',
  'img/CT/CT_3.jpg',
  'img/CT/CT_4.jpg',
  'img/CT/CT_5.jpg',
  'img/CT/CT_6.jpg',
  'img/CT/CT_7.jpg',
];

const images5 = [
  'img/NS2/NS_1.jpg',
  'img/NS2/NS_2.jpg',
  'img/NS2/NS_3.jpg',
  'img/NS2/NS_4.jpg',
  'img/NS2/NS_5.jpg',
  'img/NS2/NS_6.jpg',
  'img/NS2/NS_7.jpg',
  'img/NS2/NS_8.jpg',
  'img/NS2/NS_9.jpg',
  'img/NS2/NS_10.jpg',
  'img/NS2/NS_11.jpg',
  'img/NS2/NS_12.jpg',
  'img/NS2/NS_13.jpg',
  'img/NS2/NS_14.jpg',
  'img/NS2/NS_15.jpg',
  'img/NS2/NS_16.jpg',
  'img/NS2/NS_17.jpg',
  'img/NS2/NS_18.jpg',
  'img/NS2/NS_19.jpg',
  'img/NS2/NS_20.jpg',
  'img/NS2/NS_21.jpg',
  'img/NS2/NS_22.jpg',
  'img/NS2/NS_23.jpg',
  'img/NS2/NS_24.jpg',
  'img/NS2/NS_25.jpg',
  'img/NS2/NS_26.jpg',
  'img/NS2/NS_27.jpg',
  'img/NS2/NS_28.jpg',
  'img/NS2/NS_29.jpg',
  'img/NS2/NS_30.jpg',
];

const images6 = [
  'img/hall_management/hm_1.jpg',
  'img/hall_management/hm_2.jpg',
  'img/hall_management/hm_3.jpg',
  'img/hall_management/hm_4.jpg',
  'img/hall_management/hm_5.jpg',
  'img/hall_management/hm_6.jpg',
  'img/hall_management/hm_7.jpg',
  'img/hall_management/hm_8.jpg',
  'img/hall_management/hm_9.jpg',
  'img/hall_management/hm_10.jpg',
  'img/hall_management/hm_11.jpg',
  'img/hall_management/hm_12.jpg',
  'img/hall_management/hm_13.jpg',
  'img/hall_management/hm_14.jpg',
  'img/hall_management/hm_15.jpg',
  'img/hall_management/hm_16.jpg',
  'img/hall_management/hm_17.jpg',
  'img/hall_management/hm_18.jpg',
  'img/hall_management/hm_19.jpg',
  'img/hall_management/hm_20.jpg',
  'img/hall_management/hm_21.jpg',
  'img/hall_management/hm_22.jpg',
  'img/hall_management/hm_23.jpg',
  'img/hall_management/hm_23_2.jpg',
  'img/hall_management/hm_24.jpg',
  'img/hall_management/hm_25.jpg',
  'img/hall_management/hm_26.jpg',
  'img/hall_management/hm_27.jpg',
  'img/hall_management/hm_28.jpg',
  'img/hall_management/hm_29.jpg',
  'img/hall_management/hm_30.jpg',
  'img/hall_management/hm_31.jpg',
  'img/hall_management/hm_32.jpg',
  'img/hall_management/hm_33.jpg',
  'img/hall_management/hm_34.jpg',
  'img/hall_management/hm_35.jpg',
  'img/hall_management/hm_36.jpg',
  'img/hall_management/hm_37.jpg',
  'img/hall_management/hm_38.jpg',
  'img/hall_management/hm_39.jpg',
  'img/hall_management/hm_40.jpg',
  'img/hall_management/hm_41.jpg',
  'img/hall_management/hm_42.jpg',
  'img/hall_management/hm_43.jpg',
  'img/hall_management/hm_44.jpg'
];

export default class ProjectsPage extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
        photoIndex1: 0,
        photoIndex2: 0,
        photoIndex3: 0,
        photoIndex4: 0,
        photoIndex5: 0,
        photoIndex6: 0,
        isOpen1: false, 
        isopen2: false,
        isOpen3: false,
        isOpen4: false,
        isOpen5: false,
        isOpen6: false,
      }
  }

  /*lightBoxSetting (photoIndex, isOpen, photos){ 
    return (
        <Lightbox
          mainSrc={photos[photoIndex]}
          nextSrc={photos[(photoIndex + 1) % photoIndex.length]}
          prevSrc={photos[(photoIndex + photoIndex.length - 1) % photos.length]}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + photos.length - 1) % photos.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % photos.length,
            })
          }/>
    )
  }*/

  // onUpdatePhotoIndex = (i) => {
  //   this.setState(state => {
  //     const photoIndex = state.photoIndex.map(item => item + 1);
 
  //     return {
  //       list,
  //     };
  //   });
  // };

	render() {
    let { photoIndex1, photoIndex2, photoIndex3, photoIndex4, photoIndex5, photoIndex6, isOpen1, isOpen2, isOpen3, isOpen4, isOpen5, isOpen6 } = this.state;

		return (
      <section className="home_gallery_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>Selected Projects</h2>
          </div>
        </div>
        <div className="container">
          <div className="gallery_f_inner row imageGallery1">
            <div className="col-lg-4 col-md-4 col-sm-6 laravel css">
              <div className="h_gallery_item">
              <a className="btn btn-primary btn-learn"><img className ="photo" src='img/gallery/project_ecomm_user_1.jpg' alt="" onClick={() => this.setState({ isOpen1: true })}/>
                {/*<p style={{color: '#000'}} > View Snapshots</p>*/}
                </a>
                {/* {isOpen1 && this.lightBoxSetting(photoIndex1, isOpen1, images)} */}
                {isOpen1 && (
                  <Lightbox
                    mainSrc={images[photoIndex1]}
                    nextSrc={images[(photoIndex1 + 1) % images.length]}
                    prevSrc={images[(photoIndex1 + images.length - 1) % images.length]}
                    onCloseRequest={() => this.setState({ isOpen1: false, photoIndex1: 0 })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex1: (photoIndex1 + images.length - 1) % images.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex1: (photoIndex1 + 1) % images.length,
                      })
                    }/>
                )}
                <div className="g_item_text">
                  <h4>eMarketPlace</h4>
                  <p>e-Commerce Website</p>
        				  <p>Languages: PHP, HTML, JavaScript, MySQL</p>
                  <p>Frameworks: Laravel, VueJS, Apache </p>
                  <p>Collaborators: <a href="https://github.com/abhik1505040">Abhik</a>, <a href="https://github.com/RudaibaAdnin">Rudaiba</a></p>
                  {/* <p><a href = "https://github.com/abhik1505040/eMarketPlace">Learn more </a></p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 cpp">
              <div className="h_gallery_item">
                <a className="btn btn-primary btn-learn"><img className ="photo" src='img/chess/chess_1.jpg' alt="" onClick={() => this.setState({ isOpen2: true })}/>
                {/*<p style={{color: '#000'}} > View Snapshots</p>*/}
                </a>
 
                {isOpen2 && (
                  <Lightbox
                    mainSrc={images2[photoIndex2]}
                    nextSrc={images2[(photoIndex2 + 1) % images2.length]}
                    prevSrc={images2[(photoIndex2 + images2.length - 1) % images2.length]}
                    onCloseRequest={() => this.setState({ isOpen2: false, photoIndex2: 0 })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex2: (photoIndex2 + images2.length - 1) % images2.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex2: (photoIndex2 + 1) % images2.length,
                      })
                    }/>
                )} 
                <div className="g_item_text">
                  <h4>Chess Fantasy</h4>
                  <p>Two Player Chess Game</p>
        				  <p>Languages: C++, C</p>
                  <p>Framework: iGraphics </p>
                  <p>Collaborator: <a href="https://github.com/ahnaf005">Ahnaf</a></p>
                  <p><a href = "https://github.com/bPapan/Two-Player-Chess-using-iGraphics">Learn more </a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 cpp">
              <div className="h_gallery_item">
                <a className="btn btn-primary btn-learn"><img className ="photo" src='img/hall_management/hm_base.jpg' alt="" onClick={() => this.setState({ isOpen6: true })}/>
                {/*<p style={{color: '#000'}} > View Snapshots</p>*/}
                </a>
 
                {isOpen6 && (
                  <Lightbox
                    mainSrc={images6[photoIndex6]}
                    nextSrc={images6[(photoIndex6 + 1) % images6.length]}
                    prevSrc={images6[(photoIndex6 + images6.length - 1) % images6.length]}
                    onCloseRequest={() => this.setState({ isOpen6: false, photoIndex6: 0 })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex6: (photoIndex6 + images6.length - 1) % images6.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex6: (photoIndex6 + 1) % images6.length,
                      })
                    }/>
                )} 
                <div className="g_item_text">
                  <h4>Residential Hall Management</h4>
                  <p>For BUET Authority and Students</p>
        				  <p>Languages: Java, CSS, SQL</p>
                  <p>Frameworks: JavaFX, Oracle</p>
                  <p>Collaborator: <a href="https://github.com/abhik1505040">Abhik</a></p>
        				  <p><a href = "https://github.com/abhik1505040/eMarketPlace">Learn more </a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 cpp">
              <div className="h_gallery_item">
                <a className="btn btn-primary btn-learn"><img className ="photo" src='img/asteroids/asteroids_base.jpg' alt="" onClick={() => this.setState({ isOpen3: true })}/>
                {/*<p style={{color: '#000'}} > View Snapshots</p>*/}
                </a>
 
                {isOpen3 && (
                  <Lightbox
                    mainSrc={images3[photoIndex3]}
                    nextSrc={images3[(photoIndex3 + 1) % images3.length]}
                    prevSrc={images3[(photoIndex3 + images3.length - 1) % images3.length]}
                    onCloseRequest={() => this.setState({ isOpen3: false, photoIndex3: 0 })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex3: (photoIndex3 + images3.length - 1) % images3.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex3: (photoIndex3 + 1) % images3.length,
                      })
                    }/>
                )} 
                <div className="g_item_text">
                  <h4>Asteroids</h4>
                  <p>Mini 2D Shooting Game</p>
        				  <p>Language: C# </p>
                  <p>Framework: Unity </p>
                  <p><a href = "https://github.com/bPapan/Asteroid-Game-C_sharp">Learn more </a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 cpp">
              <div className="h_gallery_item">
                <a className="btn btn-primary btn-learn"><img className ="photo" src='img/CT/CT_base.jpg' alt="" onClick={() => this.setState({ isOpen4: true })}/>
                {/*<p style={{color: '#000'}} > View Snapshots</p>*/}
                </a>
 
                {isOpen4 && (
                  <Lightbox
                    mainSrc={images4[photoIndex4]}
                    nextSrc={images4[(photoIndex4 + 1) % images4.length]}
                    prevSrc={images4[(photoIndex4 + images4.length - 1) % images4.length]}
                    onCloseRequest={() => this.setState({ isOpen4: false, photoIndex4: 0 })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex4: (photoIndex4 + images4.length - 1) % images4.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex4: (photoIndex4 + 1) % images4.length,
                      })
                    }/>
                )} 
                <div className="g_item_text">
                  <h4>CT Routine</h4>
                  <p>Class Test Management System</p>
                  <p>Languages: Java, CSS</p>
                  <p>Framework: JavaFX</p>
                  <p>Collaborator: <a href="https://github.com/abhik1505040">Abhik</a></p>
        				  <p><a href = "https://github.com/bPapan/Class-Test-Management-Software">Learn more </a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 cpp">
              <div className="h_gallery_item">
                <a className="btn btn-primary btn-learn"><img className ="photo" src='img/NS2/NS_1.jpg' alt="" onClick={() => this.setState({ isOpen5: true })}/>
                {/*<p style={{color: '#000'}} > View Snapshots</p>*/}
                </a>
 
                {isOpen5 && (
                  <Lightbox
                    mainSrc={images5[photoIndex5]}
                    nextSrc={images5[(photoIndex5 + 1) % images5.length]}
                    prevSrc={images5[(photoIndex5 + images5.length - 1) % images5.length]}
                    onCloseRequest={() => this.setState({ isOpen5: false, photoIndex5: 0 })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex5: (photoIndex5 + images5.length - 1) % images5.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex5: (photoIndex5 + 1) % images5.length,
                      })
                    }/>
                )} 
                <div className="g_item_text">
                  <h4>MAC Protocol Analysis</h4>
                  <p>Modification of MAC 802.11</p>
        				  <p>Languages: C++, Shell, Awk</p>
                  <p>Tools: Gnuplot, NS-2</p>
                  <p>Collaborator: <a href="https://github.com/montaser55">Montaser</a></p>
        				  <p><a href = "https://github.com/bPapan/Analysis-of-MAC-Protocols-using-NS2">Learn more </a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="more_btn">
            <a className="main_btn" href="https://github.com/bPapan">More Projects</a>
          </div>
        </div>
      </section>
    );
  };
};