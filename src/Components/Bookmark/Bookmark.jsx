import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {

    const {title} = bookmark;
    return (
        <div className= 'p-2 m-2 rounded-xl bg-white'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired,

}

export default Bookmark;