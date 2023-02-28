import { useEffect, useState } from "react";


export default function Hilsen() {

    const hilsner: Array<string> = ['Hej!', 'Goddag.', 'Hey!', 'Hallo.', 'Godaften!', 'Vær hilset!', 'Dav.'];
    const [curHilsen, setCurHilsen] = useState(0);

    const nextHilsen = () => {
        console.log(curHilsen + ', ' + hilsner.length);
        if(curHilsen < hilsner.length){
            setCurHilsen(curHilsen => curHilsen + 1);
        }else if(curHilsen === hilsner.length || curHilsen > hilsner.length){
            setCurHilsen(0);
        }

    }

    useEffect(() => {

        const interval = setInterval(() => {
            if(curHilsen >= hilsner.length - 1){
                setCurHilsen(0);
                return;
            }
            setCurHilsen(curHilsen => curHilsen + 1);
        }, 1000);

        return () => {
            console.log('cleared');
            clearInterval(interval);
        };
    }, [curHilsen]);

    return (
        <div>
            <h1 className='text-3xl mb-4'>{hilsner[curHilsen]}</h1>
        </div>
    );
}
