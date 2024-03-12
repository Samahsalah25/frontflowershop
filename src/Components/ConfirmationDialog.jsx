// ConfirmationDialog.js
import React from "react";

const ConfirmationDialog = ({
  productName,
  productImage,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="confirmation-dialog">
      <img src={productImage} alt={productName} className="product-image" />
      <p className="confirmation-message">
        Are you sure you want to delete {productName}?
      </p>
      <div className="confirmation-buttons">
        <button onClick={onConfirm} className="confirm-button">
          Confirm
        </button>
        <button onClick={onCancel} className="cancel-button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
