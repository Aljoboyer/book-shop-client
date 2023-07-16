import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDeleteBookMutation, useGetSingleBookQuery } from "../redux/features/bookApi";
import Swal from "sweetalert2";


const BookDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useGetSingleBookQuery(id, {
        refetchOnMountOrArgChange: true,
      });
    const [deleteBook, { isError, isSuccess }] = useDeleteBookMutation();
    const navigate = useNavigate();

    useEffect(() => {
      const isToken = localStorage.getItem('token')
      if(!isToken){
        navigate('/login')
        return
      }
    },[])
  const deleteHandler = () => {
    Swal.fire({
      title: 'Do you want to Delete the book?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {

      if (result.isConfirmed) {
        deleteBook(id)
        Swal.fire('Saved!', '', 'success')
       setTimeout(() => {
        navigate('/')
       }, 300);
      } 
    })
  }
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
        <div className="border border-2 border-teal-200  rounded-lg ps-7 py-7">
                <p className="text-teal-400 text-6xl font-bold">{data?.title}</p>
                <p className="text-teal-950 text-xl font-bold  ">{data?.author}</p>
                <p className="text-teal-950  text-xl  font-bold">{data?.genre}</p>
                <p className="text-teal-950 font-bold">{data?.publicationDate}</p>
                <button onClick={() => navigate(`/EditBook/${data?._id}`)} className="rounded-full bg-teal-400 py-2 px-4 mt-4 text-teal-950 font-bold">Edit</button>
                <button onClick={deleteHandler} className="rounded-full bg-red-400 py-2 px-4 mt-4 text-teal-950 font-bold ms-4">Delete</button>
                <div></div>
              </div> 
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

export default BookDetails;
