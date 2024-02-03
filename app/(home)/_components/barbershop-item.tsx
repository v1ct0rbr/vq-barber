import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopItemProps {
    barbershop: Barbershop
}

const BarberShopItem = ({barbershop} : BarbershopItemProps) => {
    return (
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="px-1 py-0">
                <div className="px-1 w-full h-[149px] relative">
                    <div className="absolute top-3 left-3 z-50">
                    <Badge variant="secondary"  className="flex items-center gap-1 opacity-80 ">
                        <StarIcon  size={12} className="fill-primary text-primary" />
                        <span>5,0</span>
                    </Badge>
                    </div>
                    <Image alt={`Barber ${barbershop.name} image`} style={{objectFit: "cover"}} fill src={barbershop.imageUrl} height={0} width={0} sizes="100vw" className="rounded-2xl"  />
                </div>
                
                
                <div className="px-2 pb-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                    <Button className="w-full mt-3" variant="secondary">Reservar</Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default BarberShopItem;