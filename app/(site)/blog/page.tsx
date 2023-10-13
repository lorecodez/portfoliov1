import BlogList from '@/components/BlogList';
import Blog_banner from '../../../components/Blog_banner';
import { getBlogPosts } from '@/sanity/schemas/sanity-utils';
import { BlogPost } from '@/types/BlogPost';

export default async function blog(){

    

    return(
        <div>
            <Blog_banner/>
            <BlogList />
        </div>
    );
}