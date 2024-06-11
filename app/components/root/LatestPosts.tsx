import { getAllPosts } from '@/app/util/post';
import { Link2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default async function LatestPosts() {
  const posts = await getAllPosts();
  //公開日順にソート
  const postsSorted = posts.sort(
    (x, y) =>
      new Date(y.publishedAt).getTime() - new Date(x.publishedAt).getTime()
  );
  return (
    <div>
      <h1 className='prose dark:prose-invert prose-xl font-semibold'>Latest Blogs</h1>
      <div className='flex flex-col items-center justify-center'>
        {postsSorted.map((post, index) =>(
        <Link key={index} href={`/blog/${post.id}`} className='flex flex-row gap-3 items-center hover:bg-primary/10 rounded-full duration-150 p-0.5 truncate w-3/4 m-0.5'>
            <h1 className='ml-3'>{post.title}</h1>
            <p className='text-primary/30 text-sm'>{post.publishedAt}</p>
        </Link>
        ))}
      </div>
    </div>
  )
}
