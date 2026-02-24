import React, { useState } from 'react';

import ReaderHeader from '../components/readerComps/ReaderHeader.jsx';
import ReaderAside from '../components/readerComps/ReaderAside.jsx';
import { Link } from 'react-router-dom';
import EpubReader from '../utils/EpubReader.jsx'

export default function ReaderView() {
    const [location, setLocation] = useState(null); // добавили состояние

    return (
        <div className='relative'>
            <div className="h-screen flex flex-col">
                <ReaderHeader />    

                <div className="flex flex-1 min-h-0">
                    <ReaderAside />

                    <main className="bg-beige-1 flex flex-col text-accent-2 flex-1 p-10 overflow-y-auto z-0">
                        <EpubReader url="/books/idiot.epub" />
                    </main>
                </div>
            </div>
        </div>
    );
}