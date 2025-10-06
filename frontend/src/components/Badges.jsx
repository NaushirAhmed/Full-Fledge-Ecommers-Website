import React from 'react'

const Badges = (props) => {
  return (
  <span className={`inline-block py-1 px-4 rounded-full text-[14px] capitalize ${
    props.status === "pending" && "bg-gray-300 text-black"
  } ${
    props.status === "comfirm" && "bg-green-400 text-black"
  }
  ${
    props.status === "deliverd" && "bg-green-500 text-black"
  }
  ${
    props.status === "cancel" && "bg-red-500 text-black"
  }
  
  `}>{props.status}</span>
  )
}

export default Badges