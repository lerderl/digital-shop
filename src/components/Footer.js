import I4G from '../images/I4G.png';

const Footer = () => {
  return (
    <footer className='d-flex justify-content-between social-links'>
      <h3>Zuri<span className="dot">.</span>Internship</h3>
      <p>HNG Internship 9 Frontend Task</p>
      <img src={I4G} alt='Ingressive icon' />
    </footer>
  );
};

export default Footer;
