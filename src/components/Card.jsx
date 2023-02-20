import React, {useState} from 'react'

function Card(props) {
    const [img,setImg] = useState(props.img)
    const imageStyler = {
        backgroundImage: `url("${props.img}")`,
        backgroundSize: 'cover'
      }


    return (
        <div>
        {img ? ( 
        <div className='border-white px-5 rounded-xl py-3 bg-pink-500 grid grid-cols-2 m-5'>
            <div className='grid grid-rows-2'>
                <h2 className="font-bold text-3xl">{props.boldtext}</h2>
                {props.extratext}
            </div>

            <div className='rounded' style={imageStyler}></div>

        </div>) : (
            <div className='border-white px-5 rounded-xl py-3 bg-pink-500 grid grid-cols-1 m-5'>
            <div className='grid grid-rows-2'>
                <h2 className="font-bold text-3xl">{props.boldtext}</h2>
                {props.extratext}
            </div>


        </div>  
        )
        }
        </div>
    )
}

export default Card