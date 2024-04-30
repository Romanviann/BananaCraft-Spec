import {ToastContainer} from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import React from "react";

interface ErrorToastProps {
    showError: boolean;
    setShowError: React.Dispatch<React.SetStateAction<boolean>>;
}

function ErrorToast({showError, setShowError}: ErrorToastProps) {

    return (
        <ToastContainer position="top-end" className="p-3" style={{zIndex: 1}}>
            <Toast onClose={() => setShowError(() => !showError)} show={showError} delay={3500} autohide>
                <Toast.Header>
                    <strong className="me-auto">Not Found</strong>
                </Toast.Header>
                <Toast.Body>We went bananas searching for your aircraft but could not find it. Try something
                    else.</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default ErrorToast;