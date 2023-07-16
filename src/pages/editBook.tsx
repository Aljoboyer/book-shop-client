import { useState,useEffect } from "react";
import Swal from 'sweetalert2'
import { useParams } from "react-router-dom";
import { useBookEditMutation, useGetSingleBookQuery } from "../redux/features/bookApi";

const EditBook = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useGetSingleBookQuery(id, {
        refetchOnMountOrArgChange: true,
      });
    const [bookEdit, { isError, isSuccess }] = useBookEditMutation();
    console.log( isLoading, isError, isSuccess, error)
    const [bookObj, setBookObj] = useState({
        _id: '',
        title: '',
        author: '',
        genre: '',
        publicationDate: '',
        createdAt: ''
    })
    
    useEffect(() => {
      if(data?.title){
        setBookObj(data)
      }
    },[data?.title])
    const EditBookHandler = async () => {

        const editingBOok: any = await bookEdit(bookObj);
        console.log('add book data', editingBOok)
        if(editingBOok?.data?.status == 200){
            Swal.fire(
                'Good job!',
                'Book is Updated!',
                'success'
              )

        }
   
    }
  return (
    <div className="mt-52 mx-36">
        <h4 className="text-6xl font-bold text-violet-800">Update Book</h4>
        <div className="border border-4 border-blue-600 mt-16 p-7 w-6/12 rounded-lg ">
            <div className="center">
            <label className="text-violet-800 font-bold">Title</label>
            <input defaultValue={bookObj?.title} type="text" onChange={(e) => {
                setBookObj({...bookObj, title: e.target.value})
            }} className="block mt-4 border border-1 border-gray-600 w-80 p-2 rounded" placeholder="Enter Title"/>
            </div>
            <div className="mt-4">
            <label className="text-violet-800 font-bold">Author</label>
            <input defaultValue={bookObj?.author}  onChange={(e) => {
                setBookObj({...bookObj, author: e.target.value})
            }} className="block mt-4 border border-1 border-gray-600 w-80 p-2 rounded"  placeholder="Enter Author Name"/>
            </div>
            <div className="mt-4">
            <label className="text-violet-800 font-bold">Genre</label>
            <input defaultValue={bookObj?.genre}  onChange={(e) => {
                setBookObj({...bookObj, genre: e.target.value})
            }} className="block mt-4 border border-1 border-gray-600 w-80 p-2 rounded"  placeholder="Enter Genre"/>
            </div>
            <div className="mt-4">
            <label className="text-violet-800 font-bold">Publication Date</label>
            <input defaultValue={bookObj?.publicationDate} type="date" onChange={(e) => {
                setBookObj({...bookObj, publicationDate: e.target.value})
            }} className="block mt-4 border border-1 border-gray-600 w-80 p-2 rounded" placeholder="Enter Password"/>
            </div>
            <button  onClick={() => EditBookHandler()} className="rounded-full bg-sky-400 py-2 px-4 mt-4 text-white font-bold">Update</button>
        </div>
    </div>
  );
};

export default EditBook;
