import { getUrl } from '../..'
import s from './ContactPage.module.css'

function ContactPage() {
  return (
    <main className={s.contactpage_wrapper}>
      <div className={s.contactpage_picture} style={{backgroundImage: `url(${getUrl('images/contact.webp')})`}}></div>
      <h1>Feel free to contact me:</h1>
      <h2>+7 925 038 8008</h2>
      <h2>kopotov@me.com</h2>
    </main>
  )
}

export default ContactPage