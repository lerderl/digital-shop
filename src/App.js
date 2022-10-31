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
    </div>
  );
}

export default App;
