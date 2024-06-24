import cell1 from '../assets/cell1.png'
import cell2 from '../assets/cell2.png'
import texto from '../assets/texto.png'


export function ThirdModule() {
    return (
        <div className="flex h-screen">
            <div className="flex items-center justify-center p-8 bg-[#0c3f8c] flex-col w-[40%]">
                <img src={cell1} className='w-40 ' alt="" />
                <p className='text-white mt-4'>
                    O RoataCerta é o aplicativo de GPS feito especialmente para caminhoneiros, oferecendo tudo o que você precisa para suas viagens de longa distância. Com funcionalidades avançadas e informações centralizadas, o RotaCerta torna suas rotas mais seguras, eficientes e tranquilas.
                </p>
            </div>
            <div className='flex w-[60%] bg-[#fcad0b] items-center justify-center gap-4'>
                <img src={cell2} className='w-auto' alt="" />
                <img src={texto} className='w-auto'/>
            </div>

        </div>
    )
}