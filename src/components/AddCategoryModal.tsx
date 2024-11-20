import { useState, useEffect } from "react";
import { addCategory } from "../services/products.service";

interface AddCategoryModalProps {
    showAddModal: boolean;
    setShowAddModal: (show: boolean) => void;
    setReload: (reload: boolean) => void;
}

const AddCategoryModal = ({
    showAddModal,
    setShowAddModal,
    setReload,
}: AddCategoryModalProps) => {
    const [categoryName, setCategoryName] = useState("");
    const [error, setError] = useState("");

    // Reset form fields function
    const resetForm = () => {
        setCategoryName(""); // Reset category name field
        setError(""); // Reset error state
    };

    // Modal control logic
    useEffect(() => {
        const modal = document.getElementById(
            "add_category_modal"
        ) as HTMLDialogElement;
        if (modal) {
            if (showAddModal) {
                modal.showModal();
            } else {
                resetForm();
                modal.close();
            }
        }
    }, [showAddModal]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!categoryName) {
            setError("Category name is required.");
            return;
        }

        try {
            await addCategory(categoryName);
            setReload(true);
            setShowAddModal(false);
        } catch (error) {
            console.error("Error adding category:", error);
            setError("Failed to add category. Please try again.");
        }
    };

    return (
        <dialog id="add_category_modal" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => setShowAddModal(false)}
                    >
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">Add New Category</h3>
                {error && <p className="text-red-500">{error}</p>}
                <form className="py-4 flex flex-col" onSubmit={handleSubmit}>
                    <label className="form-control w-full mb-2">
                        <div className="label">
                            <span className="label-text">Category Name</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Category Name"
                            className="input input-bordered w-full rounded-md"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            required
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-amber-600 px-4 py-2 text-base text-white hover:bg-amber-700 transition mt-4"
                    >
                        Add Category
                    </button>
                </form>
            </div>
        </dialog>
    );
};

export default AddCategoryModal;
