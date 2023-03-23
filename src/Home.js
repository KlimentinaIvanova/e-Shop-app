import React from 'react'
import '../src/styles/Home.css'


function Home() {
    return(
        <div>
            <div className='home'>
                <div className="home_container">
                <img src='https://estorejo.com/public/uploads/all/cJ2oUwlmtOZ86T86DWQG7mZA3OFCuVQuwLB2Wfnx.png' 
                alt='' className='home_image'/>
                <div className='home_text'>
                    <p><strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat impedit, aspernatur, a doloremque dicta itaque soluta corporis quaerat odio excepturi id sequi inventore pariatur illum dolores praesentium hic iste quasi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ullam repellendus cumque, ut tempore, voluptates, sunt similique officiis eius quas cupiditate reprehenderit ipsum optio deserunt sapiente? Quidem fugit architecto aliquam.
                        </strong></p>
                </div>
                <div className='signIn_button'>
                <span><a href='/login'> Sign in</a></span>
                </div>
                <div className='registerHere_button'>
                <span>No account? Register <a href="/register">here</a></span>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Home

