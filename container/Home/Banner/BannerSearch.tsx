import AutoCompleteBox from "./autocompletebox";
import SelectListBox from "./selectlistbox";
import { BiSearch } from "react-icons/bi";

export default function BannerSearch() {
  return (
    <div className="banner-search sm:absolute sm:mx-0 mx-[15px] lg:bottom-[7.4em] sm:-bottom-20 sm:top-[unset] top-[120%] md:w-2/3 xl:left-0 left-8 xl:right-[unset] right-8 rounded-[10px] border sm:min-h-[70px]  flex sm:gap-0 !gap-5 sm:flex-nowrap flex-wrap items-center sm:divide-x bg-white sm:p-[0_20px_0] !p-2  !shadow-xl">
      <SelectListBox />
      <AutoCompleteBox />
      <div className="sm:w-[50px] w-full h-[50px] rounded-[10px] flex items-center justify-center bg-green cursor-pointer">
        <BiSearch size={22} className="text-white" />
      </div>
    </div>
  );
}
