import React from 'react';
import { toast } from 'react-hot-toast';

const CancelOrderModal = ({deleteOrder, setDeleteOrder, refetch}) => {
    const { _id, name } = deleteOrder;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/order${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.deletedCount) {
          toast.success(`Deleted ${name} successfully.`);
          setDeleteOrder(null);
          refetch();
        } else {
          toast.error("Failed to delete.");
        }
      });
  };
    return (
        <div>
      <input
        type="checkbox"
        id="delete-order-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete {name}!
          </h3>
          <p className="py-4">
            Once you remove {name}. {name} information will be removed from UI
            as well as Database. So, think once before removing {name}.
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-xs btn-error"
            >
              Remove Order
            </button>
            <label for="delete-order-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CancelOrderModal;