import { Resend } from 'resend'
// const resend = new Resend(process.env.RESEND_API_KEY)
const resend = new Resend('re_CmNyv8Ec_FKPp97Dp1iLRMmY5NbYgdt9s')
import EmailTemplate from '../../components/EmailTemplate'

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    await resend.sendEmail({
      from: 'yesbhautik.co.in <website@yesbhautik.co.in>',
      to: 'bhbavadiya2608@gmail.com',
      replyTo: data.email,
      subject: `${data.name} - via yesbhautik.co.in`,
      react: <EmailTemplate {...data} />,
    })

    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
