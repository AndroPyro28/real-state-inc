import { TCondo } from '@/data'
import { Bath, Bed, Layers2 } from 'lucide-react'
import { Button } from './ui/button'


type CondoProps = {
    data: TCondo
}
const Condo = ({data}:CondoProps) => {
  return (
    <div className='flex flex-col bg-white rounded-xl overflow-hidden max-w-[450px] relative '>
        <section className='h-[350px] overflow-hidden w-full cursor-pointer'>
            <img src={data.imgUrl} className=' h-[350px] w-full object-center transition-all object-cover hover:scale-[2] ' alt="Photo" />
        </section>

        <section className='flex flex-col px-5 my-10 gap-y-5 justify-evenly'>
        <h1 className='text-lg font-semibold h-[100px]'>{data.title}</h1>
        <p className='text-md font-semibold'> {data.location}</p>

        <div className='flex gap-x-2 text-xl'>
            <strong className='text-black'>Price:</strong>
            <span className='font-semibold text-zinc-500'>{ new Intl.NumberFormat('tl-PH', { style: 'currency', currency: 'PHP' }).format(data.price)}</span>
        </div>

        <div className='flex justify-evenly'>
            <span className='flex items-center gap-x-3 text-zinc-500'><Bed /> {data.bed}</span>
            <span className='flex items-center gap-x-3 text-zinc-500'><Bath /> {data.bathroom}</span>
            <span className='flex items-center gap-x-3 text-zinc-500'><Layers2 /> {data.size} sqm</span>
            
        </div>

        <div className='flex gap-3 items-center text-sm flex-wrap h-[100px]'>
            <strong>Facilities:</strong>
            {data?.facilities.map(facility => <span className='px-3 py-2 bg-gray-50 rounded-xl font-semibold text-zinc-500 cursor-pointer hover:bg-zinc-300 hover:text-white'>{facility}</span>) }
        </div>

        <Button className='w-fit self-end rounded-xl px-10 py-5'>View Property</Button>
        </section>
        
    </div>
  )
}

export default Condo