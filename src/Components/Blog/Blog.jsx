import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleAddToBookmark }) => {

    const { title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className='ml-2 text-xl text-red-800'
                    ><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) =>
                        <span
                            key={idx}>
                            <a>{hash}</a>
                        </span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;