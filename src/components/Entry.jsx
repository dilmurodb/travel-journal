import maplogo from '../assets/maplogo.png'


export default function Entry({ countryDataArray }) {
    return <>
        {
            countryDataArray.map(country => (

            
            <div className='entry-wrapper'>
                <section className='entry-container'>
                    <section>
                        <img className='entry-img' src={country.imgurl} alt={country.destination}/>
                    </section>
                    <article className='entry-article'>
                        <section className='entry-article-top'>
                        <img className='entry-map-logo' src={maplogo} alt='map logo'/>
                        <h3>{country.country}</h3>
                            <a>View on Google Maps</a> 
                        </section>
                        <h2>{country.destination}</h2>
                        <h4>{country.dates}</h4>
                        <p>{country.description}</p>
                    </article>
                </section>
            </div>
        ))
        }
    </>
    
}