import React , {useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import {preview} from '../assets';
import {getRandomPrompt} from "../utils"
import { FormField,Loader } from '../components';



const CreatePost = () => {
    const [form, setForm] = useState({
        name:'',
        prompt:'',
        photo:'',
    })
    const [loading, setLoading] = useState(false)
    const [generatingImg, setGeneratingImg] = useState(false)
    const handleSubmit=()=>{
       
    }
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]: e.target.value})
       
    }
    const handleSurpriseMe=()=>{
        console.log("click")
       const randomPrompt =getRandomPrompt(form.prompt);
       setForm({...form,prompt: randomPrompt})
    }
    const generateImage=()=>{
       
    }

  return (
    <section className='max-w-7xl mx-auto'>
        <div>

        <div>
            <h1 className='font-extrabold text-black text-[32px]'>Create</h1>
            <p className='mt-2 text-[#665e75] text-[18px] max-w-[500px]'> Create Imaginative and Visually Stunnimg images by dall-e ai and share with community</p>
        </div>
        </div>
        <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}><div className='flex flex-col gap-5'>
            <FormField labelName="your name" name="name" type="text" placeholder="rony" value={form.name} handleChange={handleChange}/>
            <FormField labelName="Prompt" name="prompt" type="text" placeholder="Enter Prompt" value={form.prompt} handleChange={handleChange} isSurpriseMe handleSurpriseMe={handleSurpriseMe}/>
             <div className='relative bg-gray-50 borderborder-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 justify-center items-center '>
                {form.photo?<img src={form.photo} alt={form.prompt} className='w-full h-full object-contain'/>:<img src={preview} alt="preview" className='w-9/12 h-9/12'/> }
                {generatingImg && <div className='absolute inset-0 z-0 flex justify-center items-center bg=[rgba(0,0,0,0.5)] rounded-lg'>
                    <Loader/>
                    </div>}

             </div>
             </div>
             <div className='mt-5 flex gap-5'>
                <button type='button' onClick={generateImage} className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
                    {generatingImg?"Generating ...":"Generate"}
                </button>

             </div>
             <div>
                <p className='mt-2 text-[#666e75] text-[14px]'>Once you generated the image you can share it with community</p>
                <button type="submit"  className='text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>{loading?"sharing...":"share with community"}</button>
             </div>
        </form>
    </section>
  )
}

export default CreatePost