import React from "react";
import useTeamMember from "../../utils/Hooks/useTeamMember";
import Link from "next/link";

const TeamMember = () => {
  const { teamMembers } = useTeamMember();
  return (
    <>
      <section className="team-area pt-100 pb-70 bg-f9f9f9">
        <div className="container">
          <div className="section-title">
            <h2 className="md:!text-[4rem] !text-[2rem] font-extrabold text-center md:px-0 sm:px-6 px-[15px]">
              Meet Our Awesome{" "}
              <span className="bg-gradient-to-r font-ananda from-yellow to-green !text-transparent bg-clip-text font-extrabold inline-block">
                Team
              </span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className="row">
            {teamMembers.map(
              ({
                id,
                pic,
                twitterUrl,
                facebookUrl,
                linkedinUrl,
                name,
                title,
              }) => {
                return (
                  <div key={id} className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-team-member">
                      <div className="member-image">
                        <img src={pic.path} alt="image" />

                        <ul className="social">
                          <li>
                            <a
                              href={facebookUrl ?? "https://www.facebook.com/"}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="bx bxl-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={twitterUrl ?? "https://www.twitter.com/"}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="bx bxl-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={linkedinUrl ?? "https://www.linkedin.com/"}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="bx bxl-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="member-content">
                        <h3>
                          <a href="#">{name}</a>
                        </h3>
                        <span>{title}</span>
                      </div>
                    </div>
                  </div>
                );
              }
            )}

            {/* <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-team-member'>
                <div className='member-image'>
                  <img src='/images/team/team4.jpg' alt='image' />

                  <ul className='social'>
                    <li>
                      <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='member-content'>
                  <h3>
                    <a href='#'>John Capabel</a>
                  </h3>
                  <span>Programer</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMember;
