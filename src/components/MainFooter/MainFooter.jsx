import React from 'react'

function MainFooter() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="inner-container">
                    <div className="little-about-us part">
                        <p>Little about us</p>
                        <p><span>Sed posuere</span> consectetur  est at.
                           Nulla vitae elit libero, a pharetra.
                           Lorem ipsum <span>dolor sit</span> amet, conse
                           ctetuer adipiscing elit.</p>
                        <p>Socialize with us</p>

                        <div className="about-icon-container">
                            <img src={'/images/Icons/footer/facebook.png'} alt="icon" />
                            <img src={'/images/Icons/footer/twitter.png'} alt="icon" />
                            <img src={'/images/Icons/footer/globe.png'} alt="icon" />
                            <img src={'/images/Icons/footer/dribble.png'} alt="icon" />
                            <img src={'/images/Icons/footer/mail.png'} alt="icon" />

                        </div>


                    </div>
                    <div className="our-archives part">
                        <p>Our archives</p>
                        <p>March 2012</p>
                        <p>...............................................................</p>
                        <p>February 2012</p>
                        <p>...............................................................</p>
                        <p>January 2012</p>
                        <p>...............................................................</p>
                        <p>December 2011</p>


                    </div>
                    <div className="popular-posts part">
                        <div className="popular-inner-container">
                            <p>Popular Posts</p>
                            <div className="post">
                                <img className="post-image" src={'/images/footer/image-1.png'} alt="post-1" />
                                <div className="right-div">
                                    <p>Great Album</p>

                                    <div className="comment-div">
                                        <img src={'/images/Icons/footer/comment.png'} alt="comment" />
                                        <p>12 Comments</p>

                                    </div>

                                </div>
                            </div>
                            <div className="post">
                                <img className="post-image" src={'/images/footer/image.png'} alt="comment" />
                                <div className="right-div">
                                    <p>Great Album</p>
                                    <div className="comment-div">
                                        <img src={'/images/Icons/footer/comment.png'} alt="comment" />
                                        <p>12 Comments</p>
                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>
                    <div className="search-our-site part">
                        <p>Search our Site</p>
                        <input placeholder="Enter Search ..."></input>
                        <p>Tag Cloud</p>

                        <div className="btn-container-footer">
                            <button>Audio CD</button>
                            <button>Video</button>
                            <button>Playlist</button>
                            <button>Avantgarde</button>
                            <button>Melancholic</button>
                        </div>

                    </div>

                </div>
            </div>
            
            <p className="go-top">^</p>
        </div>
    )
}

export default MainFooter;
