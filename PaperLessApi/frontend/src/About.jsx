import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
      <Helmet>
        <title>About | Sediupled</title>
      </Helmet>

      <h1 id="heading">Hi, I'm Chaitanya "Sediupled".</h1>
      <div className="about">
        <p>
          This is a website based off a terminal app I made a while ago to make playing DnD less strenuous and more immersive.
          Making it easier to focus on the game instead of the setup and maintenance.
        </p>
      </div>
    </>
  );
}

export default About;

