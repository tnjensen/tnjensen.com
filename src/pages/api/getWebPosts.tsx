
export default async function getWebPosts() {
    const res = await fetch('https://noroff.tnjensen.com/portfolio/wp-json/wp/v2/posts?categories=3&_embed&filter[orderby]=date&order=asc', {
        next: {
            revalidate: 10,
        }
    });
    if(!res.ok) throw new Error("Failed to fetch user posts")
    console.log(res.json)
    return res.json()
}
