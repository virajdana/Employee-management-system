import React from 'react'

const Add = () => {
  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
      <h2 className='text-2xl font-bold mb-6'>Add New Employee</h2>
      <form>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/*Name*/}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <input
              type='text'
              name='name'
              placeholder='Insert Name'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              required
              />
          </div>

          {/*Email*/}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              name='email'
              placeholder='Insert Email'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              required
              />
          </div>

          {/*Employee Id*/}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Employee Id
            </label>
            <input
              type='text'
              name='employeeId'
              placeholder='Employee Id'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              required
              />
          </div>

          {/*Date of Birth*/}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Date of Birth
            </label>
            <input
              type='date'
              name='dob'
              placeholder='DOB'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              required
              />
          </div>

          {/*Gender*/}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Gender
            </label>
            <select
              name='gender'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Add