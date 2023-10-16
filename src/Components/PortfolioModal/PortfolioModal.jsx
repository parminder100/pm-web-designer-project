import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../PortfolioModal/PortfolioModal.css"
import { useEffect } from 'react';

const PortfolioModal = ({show, onClose, selectedPortfolio}) =>{
    useEffect(()=>{
        const handleOutsideClick = (e) =>{
            if(show && e.target.classList.contains('modal')){
                onClose();
            }
        };

        document.body.addEventListener('click', handleOutsideClick);

        return () =>{
            document.body.removeEventListener('click', handleOutsideClick);
        }
    }, [show, onClose]);

    if(!selectedPortfolio){
        return null;
    }

    return(
        <>
            <div class={`modal fade ${show ? 'show': ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" onClick={onClose} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {
                                selectedPortfolio &&(
                                    <div>
                                        <p className='portfolio-modal-heading'>{selectedPortfolio.portfolioModalHeading}</p>
                                        <p className='portfolio-modal-description'>{selectedPortfolio.portfolioModalDescription}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PortfolioModal;