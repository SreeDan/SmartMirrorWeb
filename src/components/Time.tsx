import { useEffect, useState } from "react";


function Time() {
    const [time, setTime] = useState<string>()
    const [date, setDate] = useState<string>()

    useEffect(() => {
        const MINUTES_MS = 1000

        const interval = setInterval(() => {
            getTime()
            getDate()
          }, MINUTES_MS);
        
          return () => clearInterval(interval)
    }, [])

    const getTime = () => {
        const date = new Date();
        const formattedTime: string = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
        setTime(formattedTime);
    }

    const getDate = () => {
        const date = new Date();
        const formattedDate: string = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
        setDate(formattedDate)
    }

    return (
        <div style={{marginTop: '40px', marginRight: '40px'}}>
            <div style={{fontSize: 80}}>
                {time}
            </div>
            <div style={{textAlign: 'center', fontSize: 30}}>
                {date}
            </div>
        </div>
    )

}

export default Time;