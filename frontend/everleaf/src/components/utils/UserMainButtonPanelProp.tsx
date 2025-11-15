

const UserMainPanelProp = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <>
      {isLogged ? (
        <div className="z-[20] w-[300px] h-[500px] border border-white bg-white text-black shadow-lg">
          Hello Logged User
        </div>
      ) : (
        <div className="z-[20] w-[500px] h-[500px] border border-black bg-white text-black shadow-lg">
          Hello Guest
        </div>
      )}
    </>
  );
};


export default UserMainPanelProp