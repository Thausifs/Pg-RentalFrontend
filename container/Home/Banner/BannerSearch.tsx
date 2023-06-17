
import AutoCompleteBox from './autocompletebox';
import SelectListBox from './selectlistbox';
import { BiSearch } from 'react-icons/bi';
import { useAuthContext } from '../../../contexts/authContext';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

export default function BannerSearch() {

  const authContextData = useAuthContext();
   const router = useRouter();
    const [selectedCity, setselectedCity] = useState(undefined);

  const cityValue = authContextData?.selectedcity?.name
  const roomTypeValue = authContextData?.selectedroomtype?.slug;
  
 console.log(roomTypeValue);
 
  
  const onSearchHandler = (e) => {
    e.preventDefault();
    if (roomTypeValue === 'select_room_type') {
      toast.error('Select a Room Type Value');
      return;
    }
    if (cityValue === 'select_city') {
      toast.error('Select a city type please');
      return;
    }
    router.push(`/listing?roomType=${roomTypeValue}&city=${cityValue}`);
  };
  return (
    <div className='banner-search sm:absolute sm:mx-0 mx-[15px] lg:bottom-[7.4em] sm:-bottom-20 sm:top-[unset] top-[120%] md:w-2/3 xl:left-0 left-8 xl:right-[unset] right-8 rounded-[10px] border sm:min-h-[70px]  flex sm:gap-0 !gap-5 sm:flex-nowrap flex-wrap items-center sm:divide-x bg-white sm:p-[0_20px_0] !p-2  !shadow-xl'>
      <SelectListBox />
      <AutoCompleteBox />
      <div className='sm:w-[50px] w-full h-[50px] rounded-[10px] flex items-center justify-center bg-green cursor-pointer'>
        <BiSearch size={22} className='text-white' onClick={onSearchHandler} />
      </div>
    </div>
  );
}
