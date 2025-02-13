


// export default function SettingsSideBar({ profile, setProfile, account, setAccount, dangerous, setDangerous }: any) {
//     function handleClick(index: number) {
//         if (index === 0) {
//             setProfile(true);
//             setAccount(false);
//             setDangerous(false);
//         } else if (index === 1) {
//             setProfile(false);
//             setAccount(true);
//             setDangerous(false);
//         } else {
//             setProfile(false);
//             setAccount(false);
//             setDangerous(true);
//         }
//     }
//     return (
//         <div className="w-1/4 p-4 shadow-md">
//             <h2 className="pl-4 pt-10 mb-6 text-lg font-bold">Account</h2>
//             <ul className="pl-4 space-y-4 text-gray-700 cursor-pointer">
//                 <li className={`${ profile ? 'text-green-400' : ''}`} onClick={(e) => handleClick(0)}>Profile</li>
//                 <li className={`${ account ? 'text-green-400' : ''}`} onClick={e => handleClick(1)}>Account</li>
//                 <li className="mt-6 font-bold cursor-default">Danger Zone</li>
//                 <li className={`${ dangerous ? 'text-green-400' : ''}`} onClick={e => handleClick(2)}>Dangerous</li>
//             </ul>
//         </div>
//     )
// }



// settingsSideBar
export default function SettingsSideBar({
    profile,
    setProfile,
    account,
    setAccount,
    dangerous,
    setDangerous,
    isMobile,
  }: any) {
    function handleClick(index: number) {
      if (index === 0) {
        setProfile(true);
        setAccount(false);
        setDangerous(false);
      } else if (index === 1) {
        setProfile(false);
        setAccount(true);
        setDangerous(false);
      } else {
        setProfile(false);
        setAccount(false);
        setDangerous(true);
      }
    }
  
    return isMobile ? (
      <div className="w-full border-b md:border-b-0 md:w-1/4 p-4 shadow-md">
        <h2 className="pl-6 pt-4 pb-4 md:pt-10 mb-2 md:mb-6 text-xl font-bold">Account</h2>
        <ul className="flex justify-around md:flex-col sm:pl-4 space-y-0 md:space-y-4 text-gray-700 cursor-pointer">
          <li className={`${profile ? "text-green-400" : ""} w-full text-center md:text-left`} onClick={(e) => handleClick(0)}> 
            Profile
          </li>
          <li className={`${account ? "text-green-400" : ""} w-full text-center md:text-left`} onClick={(e) => handleClick(1)}>
            Account
          </li>
          <li className={`${   dangerous ? "text-green-400" : "" } w-full text-center md:text-left md:mt-6 md:font-bold md:cursor-default`} onClick={(e) => handleClick(2)}>
            Dangerous
          </li>
        </ul>
      </div>
    ) : (
      <div className="w-1/4 p-4 shadow-md">
        <h2 className="pl-4 pt-10 mb-6 text-lg font-bold">Account</h2>
        <ul className="pl-4 space-y-4 text-gray-700 cursor-pointer">
          <li className={`${profile ? "text-green-400" : ""}`} onClick={(e) => handleClick(0)}>
            Profile
          </li>
          <li className={`${account ? "text-green-400" : ""}`} onClick={(e) => handleClick(1)}>
            Account
          </li>
          <li className="mt-6 font-bold cursor-default">Danger Zone</li>
          <li className={`${dangerous ? "text-green-400" : ""}`} onClick={(e) => handleClick(2)}>
            Dangerous
          </li>
        </ul>
      </div>
    );
  }
  