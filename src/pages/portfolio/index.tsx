import { Post } from '@/lib/types';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from './loading';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio posts"
}
import getWebPosts from "../api/getWebPosts";
{/* @ts-expect-error - expected */}
export default function Portfolio({ data }: { data }) {

    // Returning the JSX for rendering
    return (
        <div className="grid grid-cols-12 mx-auto px-10 pb-6">
           <h1 className="my-4 text-center text-2xl col-span-12">Projects</h1>
           <p>I'm a Frontend Developer graduated from Noroff University 2024</p>
           <Suspense fallback={<Loading />}> 
            {data?.map((item:Post) => (
                <div className="flex flex-col bg-background rounded max-w-xs px-4 py-3 m-2 col-span-12 mx-auto md:col-span-6 lg:col-span-4" key={item.id}>
                <h2 dangerouslySetInnerHTML={{__html: item.title.rendered}} className="text-xl mb-2"></h2>
                {item._embedded['wp:featuredmedia'] && <img src={item._embedded['wp:featuredmedia'][0].source_url} alt={item._embedded['wp:featuredmedia'][0].alt_text} className="mb-3" /> }
                <span dangerouslySetInnerHTML={{__html: item.content.rendered}}></span>
                <hr className="mt-2"/>
                <Link href={item.meta._links_to} className="hover:bg-background hover:text-black hover:underline mt-2">Visit site</Link>
                </div>
            ))}
            </Suspense>
        </div>
    )
}
export async function getServerSideProps() {
    const postData = getWebPosts()

    const data = await postData

    return (
        {
            props: {
                data
            }
        }
    )
}