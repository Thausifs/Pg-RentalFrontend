import { Fragment , useEffect , useRef ,useState} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FiX } from 'react-icons/fi';
import OtpInput from './otpinput';
import ButtonTo from '../../Button';
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";

import authApi from "../../../utils/Api/auth.api";
import { useAuthContext } from '../../../contexts/authContext';
// import { useAuthContext } from "../../contexts/authContext";

function LoginPopup({ open, hidePopup }) {
     const [phoneNo, setPhoneNo] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const [otp, setOtp] = useState("");
  const [wholeDisable, setWholeDisble] = useState(false);
   const [disable, setDisable] = useState(true);
  const resendTimerRef = useRef(null);
   const authContTextData = useAuthContext();
  const { mutate, isSuccess } = useMutation({
    mutationKey: "login",
    mutationFn: (data) => authApi.loginHandlerApi(data),
    onSuccess: (data) => {
      setResendTimer(60); // Set the timer value to 60 seconds
      toast.success(data.message);
      setDisable(() => false);
      setWholeDisble(false);
    },
    onError: (error) => {
      console.log(error);
      // setWholeDisble(false);
      const message =
        error?.response?.data?.message || "Mobile Number does not exist";
      // alert(message)
      toast.error(message);
    },
  });
   useEffect(() => {
    if (isSuccess) {
      setResendTimer(60); // Set the timer value to 60 seconds
      // Start the timer countdown
      resendTimerRef.current = setInterval(() => {
        setResendTimer((prevTimer) => {
          if (prevTimer === 0) {
            clearInterval(resendTimerRef.current);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    // Clear the timer interval when the component unmounts or OTP is verified
    return () => {
      clearInterval(resendTimerRef.current);
    };
   }, [isSuccess]);
   useEffect(() => {
    setDisable(true);
    setPhoneNo("");
   }, []);
  
   const { mutate: verifyOtp, isSuccess: isSuccess2 } = useMutation({
    mutationKey: "verifyOtpLogin",
    mutationFn: (data) => authApi.verifyOtpForLogin(data),
    onMutate: () => {
      setWholeDisble(true);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      authContTextData.setToken(data.token);
      authContTextData.setUser(data.user);
      localStorage.setItem("token", data.token);
      setWholeDisble(false);
      setDisable(true);

      setOtp("");
      hidePopup();
    },

    onError: (error) => {
      setWholeDisble(false);
      const message = error?.response?.data?.message || "Otp is oncorrect";
      toast.error(message);
    },
  });

  const onSubmitForSendOtp = (e) => {
    
    e.preventDefault();
    if (otp === "") {
      mutate({ number: phoneNo });
      setWholeDisble(true);
    } else verifyOtp({ otp: otp.toLowerCase(), number: phoneNo });
  };

   const onChangeHandlerForPhoneNo = (e) => {
    setPhoneNo(e.target.value);
  };

  
  // const onChangeHandlerOtp = (e) => {
  //   setOtp(e.target.value);
  // };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog onClose={hidePopup} className='relative z-[9999]'>
        <div className='bg-black/30 fixed inset-0' aria-hidden='true' />
        <div className='fixed inset-0 flex items-center justify-center p-4'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Dialog.Panel className='mx-auto max-w-[36rem] w-full relative rounded-2xl bg-white'>
              <div
                className='h-[36px] w-[36px] rounded-full flex items-center cursor-pointer absolute -top-[17px] -right-[11px] justify-center bg-white shadow'
                onClick={hidePopup}
              >
                <FiX size={22} className='stroke-black' />
              </div>
              <div className='p-[32px]'>
                <form onSubmit={onSubmitForSendOtp}>
                  <div className='relative'>
                    <input
                      type='text'
                      placeholder='Enter Phone number'
                      onChange={onChangeHandlerForPhoneNo}
                      // readOnly={!disable || wholeDisable}
                      className='h-[45px] rounded-[8px] border outline-0 border-[#D0D5DD] placeholder:text-[#D0D5DD] shadow-sm pllaceholder:font-normal px-3 flex items-center w-full mb-4'
                    />
                    <ButtonTo
                      text='Send Otp'
                      className='bg-green rounded-lg font-medium text-white text-[12px] px-3 py-1 border shadow-lg gap-3 text-center absolute right-1 top-1 bottom-1'
                    />
                  </div>
                  <div className='text-center'>
                    <div className='block mx-auto text-left'>
                      <label className='font-Lato inline-block mb-1 text-sm font-medium'>
                        Enter Otp
                      </label>
                      {/* <div className='hidden sm:block sm:[&_input]:!w-[72px] sm:[&_input]:!h-[72px] [&_input]:!w-[50px] [&_input]:!h-[50px]'> */}
                      <div>
                        <OtpInput fn={ setOtp} />
                      </div>
                      <div className=' w-full'>
                        <input
                          type='email'
                          placeholder='Enter Your PIN'
                          className='h-[45px] font-Lato placeholder:font-normal sm:hidden rounded-[8px] border outline-0 border-[#D0D5DD] placeholder:text-[#D0D5DD] shadow-sm px-3 flex items-center w-full mb-4'
                        />
                      </div>
                      <div className='flex items-center justify-between mx-auto my-4 text-left'>
                        <label className='font-Lato inline-block mb-1 text-sm font-medium'>
                          Recent Otp
                        </label>
                        <h3>123532</h3>
                      </div>
                    </div>
                  </div>
                  <ButtonTo
                    text='Login'
                    className='bg-green rounded-lg text-white px-6 py-3.5 border shadow-lg flex items-center gap-3 w-full text-center justify-center mt-6'
                  />
                </form>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default LoginPopup;
