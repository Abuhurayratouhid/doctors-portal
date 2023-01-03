import React from 'react';

const ConfirmetionModal = ({title, message, cancelAction,successAction, info}) => {
    return (
        <div>
            {/* The button to open modal */}
            

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="deleteModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={()=>successAction(info)} htmlFor="deleteModal" className="btn">Yes </label>
                        <button onClick={cancelAction} className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmetionModal;