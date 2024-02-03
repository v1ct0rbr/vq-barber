import { format } from 'date-fns'
import Image from "next/image";
import Header from "../_components/header";
import { currentLocale } from '../_utils/constants';
import Search from './_components/Search'


export default function Home() {
  return (
    <div>
      <Header />
      <div className='px-5 pt-5'>
        <h2 className='text-xl font-bold'>Olá, Victor!</h2>
        <p className='capitalize text-sm'>{format(new Date(), "EEEE, d 'de' MMMM", { locale: currentLocale })}</p>
      </div>

      <div className='px-5 mt-6'><Search /></div>

      
      
    </div>
  );
}
