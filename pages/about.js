import Image from 'next/image'
import React from 'react'
import Paragraph from '../components/text/Paragraph'
import Title from '../components/text/Title'
import MetaSeo from '../components/MetaSeo'

export default function about({ profile }) {
    return (
        <div className='flex justify-center  py-16'>
            <MetaSeo
                title="About - Hafiz Iqbal Sahrunizar"
                description={"Nama saya Hafiz Iqbal Sahrunizar, bekerja sebagai backend golang developer."}
            />
            <div className='flex xl:w-8/12 w-full justify-center items-center flex-col'>
                <Image src={`${profile.img?.path}`} data-aos="fade-up" alt='Nama Saya Hafiz Iqbal Sahrunizar' className='rounded-full object-cover' height={235} width={240} />
                <div className='mt-12 flex flex-col justify-start w-full' data-aos="fade-up">
                    <Title>About</Title>
                    <Paragraph className='mt-8'>
                        {profile.description}
                    </Paragraph>
                    <Paragraph className='mt-8'>
                        Sometimes, I like writing on Medium, sharing my knowledge.
                        <Link href="https://medium.com/@vizucode">
                            Medium
                        </Link>
                    </Paragraph>
                </div>
                <h1 className="text-center font-bold text-xl mt-20" data-aos="fade-up">Comming Soon...</h1>
            </div>
        </div>
    )
}


export async function getStaticProps() {
    return {
        props: {
            profile: {
                description: `
                I absolutely thrive in the world of software development, embracing everything from low-code to high-code solutions with boundless enthusiasm! With hands-on experience as a full-stack developer and backend engineer, I've honed my skills in crafting top-notch applications that truly shine. My passion doesn't stop there – I'm always delving into the latest research on programming languages, eager to uncover new possibilities and innovations. Plus, you might catch me sharing my insights and adventures on dev.to from time to time – it's always fun connecting with fellow tech enthusiasts!`,
                img: {
                    path: 'https://firebasestorage.googleapis.com/v0/b/personal-website-1d263.appspot.com/o/photo-profile%2F-czjruu.jpg?alt=media&token=59d363fd-6763-4aad-9fd6-82879705728b'
                }
            }
        }
    }
}
