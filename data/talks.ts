import type { Talk } from '~/types'

export const talks: Talk[] = [
  {
    title: 'Startup ecosystem in India',
    description: 'Everything will be listed here soon, below is the list is just for layout reference',
    presentations: [
      {
        date: '2025-04-12',
        location: 'Delhi',
        conference: 'Startup Mahakumbh',
        conferenceUrl: '#',
        recording: '#',
        pdf: '#',
        spa: '#',
        transcript: '#',
      },
      {
        date: '2021-05-22',
        location: 'Online',
        conference: 'Startup India',
        conferenceUrl: '#',
        lang: 'zh',
        recording: '#',
        pdf: '#',
        spa: '#',
      },
    ],
  },
]

talks.forEach((talk) => {
  talk.presentations.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

talks.sort((a, b) => {
  return new Date(b.presentations[0].date).getTime() - new Date(a.presentations[0].date).getTime()
})
