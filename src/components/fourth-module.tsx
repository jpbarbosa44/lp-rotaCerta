import cell3 from '../assets/cell3.png'
import texto from '../assets/texto.png'

export function FourthModule(){
    return (
        <div className="flex h-screen">
            <div className="flex items-center justify-center p-8 bg-[#fcad0b] flex-col w-[60%]">
                <img src={cell3} className='w-50 ' alt="" />
            </div>
            <div className='flex flex-col p-8 w-[40%] bg-[#0c3f8c] items-center justify-center gap-4'>
                <h1 className='text-white font-bold text-xl'>Vantagens de Utilizar o RotaCerta:</h1>
                <ul className='list-disc text-white flex flex-col gap-6'>
                    <li> Nosso aplicativo é projetado para atender às necessidades específicas dos caminhoneiros, proporcionando:</li>
                    <li> Rotas Otimizadas: Economize tempo e combustível com rotas planejadas especificamente para caminhões.</li>
                    <li> Comunidade Ativa: Interaja com outros caminhoneiros, compartilhe suas experiências e receba dicas valiosas.</li>
                    <li> 
                        Segurança na Estrada: Receba alertas sobre perigos e tenha acesso a um botão de emergência para situações críticas.
                    </li>
                    <li> 
                        Planejamento Eficiente: Planeje suas paradas de descanso e abastecimento de maneira prática e segura.
                    </li>

                </ul>
            </div>

        </div>
    )
}