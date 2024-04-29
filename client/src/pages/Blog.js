import React from 'react';
import { NavBar } from './NavBar';
import './HomeCss.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Sample data for blogs
const blogsData = [
    {
        id: 1,
        image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13901/conversions/b0dc8f35-3126-4eae-b575-38285553c9a4-thumb.jpg",
        title: "The Gift of Life: Why Blood Donation Matters",
        date: '09/12/2023',
        content: "In this blog, we delve into the profound impact of blood donation and why it's a crucial act of kindness that saves lives. Discover the inspiring stories behind blood donation and learn how you can make a difference today.",
    },
    {
        id: 2,
        image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13901/conversions/b0dc8f35-3126-4eae-b575-38285553c9a4-thumb.jpg",
        title: "The Gift of Life: Why Blood Donation Matters",
        date: '09/12/2023',
        content: "In this blog, we delve into the profound impact of blood donation and why it's a crucial act of kindness that saves lives. Discover the inspiring stories behind blood donation and learn how you can make a difference today.",
    },
    {
        id: 3,
        image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13901/conversions/b0dc8f35-3126-4eae-b575-38285553c9a4-thumb.jpg",
        title: "The Gift of Life: Why Blood Donation Matters",
        date: '09/12/2023',
        content: "In this blog, we delve into the profound impact of blood donation and why it's a crucial act of kindness that saves lives. Discover the inspiring stories behind blood donation and learn how you can make a difference today.",
    },
    {
        id: 4,
        image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13901/conversions/b0dc8f35-3126-4eae-b575-38285553c9a4-thumb.jpg",
        title: "The Gift of Life: Why Blood Donation Matters",
        date: '09/12/2023',
        content: "In this blog, we delve into the profound impact of blood donation and why it's a crucial act of kindness that saves lives. Discover the inspiring stories behind blood donation and learn how you can make a difference today.",
    },
    {
        id: 5,
        image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13901/conversions/b0dc8f35-3126-4eae-b575-38285553c9a4-thumb.jpg",
        title: "The Gift of Life: Why Blood Donation Matters",
        date: '09/12/2023',
        content: "In this blog, we delve into the profound impact of blood donation and why it's a crucial act of kindness that saves lives. Discover the inspiring stories behind blood donation and learn how you can make a difference today.",
    },
    // Add more sample blogs as needed
];

const Blog = () => {
    return (
        <div>
            <NavBar />
            <div id='blog_header_bg' className="blog_header">
                <div className='title_blog_h'>
                    <h2>
                        Blog
                    </h2>
                    <h3>The Gift of Life: Why Blood Donation Matters</h3>
                    <p>In this blog, we delve into the profound impact of blood donation and why it's a crucial act of kindness that saves lives. Discover the inspiring stories behind 
                           blood donation and learn how you can make a difference today.</p>
                </div>
            </div>

            <div className="blog-container">
                <div className="blog-cards">
                    {blogsData.map(blog => (
                        <div key={blog.id} className="blog-card">
                            <img src={blog.image} alt={blog.title} />
                            <div className='blog_texts'>
                                <h4>{blog.title}</h4>
                                <p>{blog.content}</p>
                                <h6>{blog.date}</h6>
                                Read More
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Blog;