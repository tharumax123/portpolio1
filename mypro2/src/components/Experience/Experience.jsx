import React from 'react'

const Experience = () => {
  return (
    <div className="dark:bg-black text-white dark:text-white py-14">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* first col */}
          <div className="bg-dark/50 p-4 grid place-items-center">
            <div className="text-center space-y-3">
              <h1 className="text-5xl font-bold">2</h1>
              <p className="text-xl font-semibold">Years of Experience</p>
            </div>
          </div>
          {/*second colum*/}
          <div className="grid grid-rows-2 gap-4">
            <div className="text-center p-6 bg-dark">
              <h1 className='text-3xl font-bold'>45+</h1>
              <p>Happy Client</p>
            </div>
            <div className="text-center p-6 bg-dark">
              <h1 className='text-3xl font-bold'>25+</h1>
              <p>Project Completed</p>
            </div>
          </div>
           {/*third colum*/}
           <div className="grid grid-rows-2 gap-4">
            <div className="text-center p-6 bg-dark">
              <h1 className='text-3xl font-bold'>45+</h1>
              <p>Happy Client</p>
            </div>
            <div className="text-center p-6 bg-dark">
              <h1 className='text-3xl font-bold'>25+</h1>
              <p>Project Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
