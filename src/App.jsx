import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'

function App() {

  const countryDataArray = [
    {
      'id': 1,
      'country': 'JAPAN',
      'imgurl': 'https://scrimba.com/links/travel-journal-japan-image-url',
      'mapurl': 'https://www.google.com/maps/place/Mount+Fuji/@35.2999405,138.5728194,90394m/data=!3m1!1e3!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D',
      'destination': 'Mount Fuji',
      'dates': '12 Jan, 2023 - 24 Jan, 2023',
      'description': 'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
    },
    {
      'id': 2,
      'country': 'AUSTRALIA',
      'imgurl': 'https://scrimba.com/links/travel-journal-australia-image-url',
      'mapurl': 'https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567799,151.2127218,724m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D',
      'destination': 'Sydney Opera House',
      'dates': '27 May, 2023 - 8 Jun, 2023',
      'description': 'The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th centurys most famous and distinctive buildings.'
    },
    {
      'id': 3,
      'country': 'NORWAY',
      'imgurl': 'https://scrimba.com/links/travel-journal-norway-image-url',
      'mapurl': 'https://www.google.com/maps/place/Geirangerfjord/@62.1049113,6.9098334,26112m/data=!3m2!1e3!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D',
      'destination': 'Geirangerfjord',
      'dates': '01 Oct, 2024 - 18 Nov, 2024',
      'description': 'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.'
    }
  ]

  return (
    <div className='app-wrapper'>
      <Header />
      <Entry countryDataArray={countryDataArray} />
    </div>
  )
}

export default App
