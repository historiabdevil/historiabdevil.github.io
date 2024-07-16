import {getCollection} from 'astro:content'

export interface CategoryInfo {
    name: string
    count: number
}

export const getCategories = async () => {
    const posts = await getCollection('blog')
    console.log(posts);
    const categories = posts.map((post) => post.data.category)
    const allCount = posts.filter((post) => post.data.draft).length
    const data: CategoryInfo[] = categories.map((category: string) => {
        const CategoryCount = posts.filter((post) => post.data.category === category && post.data.draft).length
        return {name: category, count: CategoryCount}
    })
    return [{name: 'All', count: allCount}, ...data]
}
export const getAllPosts = async () => {
    return (await getCollection('blog'))
        .filter((post) => !post.data.draft)
        .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}
export const getPosts = async (max?: number) => {
    return (await getCollection('blog'))
        .filter((post) => !post.data.draft)
        .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
        .slice(0, max)
}

export const getTags = async () => {
    const posts = await getCollection('blog')
    const tags: Set<String> = new Set()
    posts.forEach((post) => {
        post.data.tags.forEach((tag) => {
            tags.add(tag.toLowerCase())
        })
    })

    return Array.from(tags)
}

export const getPostByTag = async (tag: string) => {
    const posts = await getPosts()
    const lowercaseTag = tag.toLowerCase()
    return posts.filter((post) => {
        return post.data.tags.some((postTag) => postTag.toLowerCase() === lowercaseTag)
    })
}

export const filterPostsByCategory = async (category: string) => {
    const posts = await getPosts()
    return posts.filter((post) => post.data.category.toLowerCase() === category)
}