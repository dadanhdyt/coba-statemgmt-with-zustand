"use client"
import Link from "next/link";
import useProfile from "../../store/useProfile";

export default function Navbar() {
    const { loading } = useProfile();
    return (
        <nav className='bg-red-500'>
            <div className="container mx-auto">
                <div className="flex h-16 text-white items-center justify-between">
                    <h1 className='text-2xl'>Logo App</h1>
                    <span>{loading && 'Loading...'}</span>
                    <div className="flex gap-3 text-white font-bold">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/profile'}>profile</Link>
                    </div>
                </div>

            </div>
        </nav>
    )
}
