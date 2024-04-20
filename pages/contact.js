import React from 'react'
import Section from '../components/layouts/Section'
import Paragraph from '../components/text/Paragraph'
import http from '../utilities/http'
import MetaSeo from '../components/MetaSeo'
import Image from 'next/image'

export default function contact({ contacs }) {
    return (
        <Section title="Contact" className="mt-0">
            <MetaSeo
                title="Contact - Hafiz Iqbal Sahrunizar"
                description={"Anda dapat menghubungi saya dengan banyak cara, saya akan sangat senang jika anda menghubungi saya. "}
            />
            <div className='pb-36 w-full py-12 flex justify-between' data-aos="fade-up">
                <div className='flex-1 w-full'>
                    <Paragraph>
                        Anda dapat menghubungi saya dengan banyak cara, saya akan sangat senang jika anda menghubungi saya
                    </Paragraph>
                    <ul className='mt-10 list-disc list-inside'>
                        {contacs.map((item, key) => <li className='mb-5' key={key}>
                            <span>{item.title}
                                <a rel="noreferrer" href={item.link} target="_blank" className='font-semibold underline hover:text-blue-500'>
                                    : {item.value}
                                </a>
                            </span>
                        </li>)}
                    </ul>
                </div>
                <div className='hidden xl:block md:block pl-36 relative'>
                    <Image
                        src='/img/contact.png'
                        alt='contact-backgorund'
                        layout='fill'
                        height={200}
                        width={200}
                        objectFit="contain"
                        className={`dark:invert invert-0`}
                    />
                </div>
            </div>
        </Section>
    )
}

export async function getStaticProps() {
    const contacs = [
        {
            title: 'Email',
            value: 'havisiqbalsyah@gmail.com',
            link: 'mailto:havisiqbalsyah@gmail.com'
        },
        {
            title: 'Github',
            value: 'Vizucode',
            link: 'https://github.com/vizucode'
        },
        {
            title: 'LinkedIn',
            value: 'Haviz Iqbal',
            link: 'https://www.linkedin.com/in/havis-iqbal/'
        },
        {
            title: 'Discord',
            value: 'vizucode',
            link: 'https://www.discordapp.com/users/920973773254049812'
        },
        {
            title: 'Telegram',
            value: '@mynamevizu',
            link: 'https://t.me/mynamevizu'
        }
    ]

    return {
        props: {
            contacs
        }
    }
}
