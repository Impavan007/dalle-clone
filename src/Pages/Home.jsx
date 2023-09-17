import React,{useState,useEffect} from 'react';
import { Loader,FormField,Card } from '../components';

const RenderCards =({data, title})=>{
    if(data?.length>0){
        return data.map((post)=>
            <Card key={post._id}{...post}></Card>
        )
    }
    return (<h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>
        {title}
    </h2>)
 }



const Home = () => {
     const [loading, setLoading] = useState(false);
     const [allPost, setAllPost] = useState(null);
     const [search, setSearch] = useState('')
    
  return (
    <section className='max-w-7xl mx-auto'>
        <div>
            <h1 className='font-extrabold text-black text-[32px]'>The Community ShowCase</h1>
            <p className='mt-2 text-[#665e75] text-[18px] max-w-[500px]'> Browse Through The Collection of Imaginative and Visually Stunnimg images by dall-e ai</p>
        </div>
        <div className='mt-16'>
            <FormField/>

        </div>

        <div className='mt-10'>
            {loading?(<div className='flex justify-center items-center'>
                <Loader/>
            </div>):(
            <>
           { search && <h2 className='font-medium text-[#666e75] text-xl-mb3'>
                Showing Result For : <span className='text-[#222328]'>{search}
                </span>
            </h2>}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-3'>
            {search?<RenderCards data={[]} title="no search Results found"/>:<RenderCards data={[]} title='no-posts found'/> }
                
            </div>
            </>)}

        </div>


    </section>
  )
}

export default Home