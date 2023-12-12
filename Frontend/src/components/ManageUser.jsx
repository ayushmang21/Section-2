import React from 'react'

const ManageUser = () => {

    const getUserData = async () => {

        const res = await fetch ('http://localhost:5000/user/getall');
        console.log(res.status);

    }

  return (
    <div>ManageUser</div>
  )
}

export default ManageUser;