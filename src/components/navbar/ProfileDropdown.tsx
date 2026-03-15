'use client';

import { Clock, LogOut, Settings } from 'lucide-react';
// import { useUserForm } from '@/context/UserFormContext';
// import { Logout, PunchClock, Settings } from '@mui/icons-material';
import Link from 'next/link'

const ProfileDropdown = () => {
//   const {dropUserInfo, } = useUserForm();

  return (
    <ul className="w-fit bg-white rounded-b-xl shadow-xl py-6 space-y-2">
        <li>
            <Link href="/products" title="Wallet History" className="w-full px-6 py-1 hover:bg-neutral-100 capitalize flex items-center gap-3 whitespace-nowrap text-primary font-semibold">
                <Clock/>
                <span>Products</span>
            </Link>
        </li>
        <li>
            <Link href="/settings" title="settings" className="w-full px-6 py-1 hover:bg-neutral-100 capitalize flex items-center gap-3 whitespace-nowrap text-primary font-semibold">
                <Settings/>
                <span>settings</span>
            </Link>
        </li>
        <li>
            <button title="logout" className="w-full px-6 py-1 hover:bg-neutral-100 capitalize flex items-center gap-3 whitespace-nowrap text-primary font-semibold">
            {/* <button onClick={dropUserInfo} title="logout" className="w-full px-6 py-1 hover:bg-neutral-100 capitalize flex items-center gap-3 whitespace-nowrap text-primary font-semibold"> */}
                <LogOut/>
                <span>logout</span>
            </button>
        </li>
    </ul>
  )
}

export default ProfileDropdown