import { ExternalLink } from 'react-external-link';
import './App.css';
import Joseph from './joseph.jpg';

function App() {
  return (
    <div className='container'>
      <header>
        <figure className='text-center'>
          <img id='profile_img' src={Joseph} alt='My profile' />
          <figcaption>
            <p id='twitter'>@deljoluks</p>
            <p id='slack' hidden>lerderl</p>
          </figcaption>
        </figure>
      </header>
      {/* Buttons */}
      <section className='d-grid gap-2'>
        <button>
          <ExternalLink href='https://training.zuri.team/' id='btn__zuri'>Zuri Team</ExternalLink>          
        </button>
        <button>
          <ExternalLink href='http://books.zuri.team' id='books'>Zuri Books</ExternalLink>
          <p className='subtext'>This is where you will find books about design and coding</p>     
        </button>
        <button>
          <ExternalLink href='https://books.zuri.team/python-for-beginners?ref_id=lerderl' id='book__python'>Python Book</ExternalLink>
          <p className='subtext'>Python book for beginners to easily grasp the coding concepts in order to develop applications</p>     
        </button>
        <button>
          <ExternalLink href='https://background.zuri.team' id='pitch'>Background Check on Coders</ExternalLink>
          <p className='subtext'>We offer reliable and safe software to check the background for developers</p>     
        </button>
        <button>
          <ExternalLink href='https://books.zuri.team/design-rules' id='book__design'>Design Book</ExternalLink>
          <p className='subtext'>
            Get a free e-copy of the hng design book to guide you on your journey to design customer friendly user interfaces and improve user experience
          </p>     
        </button>
      </section>
    </div>
  );
}

export default App;
