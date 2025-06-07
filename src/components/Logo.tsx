import Link from "next/link";
import { Church } from "lucide-react";
import Image from "next/image";
import logo from "@/public/assets/logo.png";

export default function Logo() {
  return <Image src={logo} alt='Seara de Deus' className='w-40  md:w-48' />;
}
