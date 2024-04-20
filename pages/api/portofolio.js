// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const data = [
  {
    id: 1,
    title: "Whatsblast",
    category: "Mobile Application",
    description: "Whatsblast is a service that allows you to send bulks message for keeps up new leads for buisness. It is a web application that uses Golang, Fiber, and MySQL.",
    img: "https://firebasestorage.googleapis.com/v0/b/personal-website-1d263.appspot.com/o/project-pict%2FScreenshot%202024-04-20%20at%2023.38.11.png?alt=media&token=f9f51846-84ba-435f-9c06-9598da96a6bf"
  },
  {
    id: 2,
    title: "Histore.id",
    category: "Mobile Application",
    description: "Histore is a digital product store that allows you to sell digital products online, in example (Top Up Games, Buy Internet and Payment Prepaid Needs) It is a web application that uses Golang, Fiber, and MySQL.",
    img: "https://firebasestorage.googleapis.com/v0/b/personal-website-1d263.appspot.com/o/project-pict%2FGroup%204.png?alt=media&token=ff44e0f0-2be7-4ebc-8c68-e312c456c90b"
  },
]

export default function handler(req, res) {
  res.status(200).json(data)
}
