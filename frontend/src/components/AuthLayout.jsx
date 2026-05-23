import React from "react"

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-full md:w-1/2 overflow-y-auto">
        <div className="min-h-full flex flex-col px-12 pt-8 pb-12">
          <div className="flex-grow flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>

      <div className="hidden md:block w-1/2">
        <img
  src="https://th.bing.com/th/id/OIP.Mw6Y6vuVfwzuVkGfNGPciAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  alt="Login background"
  className="h-full w-full object-cover"
/>
      </div>
    </div>
  )
}

export default AuthLayout
