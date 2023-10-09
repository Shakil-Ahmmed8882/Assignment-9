import useAuth from "../../../../../../utils/UseContext";


const Profile = () => {
      const {user} = useAuth()

      console.log(user)
      return (
            <div className="md:flex">
            <div className="flex-1">
                  <div className="bg-blue-500 w-full h-32 relative">
                        <img className="w-[80px] h-[80px] rounded-full border-[4px] absolute -bottom-8 right-[42%] border-[#ffffff]" src={user.photoURL?user.photoURL:'https://th.bing.com/th/id/OIP.Cl56H6WgxJ8npVqyhefTdQHaHa?pid=ImgDet&rs=1'} alt="" />
                  </div>
                  <div>
                        <h1 className="text-2xl pt-9 text-center">{user.displayName&&user.displayName} </h1>
                        <p className="text-center">{user?.email}</p>
                  </div>
            </div>
            <div className="bg-primary-clr hidden md:block w-full flex-1 h-screen">

            </div>
            </div>
      );
};

export default Profile;