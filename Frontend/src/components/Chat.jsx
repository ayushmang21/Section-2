import React from 'react'

const Chat = () => {
    return (
        <div className='container d-flex justify-content-center'>

            <div class="card my-5 w-50 ">

{/* Header */}
                <div class="card-header bg-success d-flex justify-content-between align-items-center">
                    <img className='rounded-circle' src="https://th.bing.com/th/id/OIP.Nl5tCCLifM2hpDKI0h6L3QAAAA?rs=1&pid=ImgDetMain" alt="" height={40}/>

                </div>

                <div class="card-body bg-success-subtle">

                </div>
{/* Footer */}
                <div class="card-footer bg-success d-flex justify-content- align-items-center">
                    <h5>😊</h5>
                    <input type="text" placeholder='Message' className='rounded-pill p-2 ps-3 border-0'/>
                </div>

            </div>

        </div>
    )
}

export default Chat;