import truck from '../assets/truck.jpeg'
import heading from '../img/heading.jpeg'
import android from '../assets/android.png'
import apple from '../assets/apple.png'


export function FirstModule() {
    return (
        <div className="flex items-center justify-around bg-[#fcad0b] h-screen">
            <div className="flex flex-col bg-[#0c3f8c] h-screen flex-1 items-center justify-center">
               <img src={heading} alt="" />

                <button className='h-12 w-60 rounded-full bg-[#fcad0b]'>Saiba mais</button>

                <div className='flex gap-4 mt-8'>
                    <button><img src={android} alt="" className='w-24' /></button>
                    <button><img src={apple} alt="" className='w-24' /></button>
                </div>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center">
                <img src={truck} alt="caminhao" className='w-80' />
            </div>
        </div>
    )
}