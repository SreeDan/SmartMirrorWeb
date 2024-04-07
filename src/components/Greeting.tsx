import { useEffect, useState } from "react";


function Greeting() {

    const [greeting, setGreeting] = useState<string>()

    useEffect(() => {
        setGreeting(setGreetingMessage())
    }, [])

    function setGreetingMessage(): string {
        const t: Date = new Date();
        const h: number = parseInt(t.getHours().toString());
    
        if (h < 5) {
            return `Good Night`;
        }
        if (h < 12) {
            return `Good Morning`;
        }
        if (h < 16) {
            return `Good Afternoon`;
        }
        if (h < 19) {
            return `Good Evening`;
        }
        return `Good Night`;
    }
    

    return (
        <div style={{marginTop: '2.5rem', marginLeft: '2rem'}}>
            <div style={{fontSize: '4rem', fontWeight: 'bold'}}>
                {greeting}
            </div>
            <div style={{fontSize: '3rem'}}>
                {process.env.NAME}
            </div>
            <div style={{fontSize: '2rem', marginTop: '1rem', overflowWrap: 'break-word', maxWidth: '20rem'}}>Go and do something productive today!</div>
        </div>
    )
}

export default Greeting;