import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <table>
            <tr>
                <td>
                     
                        <p>AGB</p>
                        <p>Impressum</p>
                        <p>Datenschutm</p>
                     </td>
                <td>
                    <ul>
                        <li>Rezept einlösen </li>
                        <li>Live Bestand</li>
                        <li>Videosprechstunde</li>
                        <li>FAQs</li>
                        <li>Kontakt</li>
                    </ul>
                </td>
                <td>
                    <p>Standort</p>
                    <p className='bold'>BergstraBe 49-57 69469 Weinheim 3 Glocken Quartier</p>
                </td>
                <td>
                    <p>Telefon</p>
                    <p className='bold'>0223 545 5250</p>
                </td>
                <td>
                    <p>Öffnungszeiten</p>
                    <p>Mo-Fr</p>
                    <p className='bold'>09:00 - 18:00 Uhr</p>
                    <p>Sa</p>
                    <p className='bold'>09:00 - 14:00 Uhr</p>
                </td>
            </tr>
        </table>
    </footer>
     
)
}

export default Footer
