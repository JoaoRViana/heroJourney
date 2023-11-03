import Image from 'next/image'
import load from '../../public/assets/load.gif'

export default function Loading(){
    return(
        <div className='p-2'>
        <Image src={load} width={200} height={200} alt={'loadingGif'} />
        <h1 className='text-center w-full'>Loading...</h1>
        </div>
    )
}