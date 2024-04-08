import "./SpecModal.css"
import { useRef } from 'react';
export default function SpecModal() {

    const modalRef = useRef<HTMLDivElement>(null);
    const showModal = () => {
        if (modalRef.current) {
            // Show the modal
            const modal = new window.bootstrap.Modal(modalRef.current);
            modal.show();
        }
    };

    return (
        <>
            <div className="modal fade" ref={modalRef} tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">🍌 Aircraft Spec</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ... Bananas
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}