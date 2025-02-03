import Banner from '../components/Banner'
import About from '../components/About'
import Skills from '../components/Skills.tsx'

export default function Home() {
  return (
    <div className='mt-5 pt-5'>
        <Banner/>
        <About/>
        <Skills/>
    </div>
  )
}

