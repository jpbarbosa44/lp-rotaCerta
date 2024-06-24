import android from '../assets/android.png'
import apple from '../assets/apple.png'
import { FaInstagram, FaFacebook, FaTwitter  } from "react-icons/fa";


export function FifthModule() {
    return (
        <div className="flex h-screen bg-cover  bg-[url('/motorista.png')]">
            <div className="p-20 h-screen gap-4 text-white text-center w-full items-center justify-center bg-blue-600/50 flex flex-col">
                <h1 className="text-[48px] font-bold leading-9">Baixe agora e descubra como o rotaCerta pode transformar suas viagens. </h1>
                <p className="text-lg">Ganhe 3 Meses de Premium e Acesso Antecipado!</p>
                <a href="https://forms.gle/jYXkrtoxcai7Zpgo8" target="_blank" className='flex items-center justify-center h-12 w-60 rounded-full text-black bg-[#fcad0b]'>Download</a>
            
                <div className='flex gap-4 mt-8'>
                    <button><img src={android} alt="" className='w-24' /></button>
                    <button><img src={apple} alt="" className='w-24' /></button>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p>Redes sociais</p>
                    <div className='text-white flex gap-4 mt-2'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    )
}
