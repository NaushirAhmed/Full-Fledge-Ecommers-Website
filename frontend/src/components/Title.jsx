import React from 'react'

const Title = ({text1}) => {
  return (
     <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl bg-gray-200 font-bold text-center text-gray-800 mb-5">
             {text1}
        </h2>
    </div>
  )
}

export default Title