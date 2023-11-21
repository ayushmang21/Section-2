import React from 'react'

const Chat = () => {
    return (
        <div className='container d-flex justify-content-center'>

            <div class="card my-5 w-50 ">

{/* Header */}
                <div class="card-header bg-success d-flex justify-content-between align-items-center">
                    <img className='rounded-circle' src="https://th.bing.com/th/id/OIP.Nl5tCCLifM2hpDKI0h6L3QAAAA?rs=1&pid=ImgDetMain" alt="" height={40}/>
                    <p></p>
                </div>

                <div class="card-body bg-success-subtle">

                </div>
{/* Footer */}
                <div class="card-footer bg-success d-flex align-items-center justify-content-between">

                    <div className='d-inline-flex align-items-center bg-white rounded-pill px-3 w-100'>
                        <p className='fs-4'><i class="bi bi-emoji-smile-fill"></i></p>
                        <input type="text" placeholder='Message' className='p-2 ms-2 border-0 text-muted w-75'/>
                        <p className='fs-4 ps-2'><i class="bi bi-paperclip"></i></p>
                        <p className='fs-4 ps-2'><i class="bi bi-currency-rupee"></i></p>
                        <p className='fs-4 ps-2 pe-2'><i class="bi bi-camera-fill"></i></p>
                    </div>

                    <div className='ms-4 me-3 rounded-pill bg-white'>
                        <p className='fs-4 text-success'><i class="bi bi-mic-fill"></i></p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Chat;