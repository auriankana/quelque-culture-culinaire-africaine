// 'use client'

// import Header from '@/components/Header';
// import Contact from "@/components/Contact"

import Home from '@/components/Acceuil';
import { Inter } from 'next/font/google';
import './globals.css';
// import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] });
// export const metadata = {
//     title: 'Biblio-app',
//     description: 'Demo Cours Programmation web avancé',
// };
export default function RootLayout({ children }) {

    // const [page, setPage] = useState('acceuil')

    return (
        <html lang='en'>
        <body className={inter.className}>
          
          {/* The Header of our work */}
          <Home/>
            {children}
        </body>
        </html>
    );
  }
