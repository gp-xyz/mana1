import logo from './logo.png';
import stars from './stars.jpg';
import synth from './synth.jpg';
import hams from './hams.png';
import pic2 from './pic2.png';
import Card from './components/Card';
function App() {
  const bgImageStyle = {
    backgroundImage: `url("${synth}")`,
    backgroundSize: 'cover'
  }

  const hamsImageStyle = {
    backgroundImage: `url("${hams}")`,
    backgroundSize: 'cover'
  }


  return (
    <div className="App text-white">
      <div className="" style={bgImageStyle}>
        <div className="bg-gradient-to-r from-black pt-4 pb-20">


          <div className="flex mx-6 float-right my-5 text-black">
            <a href="#" className="mx-3 hover:opacity-80 duration-150 rounded-lg p-3 bg-amber-200">ABOUT</a> |
            <a href="#" className="mx-3 hover:opacity-80 duration-150 rounded-lg p-3 bg-amber-200">JOIN US</a> |
            <a href="#" className="mx-3 hover:opacity-80 duration-150 rounded-lg p-3 bg-blue-300">OH YEA</a>
          </div>
          <div className='flex max-w-xs items-center justify-start'>
  <img src={logo} className='mx-3' width="60px" />
  <h1 className="text-3xl p-3">ALTOMANA</h1>
</div>

          <div className='container'>
            <h1 className='text-5xl my-5 mx-20'>Distributing New Ideas in Medicine</h1>
          </div>
        </div>
      </div>
      <div className='grid grid-rows-3 p-10 m-5'>

      <Card boldtext="Altomana is connecting supplies to those who need it." extratext="Bringing innovative solutions to the medical supply chain."/>
      <Card boldtext="Stay Stocked and Stay Safe" extratext="Never run out of vital medical supplies or medicines." img={pic2} />

      <Card boldtext="Overcome supply chain issues." extratext="Find what you need, when you need it." img={hams} />

      <Card boldtext="Reduce waste. Streamline orders." extratext="Stop being caught offguard by supply shortages. Smooth out your order process." img={hams} />

      
      </div>


    </div>

  )
}

export default App
