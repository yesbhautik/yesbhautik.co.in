import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import { Box } from '../components/Box'

export async function getStaticProps() {
  const meta = {
    title: 'Reminder // Yesbhautik',
    description:
      'Time is the most important asset. Time does not equal money. Time equals life. And you only have one chance to make it right.',
    tagline: 'Tick-tock. Tick-tock.',
    image: '/static/images/reminder-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Reminder(props) {
  const { title, description, image } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://yesbhautik.co.in/reminder" property="og:url" />
        <meta
          content={`https://yesbhautik.co.in${image}`}
          property="og:image"
        />
      </Head>

      <Box css={{ textAlign: 'justify' }}>
        <p>
          <strong>Time is a precious resource</strong>, representing the essence
          of life itself. It's not simply about money, but about the{' '}
          <strong>moments that shape our existence</strong>. We all grapple with{' '}
          <strong>internal struggles</strong>, and it's our{' '}
          <strong>duty</strong> to uplift and inspire one another. Regardless of
          your path, you have the{' '}
          <strong>power to motivate others to do good</strong>. No one is
          inherently <strong>superior</strong> or <strong>inferior</strong>.
          Humility is key. While <strong>comfort zones</strong> provide
          security, growth thrives beyond them.{' '}
          <strong>Keep learning & creating</strong>, even when faced with
          criticism from those who dare not innovate.{' '}
          <strong>Don't let negativity define or deter you</strong>, simply move
          forward and block out the noise.{' '}
          <strong>Your happiness is your responsibility</strong>, so find joy in
          every moment, <strong>not just on Fridays</strong>.{' '}
          <strong>Show gratitude to your parents</strong>, who sacrificed for
          your sake. True admiration begins at home. Embrace the unknown, for
          the real fear lies in knowing everything.{' '}
          <strong>Life is fleeting, and each day is a gift</strong>. Pursue your
          <strong>dreams</strong> today, for{' '}
          <strong>time never stops, and opportunities are fleeting</strong>.
          Tick-tock, keep moving forward, and don't wait.
        </p>
        <p>
          <em>- by Bhautik Bavadiya [Yesbhautik]</em>
        </p>
      </Box>
    </>
  )
}

Reminder.Layout = Base

export default Reminder
