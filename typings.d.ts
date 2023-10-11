import {PortableTextBlock} from 'sanity';

type Base = {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};


interface BlogPost extends Base {
    author: Author;
    body: PortableTextBlock[];
    categories: Category;
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
};

interface Author extends Base{
    bio: PortableTextBlock[];
    image: Image;
    name: string;
    slug: Slug;
};

interface Image{
    _type: string;
    asset: Reference;
};

interface Reference{
    _ref: string;
    _type: 'reference';
};

interface Slug{
    _type:'slug';
    current: string;
};

interface Span{
    _key: string;
    _type: 'span';
    marks: string[];
    text: string;
};

interface Category extends Base{
    description: string;
    title: string;
};

interface MainImage {
    _type: 'string';
    asset: Reference;
};

interface Title{
    _type: 'string';
    current: string;
}
