import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return (
        <Card>
            <CardContent>
                <Image src="/logo.png" alt="logo barbearia" height={22} width={120}></Image>
                <Button variant={"outline"} size={"icon"}>
                    <MenuIcon />
                </Button>
            </CardContent>
        </Card>
    );
}

export default Header;