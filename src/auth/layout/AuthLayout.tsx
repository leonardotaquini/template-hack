import { Outlet } from "react-router-dom"


export const AuthLayout = () => {

  return (
    <main className="h-full grid grid-cols-12">
      <section className="sm:grid place-items-center hidden col-span-6 ">
        <h1 className="text-center text-2xl">Welcome to Devpools</h1>
      </section>
      <section className="col-span-12 sm:col-span-6">
        <Outlet />
      </section>
    </main>
  )
}
