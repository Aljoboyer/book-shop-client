import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllBookQuery } from "../redux/features/bookApi";

const AllBooks = () => {
  const { data, isLoading, error } = useGetAllBookQuery({
    refetchOnMountOrArgChange: true,
  });
const navigate = useNavigate();

useEffect(() => {
  const isToken = localStorage.getItem('token')
  if(!isToken){
    navigate('/login')
    return
  }
},[])
  return (
    <div className="my-96">
       <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <h1 className="text-6xl text-blue-900 font-bold text-center mb-7">All Book Here</h1>
       {
        <div className="grid grid-cols-4 gap-4 container-xl">
          {
            data?.map((book: any) => (
              <div className="border border-2 border-teal-200  rounded-lg ps-7 py-7">
                <p className="text-teal-400 text-2xl font-bold">{book?.title}</p>
                <p className="text-teal-950 font-bold">{book?.author}</p>
                <p className="text-teal-950 font-bold">{book?.genre}</p>
                <p className="text-teal-950 font-bold">{book?.publicationDate}</p>
                <button onClick={() => navigate(`/BookDetails/${book?._id}`)} className="rounded-full bg-teal-400 py-2 px-4 mt-4 text-teal-950 font-bold">View Details</button>
              </div>
            ))
          }
        </div>
       }
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
