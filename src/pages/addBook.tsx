import { useState } from "react";
import Swal from 'sweetalert2'
import { useBookAddMutation } from "../redux/features/bookApi";

const AddBook = () => {
    const [bookAdd, { isLoading, isError, isSuccess }] = useBookAddMutation();
    const [bookObj, setBookObj] = useState({})

    const AddBookHandler = async () => {
        const addingBook: any = await bookAdd(bookObj);
        console.log('add book data', addingBook)
        if(addingBook?.data?.status == 200){
            Swal.fire(
                'Good job!',
                'New Book is created!',
                'success'
              )

        }
   
    }
  return (
    <div className="mt-52 mx-36">
        <h4 className="text-6xl font-bold text-violet-800">Add New Book</h4>
        <div className="border border-4 border-blue-600 mt-16 p-7 w-6/12 rounded-lg ">
            <div className="center">
            <label className="text-violet-800 font-bold">Title</label>
            <input type="text" onChange={(e) => {
                setBookObj({...bookObj, title: e.target.value})
            }} className="block mt-4 border border-1 border-gray-600 w-80 p-2 rounded" placeholder="Enter Title"/>
            </div>
            <div className="mt-4">
            <label className="text-violet-800 font-bold">Author</label>
            <input  onChange={(e) => {
                setBookObj({...bookObj, author: e.target.value})
            }} className="block mt-4 border border-1 border-gray-600 w-80 p-2 rounded"  placeholder="Enter Author Name"/>
            </div>
            <div className="mt-4">
            <label className="text-violet-800 font-bold">Genre</label>
            <input  onChange={(e) => {
                setBookObj({...bookObj, genre: e.target.value})
            }} className="block mt-4 border border-1 border-gray-600 w-80 p-2 rounded"  placeholder="Enter Genre"/>
            </div>
            <div className="mt-4">
            <label className="text-violet-800 font-bold">Publication Date</label>
            <input type="date" onChange={(e) => {
                setBookObj({...bookObj, publicationDate: e.target.value})
            }} className="block mt-4 border border-1 border-gray-600 w-80 p-2 rounded" placeholder="Enter Password"/>
            </div>
            <button  onClick={() => AddBookHandler()} className="rounded-full bg-sky-400 py-2 px-4 mt-4 text-white font-bold">Add Book</button>
        </div>
    </div>
  );
};

export default AddBook;
