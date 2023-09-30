import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../BlogModal/BlogModal.css";
import { useEffect } from 'react';
// import { BlogModalData } from '../BlogModalData/BlogModalData';

const BlogModal = ({show, onClose, selectedBlog}) =>{

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (show && e.target.classList.contains('modal')) {
                onClose();
            }
        };

        document.body.addEventListener('click', handleOutsideClick);

        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, [show, onClose]);

    if(!selectedBlog){
        return null;
    }

    // const matchingBlogModalData = BlogModalData.find((item)=>item.id === selectedBlog.id);
    return(
        <>
            <div className={`modal fade ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {selectedBlog && (
                                <div>
                                    <p className='blog-modal-title'>{selectedBlog.blogModalTitle}</p>
                                    <p className='blog-modal-heading'>{selectedBlog.blogModalHeading}</p>
                                    {
                                        selectedBlog.blogModalItems && (
                                        <ul className='blog-modal-items'>
                                            {
                                                selectedBlog.blogModalItems.map((item,id)=>(
                                                    <li key={id}>
                                                        <strong>{item.split(': ')[0]}: </strong>{item.split(': ')[1]}
                                                    </li>
                                                ))
                                            }
                                        </ul>  
                                    )}
                                    <p>{selectedBlog.blogModalDescription}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogModal;