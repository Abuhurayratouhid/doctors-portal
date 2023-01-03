import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';


const AllUsers = () => {


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/users`)
            .then(res => res.json())

    })
    // console.log(users)
    // handleDeleteUser
    const handleDeleteUser= (_id)=>{
        // console.log(_id)
        const agree = window.confirm('Are you sure to delete this user')
        if(agree){
            fetch(`http://localhost:5000/deleteUser/${_id}`,{
            method: 'DELETE',
        
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success('user deleted successfully')
                refetch();
            }
            // console.log(data)
        })
        }
}


// handle make admin 
const handleUpdate= (_id)=>{
    // console.log(_id)

    fetch(`http://localhost:5000/updateUser/${_id}`,{
        method: 'PUT',
    })
    .then(res=> res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            toast.success('making admin successfully done')
            refetch()
        }
        console.log(data)
    })

}
    return (
        <div>


            {/* table  */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Position</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>
                                    {
                                        user?.role ?
                                        <button  className="btn btn-accent">Admin </button>
                                        :
                                        <button onClick={()=>handleUpdate(user._id)} className="btn btn-primary">Make admin</button>
                                    }
                                    </td>
                                <td><button onClick={()=>handleDeleteUser(user._id)} className="btn btn-warning">Delete </button></td>
                                
                                {/* <button className="btn ">delete </button> */}
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;