import BlogList from '@/components/BlogList';
import Blog_banner from '../../../components/Blog_banner';
import { getBlogPosts } from '@/sanity/schemas/sanity-utils';
import { BlogPost } from '@/types/BlogPost';

export default async function blog(){

    const posts = await getBlogPosts();

    posts? posts.map((post: BlogPost) => (console.log(post))) : console.log('fetch error');

    return(
        <div>
            <Blog_banner/>
            <BlogList posts={posts}/>
        </div>
    );
}