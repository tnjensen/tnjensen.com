
export default async function getAllPosts() {
    const res = await fetch(`https://noroff.tnjensen.com/wp-json/portfolio/wp/v2/posts?categories=6,9&_embed&filter[orderby]=date&order=asc`, {
        next: {
            revalidate: 10,
        }
    });
    if(!res.ok) throw new Error("Failed to fetch user posts")
    console.log(res.json)
    return res.json()
}
