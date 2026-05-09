import axios from "axios";
import { useNavigate } from "react-router-dom";

const DepartmentButtons = ({ _id, onDepartmentDelete }) => {
    const navigate = useNavigate();

    // DELETE
    const handleDelete = async () => {
        if (!_id) {
            alert("Department ID not found");
            return;
        }

        const confirmDelete = window.confirm("Do you want to delete this department?");

        if (!confirmDelete) return;

        try {
            const response = await axios.delete(
                `http://localhost:5000/api/departments/${_id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );

            if (response.data.success) {
                onDepartmentDelete(_id); // remove from UI list
            } else {
                alert("Delete failed");
            }

        } catch (error) {
            alert(error.response?.data?.error || "Server Error");
        }
    };

    // EDIT
    const handleEdit = () => {
        if (!_id) {
            alert("Department ID not found");
            return;
        }

        navigate(`/admin-dashboard/departments/${_id}`);
    };

    return (
        <div className="flex space-x-3">
            
            {/* EDIT BUTTON */}
            <button
                className="px-3 py-1 bg-teal-600 text-white rounded hover:bg-teal-700"
                onClick={handleEdit}
            >
                Edit
            </button>

            {/* DELETE BUTTON */}
            <button
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={handleDelete}
            >
                Delete
            </button>

        </div>
    );
};

export default DepartmentButtons;