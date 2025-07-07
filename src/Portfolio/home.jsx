import './Home.css'

 export function Homepage(){
    return(
        
             <main className='detail-container'>
                <div className=''>
                    <button className='hlo-btn'>Hello</button>
                    <h4><span className='self'>I`m</span> <span className='name'>Nani</span></h4>
                    <h6 className='tag-line'>UI/US Designer Front-End Developer
                      <br/>  & Thinker Based in India
                    </h6>
                    <div>
                        <button className='btn'>Download CV</button>
                        <button className='btn'>Get in Touch</button>
                    </div>
                </div>
                <div>
                    <img className='hero-img' src='hero.jpg'/>
                    </div>
            </main>
           
        
    )
}