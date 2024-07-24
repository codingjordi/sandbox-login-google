'use client'

import Link from "next/link"
import { signIn, signOut, useSession } from 'next-auth/react';

function Navbar() {
    const { data: session } = useSession();
    console.log(session);

    return (
        <nav className="bg-slate-500 flex justify-between gap-20 px-20 py-5">
            <div className="flex items-center">
                <Link href='/'>
                    <h1>
                        Trading 101
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-8">
                <Link href='/dashboard'>
                    Dashboard
                </Link>
            </div>
            <div>
                <button onClick={() => signIn()}>
                    Sign in with Google
                </button>
                <button onClick={async () => {
                    await signOut({
                        callbackUrl: '/'
                    })
                    // router.push('/')
                }}>
                    Sign Out
                </button>
            </div>
        </nav>
    )
}

export default Navbar;

// 'use client'

// import Link from "next/link"
// import { signIn, signOut, useSession } from 'next-auth/react';


// function Navbar() {
//   const {data: session} = useSession();
//   console.log(session);     

//   return (
//     <nav className="bg-slate-500 flex justify-between gap-20 px-20 py-5">
//         <div className="flex items-center">
//             <Link href='/'>
//                 <h1>
//                     Trading 101
//                 </h1>
//             </Link>
//         </div>

//         <div className="flex items-center gap-8">
//             <Link href='/dashboard'>
//                 Dashboard
//             </Link>
//             <p>{session.user.name} {session.user.email}</p>
//             <img src={session.user.image} width={50} height={50} style={{borderRadius: '50%'}} alt="User profile picture"></img>
//             <button onClick={async () => {
//                 await signOut({
//                     callbackUrl: '/'
//                 })
//                 // router.push('/')
//             }}>
//                     Sign Out
//             </button>
//         </div>
//         <button onClick={() => signIn()}>Sign in with Google</button>
//     </nav>
//   )
// }

// export default Navbar 