import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog posts"
}
import getAllPosts from "../api/getAllPosts";
{/* @ts-expect-error - expected */ }
export default function Blog({ data }: { data }) {

    // Returning the JSX for rendering
    return (
        <div className='blog'>
            {/* <div className="blog-heading">
                    <h1>Blog</h1>
        </div> */}
            <div className="loader loading-indicator"></div>
            {/* @ts-expect-error - expected */}
            {data && data.map((item) => (
                <div className="flex flex-col w-full md:w-xl items-center px-4 py-3 m-2 col-span-12 mx-auto md:col-span-6 lg:col-span-4" key={item.id}>
                    <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }} className="text-2xl py-2"></h2>
                    {item._embedded['wp:featuredmedia'] ? (<img src={item?._embedded['wp:featuredmedia'][0]?.source_url} alt={item?._embedded['wp:featuredmedia'][0]?.alt_text} className="py-3" />) : (null) }
                    <span dangerouslySetInnerHTML={{ __html: item.content.rendered }}></span>
                <br />
                <hr />
                </div>
            ))}
        </div>
    )
}
export async function getServerSideProps() {
    const postData = getAllPosts()

    const data = await postData

    return (
        {
            props: {
                data
            }
        }
    )
}
