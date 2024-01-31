import Image from "next/image";
import { Card } from "./ui/card";

const Header = () => {
    return (
        <Card>
            <Image src="/logo.png" alt="logo barbearia" height={22} width={120}></Image>
        </Card>
    );
}

export default Header;