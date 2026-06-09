import {getCollection, type CollectionEntry} from 'astro:content'

export interface CategoryInfo {
    name: string
    count: number
}

export const getCategories = async () => {
    const posts = await getCollection('blog')
    console.log(posts);
    const categories = posts.map((post: CollectionEntry<'blog'>) => post.data.category)
    const allCount = posts.filter((post: CollectionEntry<'blog'>) => post.data.draft).length
    const data: CategoryInfo[] = categories.map((category: string) => {
        const CategoryCount = posts.filter((post: CollectionEntry<'blog'>) => post.data.category === category && post.data.draft).length
        return {name: category, count: CategoryCount}
    })
    return [{name: 'All', count: allCount}, ...data]
}
export const getAllPosts = async () => {
    return (await getCollection('blog'))
        .filter((post: CollectionEntry<'blog'>) => !post.data.draft)
        .sort((a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}
export const getPosts = async (max?: number) => {
    return (await getCollection('blog'))
        .filter((post: CollectionEntry<'blog'>) => !post.data.draft)
        .sort((a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
        .slice(0, max)
}

export interface TagInfo {
    name: string
    count: number
}

export const getTags = async () => {
    const posts = await getCollection('blog')
    const tags: Set<string> = new Set()
    posts.forEach((post: CollectionEntry<'blog'>) => {
        post.data.tags.forEach((tag: string) => {
            tags.add(tag)
        })
    })

    return Array.from(tags)
}

export const getTagsWithCount = async (): Promise<TagInfo[]> => {
    const posts = await getCollection('blog')
    const activePosts = posts.filter((post: CollectionEntry<'blog'>) => !post.data.draft)
    
    const countMap: Record<string, number> = {}
    let allCount = activePosts.length

    activePosts.forEach((post: CollectionEntry<'blog'>) => {
        post.data.tags.forEach((tag: string) => {
            countMap[tag] = (countMap[tag] || 0) + 1
        })
    })

    const tagsList = Object.entries(countMap).map(([name, count]) => ({
        name,
        count
    })).sort((a, b) => b.count - a.count)

    return [{ name: 'All', count: allCount }, ...tagsList]
}

export const getPostByTag = async (tag: string) => {
    const posts = await getPosts()
    const lowercaseTag = tag.toLowerCase()
    return posts.filter((post: CollectionEntry<'blog'>) => {
        return post.data.tags.some((postTag: string) => postTag.toLowerCase() === lowercaseTag)
    })
}

export const filterPostsByCategory = async (category: string) => {
    const posts = await getPosts()
    return posts.filter((post: CollectionEntry<'blog'>) => post.data.category.toLowerCase() === category)
}