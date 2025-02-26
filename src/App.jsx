import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'

function App() {

  const countryDataArray = [
    {
      'id': 1,
      'country': 'JAPAN',
      'imgurl': 'https://scrimba.com/links/travel-journal-japan-image-url',
      'destination': 'Mount Fuji',
      'dates': '12 Jan, 2023 - 24 Jan, 2023',
      'description': 'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
    },
    {
      'id': 2,
      'country': 'AUSTRALIA',
      'imgurl': 'https://scrimba.com/links/travel-journal-australia-image-url',
      'destination': 'Sydney Opera House',
      'dates': '27 May, 2023 - 8 Jun, 2023',
      'description': 'The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th centurys most famous and distinctive buildings.'
    },
    {
      'id': 3,
      'country': 'NORWAY',
      'imgurl': 'https://scrimba.com/links/travel-journal-norway-image-url',
      'destination': 'Geirangerfjord',
      'dates': '01 Oct, 2024 - 18 Nov, 2024',
      'description': 'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.'
    }
  ]

  return (
    <>
      <Header />
      <Entry countryDataArray={countryDataArray} />
    </>
  )
}

export default App
