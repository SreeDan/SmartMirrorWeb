import { useEffect, useState } from "react";
import axios from 'axios';
import { FaRegNewspaper } from "react-icons/fa";

function News() {
    const [newsEvents, setNewsEvents] = useState<string[]>([
        "Iowa again sets ratings record in win over UConn - ESPN",
        "Latin American governments rally around Mexico after embassy...",
        "Sunday shows preview: Pressure increases on Biden, Israel af...",
        "Weight-loss drug Wegovy offers benefits for people with diab...",
        "USWNT 2-1 Japan: U.S. overcomes early goal, Korbin Albert co..."
    ]);

    useEffect(() => {
        getNews()
    }, [])

    const getListElementsFromEvents = () => {
        return newsEvents.map((event) => <li style={{marginTop: '0.75rem', fontSize: '1.25rem'}}>{event}</li>)
    }

    const getNews = () => {
        const newsKey: string = process.env.NEWS_KEY!;
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsKey}`)
            .then(response => {
                var data: any = response.data
                
                let articles: any = data['articles']

                let newsArray: string[] = [];
                
                let count: number = 0;

                for (var article of articles) {
                    if (count == 5) {
                        break;
                    }

                    if (article['title'] === '[removed]') {
                        continue;
                    }

                    if (article['title'].length > 60) {
                        newsArray.push(article['title'].substring(0, 60) + '...');
                    } else {
                        newsArray.push(article['title']);
                    }

                    count++;
                }

                setNewsEvents(newsArray);
                console.log(newsArray)
            })
            .catch(error => {
                console.error(error);
            });

    }

    return (
        <div style={{marginLeft: '2rem'}}>
            <div style={{fontWeight: 'bold', fontSize: '4rem', display: 'inline-flex'}}>
                <div style={{marginRight: '0.5rem', marginTop: '0.5rem'}}><FaRegNewspaper /></div>
                Headlines
            </div>
            <ul style={{listStyleType: 'none', marginLeft: '-2rem', marginTop: '-1rem'}}>
                {getListElementsFromEvents()}
            </ul>

        </div>
    )

}

export default News;