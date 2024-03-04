import { properties } from '@/data'
import React from 'react'
import Condo from './Condo'

type PropertiesProps = {
  location:string;
name:string;
}

const Properties:React.FC<PropertiesProps> = ({name, location}) => {

  console.log(properties.filter((property) => property.title.includes(name) || property.location.includes(location)))
  return (
    <div className='flex flex-col bg-zinc-100/90'>
        <section className='flex p-10 md:p-20 justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                properties.filter((property) => property.title.toLowerCase().includes(name.toLowerCase())).map((f) => (
                    <Condo data={f} key={f.id} />
                ))
            }
            </div>
        </section>
    </div>
  )
}

export default Properties