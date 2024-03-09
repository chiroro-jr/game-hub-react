import NavBar from '@/components/NavBar'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()

  return (
    <>
      <NavBar />
      <div className="pt-10 text-center">
        <h1 className="text-[6rem] font-black  lg:text-[8rem]">Oops</h1>
        <p className="text-lg text-gray-400 lg:text-xl">
          {isRouteErrorResponse(error)
            ? 'This page does not exist.'
            : 'An unexpected error occurred.'}
        </p>
      </div>
    </>
  )
}

export default ErrorPage
