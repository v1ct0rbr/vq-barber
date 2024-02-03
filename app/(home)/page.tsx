import { format } from 'date-fns'
import Image from "next/image";
import Header from "../_components/header";
import { currentLocale } from '../_utils/constants';
import Search from './_components/Search'
import BookingItem from '../_components/booking-item';
import TitleCompoment from '../_components/titleComponent';
import { db } from '../_lib/prima';
import BarberShopItem from './_components/barbershop-item';
import Footer from '../_components/footer';


export default async function Home() {
const barbershops = await db.barbershop.findMany({})

  return (
    <div>
      <Header />
      <div className='px-5 pt-5'>
        <h2 className='text-xl font-bold'>Olá, Victor!</h2>
        <p className='capitalize text-sm'>{format(new Date(), "EEEE, d 'de' MMMM", { locale: currentLocale })}</p>
      </div>

      <div className='px-5 mt-6'><Search /></div>
      <div className="px-5 mt-6">
        <TitleCompoment title="Agendamentos" px={0}></TitleCompoment>
        <BookingItem></BookingItem>
      </div>
      <div className='mt-6'>
        <TitleCompoment title="Recomendados" px={5}></TitleCompoment>
        <div className="flex px-5 gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <BarberShopItem key={barbershop.id} barbershop={barbershop}></BarberShopItem>
            ))
            }
        </div>
      </div>
      <div className='mt-6'>
        <TitleCompoment title="Populares" px={5}></TitleCompoment>
        <div className="flex px-5 gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <BarberShopItem key={barbershop.id} barbershop={barbershop}></BarberShopItem>
            ))
            }
        </div>
      </div>
      
     
    </div>
  );
}
