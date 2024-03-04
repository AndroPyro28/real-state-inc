import { featured } from '@/data'
import Condo from './Condo'


const Details = () => {
  return (
    <div className='flex flex-col bg-zinc-100/90 w-full'>
        <div className='flex flex-col items-center m-10 gap-y-5'>
            <h1 className='text-3xl font-semibold text-black'>Featured Properties</h1>
            <p className='text-xl'>Find your next home. Get access to the best properties for sale and rent in the market.</p>
        </div>

        <section className='flex p-10 md:p-20 justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                featured.map((f) => (
                    <Condo data={f} key={f.id} />
                ))
            }
            </div>
            
        </section>
    </div>
  )
}

export default Details